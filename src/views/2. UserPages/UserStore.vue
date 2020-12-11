<template>
    <div>
      <section class="section__userstore">
          <div class="userstore__info">
            <div class="userstore__goback">
              <router-link 
              class="userstore__arrow"
              :to="{ name: 'HomePage' }">
                <i class="material-icons">keyboard_arrow_left</i>
                </router-link>
            </div>
              <div class="userstores__store-container">
                <div class="userstores__store">
                  <div class="userstores__store-view">
                    <NavigationTabsStore class="navigation__store-container">
                      <NavigationTabStore name="BALANCE" selected="true">
                        <div class="tabslink__statistics">BALANCE</div>
                      </NavigationTabStore>
                      <NavigationTabStore name="STORE">
                        <div class="tabslink__store">STORE</div>
                      </NavigationTabStore>
                      <NavigationTabStore name="ORDERS">
                        <div class="tabslink__orders">ORDERS</div>
                      </NavigationTabStore>
                    </NavigationTabsStore>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </div>
</template>

<script>
import firebase from 'firebase';
import firestore from 'firebase';
import { mapGetters } from 'vuex';
import NavigationTabStore from '@/components/Tabs/NavigationStore/NavigationTabStore.vue'
import NavigationTabsStore from '@/components/Tabs/NavigationStore/NavigationTabsStore.vue'


export default {
  name: 'Profile',
  data () {
    return {
      dashboard: {
        name: '',
        username: '',
        avatar: '',
        email: '',
        bio: '',
      },
    };
  },
  mounted() {
    this.dashboard = this.user;
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
  },
  components: {
    NavigationTabStore,
    NavigationTabsStore,
  },
};
</script>

<style>
.section__userstore {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.userstore__info {
  width: 84vw;
  height: 84vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.userstore__goback {
  width: 4vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.userstore__arrow {
  width: 100%;
  height: 10%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.userstores__store-container {
  width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.userstores__store {
  width: 50vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.userstores__store-view {
  width: 50vw;
  height: 100%;
  display: flex;
  border: 1px solid white;
}
.userstores__store-tabslinks {
  width: 80vw;
  height: 30%;
  display: flex ;
  border: 1px solid white;
}
.navigation__store-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}


</style>