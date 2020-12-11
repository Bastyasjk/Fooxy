<template>
    <current-user>
          <template slot-scope="{ user }">
              <section class="section__dashboard">
                  <div class="dashboard__info">
                    <div class="profile__goback">
                      <router-link 
                      class="goback__arrow"
                      :to="{ name: 'HomePage' }">
                        <i class="material-icons">keyboard_arrow_left</i>
                        </router-link>
                    </div>
                    
                    <div class="profile__main-container">
                      <div class="profile__basic-information-margin"></div>
                      <div class="profile__basic-information">
                        <div class="profile__avatar-container" id="avatar">
                            <button 
                            @click.prevent="openModalEditAvatar"
                            class="btn__editAvatarProfile">
                            <img
                                class="avatar__profileimage"
                                :src="profile.avatar"
                                alt="Avatar">
                            </button>
                        </div>
                        <div class="profile__basics-container">
                            <div class="profile__basics-margin">
                            </div>
                            <div class="profile__userlocation-userstatus-container">
                                <div class="profile__userlocation">
                                  Santiago, Chile
                                </div>
                                <div class="profile__userstatus">
                                    Online
                                </div>
                            </div>
                            <div class="profile__username-container">
                              <div>
                                <span class="profile__username">{{ profile.firstname }} {{ profile.lastname }}</span>
                              </div>
                              <div>
                                <button class="button__edit" @click="openModalEditFirstname">EDIT</button>
                              </div>
                            </div>
                            
                            <div class="profile__userprofesion-container">
                                <span class="profile__userprofesion">UI Designer / FrontEnd</span>
                            </div>
                            <div class="profile__userplusinfomation-container">
                                <div class="profile__user-level">Lvl. 25</div>
                                <div class="profile__user-ranking">TOP 10</div>
                                <div class="profile__user-experience">500 pts</div>
                            </div>
                            <div class="profile__basics-margin">
                            </div>
                        </div>
                      </div>
                      <div class="profile__badge-container">
                        <div class="featured__badge">Badge 1</div>
                        <div class="featured__badge">Badge 2</div>
                        <div class="featured__badge">Badge 3</div>
                      </div>
                      <div class="profile__button-container">
                        <div class="featured__cta">
                          <router-link :to="{ name: 'UserStore' }">
                          <button class="btn__cta">S T O R E</button>
                          </router-link>
                        </div>
                        <div class="featured__cta">
                          <router-link :to="{ name: 'UserHighlights' }">
                          <button class="btn__cta">H I G H L I G H T S</button>
                          </router-link>
                        </div>
                        <div class="featured__cta">
                          <router-link :to="{ name: 'UserPortfolio' }">
                          <button class="btn__cta">P O R T F O L I O</button>
                          </router-link>
                        </div>
                      </div>
                      
                    </div>
                    <div class="profile__advance-container">
                      <div class="profile__advance-information">
                          <div class="profile__advance-margin"></div>
                          <div class="profile__advance-skills">
                              <div class="skills__title">
                                  S K I L L S
                              </div>
                              <div class="skills__resume-container"></div>
                              <div class="skills__btn-container">
                                <div class="skills__margin-left"></div>
                                <div class="skills__btn">
                                  <router-link :to="{ name: 'UserSkillTree' }">
                                    <button class="btn__goskilltree">
                                    S K I L L   T R E E
                                    </button>
                                  </router-link>
                                </div>
                              </div>
                          </div>
                          <div class="profile__advance-experience">
                              <div class="experiences__title">
                                  E X P E R I E N C E
                              </div>
                              <div class="experiences__resume-container"></div>
                              <div class="experiences__btn-container">
                                <div class="experiences__margin-left"></div>
                                <div class="experiences__btn">
                                  <router-link :to="{ name: 'UserExperienceTree' }">
                                    <button class="btn__goexperiencestree">
                                    E X P E R I E N C E   T R E E
                                    </button>
                                  </router-link>
                                </div>
                              </div>
                          </div>
                          <div class="profile__advance-margin"></div>
                      </div>
                    </div>

                  </div>
                </section>
                <!-- M O D A L  -  R E G I S T E R   P R O F I L E -->
                <modal :show="modals.editavatar" @close-modal="closeModalEditAvatar">
                  <div class="user_avatar-information">
                    <div class="user_avatar-image">
                      <img 
                      :src="profile.avatar" 
                      alt="">
                    </div>
                    <label class="user__avatar">User Avatar</label>
                    <input type="file" @change="uploadImage" class="avatar__input">
                    <button class="button__edit" @click="updateAvatar">UPDATE</button>
                  </div>
                  
              </modal>
    <!-- M O D A L   -   U S E R   N A V I G A T I O N -->
    <!-- M O D A L  -  R E G I S T E R   P R O F I L E -->
                <modal :show="modals.editfirstname" @close-modal="closeModalEditFirstname">
                  <div>
                    <input type="text" name="" v-model="profile.firstname" placeholder="Firstname">
                    <button class="button__edit" @click="updateFirstname">UPDATE</button>
                  </div>
              </modal>
    <!-- M O D A L   -   U S E R   N A V I G A T I O N -->
        </template>
    </current-user>
</template>

