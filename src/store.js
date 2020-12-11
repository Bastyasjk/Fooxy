import Vue from 'vue';
import Vuex from 'vuex';
import { fb, db } from './firebase';
import countObjectProperties from './utils';

Vue.use(Vuex);

export default new Vuex.Store({
  data() {
    return {
      user: {},
    };
  },
  state: {
    users: {},
    profiles: {},
    services: {},
    addons: {},
    authId: null,
    profileRef: {},
    modalsnavigation: {
      usernavigation: false,
    },
    modalsdashboard: {
      avatarEdit: false,
    },
    modals: {
      login: false,
      mainregister: false,
      emailregister: false,
      profileregister: false,
      editavatar: false,
      editfirstname: false,
    },
  },
  mutations: {
    SET_MODALNAVIGATION_STATE: (state, { name, value }) => {
      state.modalsnavigation[name] = value;
    },
    SET_MODALDASHBOARD_STATE: (state, { name, value }) => {
      state.modalsdashboard[name] = value;
    },
    SET_MODAL_STATE: (state, { name, value }) => {
      state.modals[name] = value;
    },
    SET_SERVICE(state, { newService, serviceId }) {
      Vue.set(state.services, serviceId, newService);
    },
    SET_PROFILE(state, { newProfile, profileId }) {
      Vue.set(state.profiles, profileId, newProfile);
    },
    SET_USER(state, { userId }) {
      Vue.set(state.users, userId);
    },
    APPEND_SERVICE_TO_USER(state, { serviceId, userId }) {
      Vue.set(state.users[userId].services, serviceId, serviceId);
    },
    APPEND_PROFILE_TO_USER(state, { profileId, userId }) {
      Vue.set(state.users[userId].profiles, profileId, profileId);
    },
    SET_ITEM(state, { item, id, resource }) {
      const newItem = item;
      newItem['.key'] = id;
      Vue.set(state[resource], id, newItem);
    },
    SET_AUTHID(state, id) {
      state.authId = id;
    },
  },
  actions: {
    TOGGLE_MODALNAVIGATION_STATE: ({ commit }, { name, value }) => {
      commit('SET_MODALNAVIGATION_STATE', { name, value });
    },
    TOGGLE_MODALDASHBOARD_STATE: ({ commit }, { name, value }) => {
      commit('SET_MODALDASHBOARD_STATE', { name, value });
    },
    TOGGLE_MODAL_STATE: ({ commit }, { name, value }) => {
      commit('SET_MODAL_STATE', { name, value });
    },
    CREATE_USER: ({ state, commit }, { email, username, password }) => new Promise((resolve) => {
      fb.auth().createUserWithEmailAndPassword(email, password).then((account) => {
        const id = account.user.uid;
        const userId = id;
        const registerAt = Math.floor(Date.now() / 1000);
        const newUser = { email, username, registerAt, userId };
        const user = newUser;
        db.collection('users').doc(userId).set(newUser)
          .then(() => {
            commit('SET_ITEM', { resource: 'users', id: userId, item: newUser });
            console.log('1.SET_USER', user);
            resolve(state.users[userId]);
            console.log('2.USER_ID', userId);
          });
      });
    }),
    FETCH_AUTH_USER: ({ dispatch, commit }) => {
      const id = fb.auth().currentUser.uid;
      const userId = id;
      console.log('3.USER_ID', userId);
      return dispatch('FETCH_USER', { userId })
        .then(() => {
          commit('SET_AUTHID', id);
          console.log('5.USER_ID', userId);
          console.log('6.SET AUTH', userId);
        });
    },
    FETCH_USER: ({ state, commit }, { userId }) => new Promise((resolve) => {
      const userRef = db.collection('users').doc(userId);
      userRef.get().then((snapshot) => {
        commit('SET_ITEM', { resource: 'users', id: snapshot.id, item: snapshot.data() });
        resolve(state.users[userId]);
        console.log('4.USER_ID', userId);
      });
    }),
    CREATE_USER_PROFILE: ({ state, commit }, { firstname, lastname, avatar, profession }) => new Promise((resolve) => {
      const profileRef = db.collection('profiles').doc();
      console.log(profileRef.id); // prints the unique id
      const profileId = profileRef.id;
      console.log('PROFILE_ID', profileId);
      const userId = state.authId;
      console.log('USER_ID', userId);
      const newProfile = {
        firstname,
        lastname,
        avatar,
        profession,
        profileId,
        userId,
      };
      const profile = newProfile;
      console.log('PROFILE', profile);
      profileRef.set({ userprofile: profile }) // sets the contents of the doc using the id
        .then(() => {
          profileRef.get();
          console.log('PROFILE_REF', profileRef);
        });
      const userRef = db.collection('users').doc(userId);
      userRef.set({ userprofile: profile }, { merge: true })
        .then(() => {
          userRef.get().then((snapshot) => {
            commit('SET_ITEM', { resource: 'users', id: snapshot.id, item: snapshot.data() });
            console.log('USER_REF', userRef);
            resolve(state.users[userId]);
          });
        });
    }),
    FETCH_PROFILE: ({ state, commit }, profileId) => new Promise((resolve) => {
      const userId = state.authId;
      console.log('USER_ID', userId);
      const userProfileRef = db.collection('users').doc(userId).collection('userprofile').doc(profileId);
      userProfileRef.get()
        .then((snapshot) => {
          console.log('SNAPSHOT_DATA-USERPROFILE', snapshot.data);
          console.log('SNAPSHOT_ID-USERPROFILE', snapshot.id);
          userProfileRef.get();
        });
      const profileRef = db.collection('profiles').doc(profileId);
      profileRef.get()
        .then((snapshot) => {
          console.log('SNAPSHOT_DATA-PROFILE', snapshot.data);
          console.log('SNAPSHOT_ID_PROFILE', snapshot.id);
          commit('SET_ITEM', { resource: 'profiles', id: snapshot.id, item: snapshot.data() });
          console.log('PROFILE_REF', profileRef);
          profileRef.get();
          resolve(state.profiles[profileId]);
        });
    }),
    SIGN_IN(context, { email, password }) {
      return fb.auth().signInWithEmailAndPassword(email, password);
    },
    LOG_OUT({ commit }) {
      fb.auth().signOut()
        .then(() => {
          commit('SET_AUTHID', null);
        });
    },
    CREATE_SERVICE: ({ state, commit }, service) => {
      const newService = service;
      const serviceId = db.collection('services').doc().get().key;
      newService.userId = state.authId;
      newService.publishetAt = Math.floor(Date.now() / 1000);
      newService.meta = { likes: 0 };

      const updates = {};
      updates[`services/${serviceId}`] = newService;
      updates[`users/${newService.userId}/services/${serviceId}`] = serviceId;
      db.collection('services').doc().update(updates).then(() => {
        commit('SET_SERVICE', { newService, serviceId });
        commit('APPEND_SERVICE_TO_USER', { serviceId, userId: newService.userId });
        return Promise.resolve(state.services[serviceId]);
      });
    },
    FETCH_SERVICES: ({ state, commit }, limit) => new Promise((resolve) => {
      let instance = db.collection('services').doc();
      if (limit) {
        instance = instance.limitToFirst(limit);
      }
      instance.once('value', (snapshot) => {
        const services = snapshot.val();
        Object.keys(services).forEach((serviceId) => {
          const service = services[serviceId];
          commit('SET_ITEM', { resource: 'services', id: serviceId, item: service });
        });
        resolve(Object.values(state.services));
      });
    }),
  },
  getters: {
    modals: state => state.modals,
    modalsnavigation: state => state.modalsnavigation,
    modalsdashboard: state => state.modalsdashboard,
    authUser(state) {
      return (state.authId) ? state.users[state.authId] : null;
    },
    profiles: state => state.profiles,
    services: state => state.services,
    userServicesCount: state => id => countObjectProperties(state.users[id].services),
  },
});