<script>
import { fb, db } from '@/firebase';
import { mapGetters } from 'vuex';
import CurrentUser from '@/components/CurrentUser.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Profile',
  data () {
    return {
      profile: {
        firstname: '',
        lastname: '',
        avatar: '',
        email: '',
        bio: '',
        profileId: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
    ...mapGetters([
      'profiles',
      'modals',
    ]),
  },
    components: {
    CurrentUser,
    Modal,
  },
  firestore() {
    const profile = this.user.userprofile; 
    console.log('PROFILE_FIRESTORE-INIT', profile)
    const profileId = profile.profileId;
    console.log('PROFILE_ID', profileId)
    this.$store.dispatch('FETCH_PROFILE', profileId);
    console.log('FETCH_PROFILE_ID', profileId);
    const user = this.user; 
    const userId = this.user.userId;
    console.log('FIRESTORE_USER_ID', userId)
    this.profile = this.user.userprofile;
    console.log('PROFILE_MOUNTED', this.profile);
    return {
      userProfileRef: db.collection('users').doc(userId),
      profileRef: db.collection('profiles').doc(profileId),
    }
  },
  methods: {
    uploadImage(e){
      if(e.target.files[0]){
          let file = e.target.files[0];
          var storageRef = fb.storage().ref('users/profiles/avatars/'+ Math.random() + '_'  + file.name);
          let uploadTask  = storageRef.put(file);
          uploadTask.on('state_changed', (snapshot) => {
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.profile.avatar = downloadURL;
            });
          });
      }
    },
    updateAvatar() {
      this.$firestore.userProfileRef.update({
        "userprofile.avatar": this.profile.avatar,
      });
      this.$firestore.profileRef.update({
        "userprofile.avatar": this.profile.avatar,
      });
    },
    updateFirstname() {
      this.$firestore.userProfileRef.update({
        "userprofile.firstname": this.profile.firstname,
      });
      this.$firestore.profileRef.update({
        "userprofile.firstname": this.profile.firstname,
      });
    },
    openModalEditAvatar() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'editavatar',
        value: true,
      });
    },
    closeModalEditAvatar() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'editavatar',
        value: false,
      });
    },
    openModalEditFirstname() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'editfirstname',
        value: true,
      });
    },
    closeModalEditFirstname() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'editfirstname',
        value: false,
      });
    },
  },
  created(){

  },
};
</script>

<style>
.section__dashboard {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.dashboard__info {
  width: 84vw;
  height: 84vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__goback {
  width: 4vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.goback__arrow {
  width: 100%;
  height: 10%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__main-container {
  width: 35vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.profile__basic-information-margin {
  width: 100%;
  height: 10%;
  border: 1px solid white;
}
.profile__basic-information {
  display: flex;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__badge-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.featured__badge {
  width: 30%;
  height: 80%;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
}
.profile__button-container {
  display: flex;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.featured__cta {
  width: 30%;
  height: 80%;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
}
.btn__cta {
  width: 125px;
  height: 35px;
  font-size: 12px;
  background:rgb(10, 226, 255);
  outline-style: none !important;
}
.profile__avatar-container {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__basics-container {
  width: 60%;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.btn__editAvatarProfile{
  width: 140px;
  height: 140px;
  padding: 10px;
  background: transparent;
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color:rgb(10, 226, 255);
  border: 1px solid rgba(10, 225, 255, 0.9);
  border-radius: 50%;
  outline-style: none !important;
}
.avatar__profileimage {
  width: 120px;
  height: 120px;
  border: 1px solid white;
}
.profile__basics-margin {
  width: 100%;
  height: 15%;
  border: 1px solid white;
}
.profile__userlocation-userstatus-container {
  width: 100%;
  height: 15%;
  display: flex;
  border: 1px solid white;
}
.profile__userlocation {
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  font-size: 12px;
}
.profile__userstatus {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  font-size: 12px;
}
.profile__username-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__username {
  font-size: 20px;
}
.profile__userprofesion-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__userprofesion {
  font-size: 12px;
}
.profile__userplusinfomation-container {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile__user-level {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  font-size: 14px;
}
.profile__user-experience {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  font-size: 14px;
}
.profile__user-ranking {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  font-size: 14px;
}

.profile__advance-container {
  width: 45vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.profile__advance-information {
  width: 35vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.profile__advance-margin {
  width: 100%;
  height: 10%;
  border: 1px solid white;
}
.profile__advance-skills {
  width: 100%;
  height: 40%;
  border: 1px solid white;
}
.skills__title {
  width: 100%;
  height: 15%;
  color: white;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding-left: 25px;
}
.skills__resume-container {
  width: 100%;
  height: 70%;
  color: white;
  border: 1px solid white;
  display: flex;
}
.skills__btn-container {
  width: 100%;
  height: 15%;
  color: white;
  border: 1px solid white;
  display: flex;
}
.skills__margin-left {
  width: 65%;
  height: 100%;
}
.skills__btn {
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn__goskilltree {
  width: 125px;
  height: 35px;
  font-size: 12px;
  background:rgb(10, 226, 255);
  outline-style: none !important;
}
.profile__advance-experience {
  width: 100%;
  height: 40%;
  border: 1px solid white;
}
.experience__title {
  width: 100%;
  height: 15%;
  color: white;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding-left: 25px;
}
.experiences__title {
  width: 100%;
  height: 15%;
  color: white;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding-left: 25px;
}
.experiences__resume-container {
  width: 100%;
  height: 70%;
  color: white;
  border: 1px solid white;
  display: flex;
}
.experiences__btn-container {
  width: 100%;
  height: 15%;
  color: white;
  border: 1px solid white;
  display: flex;
}
.experiences__margin-left {
  width: 65%;
  height: 100%;
}
.experiences__btn {
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn__goexperiencestree {
  width: 125px;
  height: 35px;
  font-size: 12px;
  background:rgb(10, 226, 255);
  outline-style: none !important;
}

.button__edit {
  border: 1px solid white;
  border-radius: 15px;
  padding: 5px;
  color: white;
}




.user__profile-avatar {
  width: 100px;
  height: 100px;
}
.user_avatar-information {
  display: block;
  width: 100%;
}
.user__avatar {
  display: flex;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}
.avatar__input {
  display: block;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
}
.user_avatar-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
}
.user_avatar-image img{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}


</style>