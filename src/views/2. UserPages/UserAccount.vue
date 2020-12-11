<template>
    <current-user>
          <template slot-scope="{ user }">
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
                      <div class="useraccount__settings">
                        <div class="useraccount__settings-view">
                          <SettingsTabs class="navigation__store-container">
                            
                            <SettingsTab name="SETTINGS" selected="true">
                              <div class="tabslink__statistics">SETTINGS</div>
                            </SettingsTab>
                            <SettingsTab name="ACCOUNTS">
                              <div class="tabslink__store">ACCOUNTS</div>
                            </SettingsTab>
                            <SettingsTab name="DISPUTAS">
                              <div class="tabslink__store">DISPUTAS</div>
                            </SettingsTab>
                            <SettingsTab name="PREGUNTAS">
                              <div class="tabslink__store">PREGUNTAS</div>
                            </SettingsTab>
                            <SettingsTab name="ORDERS">
                              <div class="tabslink__orders">ORDERS</div>
                            </SettingsTab>
                          </SettingsTabs>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
        </template>
    </current-user>
</template>

<script>
import firebase from 'firebase';
import firestore from 'firebase';
import { mapGetters } from 'vuex';
import CurrentUser from '@/components/CurrentUser.vue';
import SettingsTab from '@/components/Tabs/SettingsTabs/SettingsTab.vue'
import SettingsTabs from '@/components/Tabs/SettingsTabs/SettingsTabs.vue'


export default {
  name: 'Account',
  data () {
    return {
      account: {
        name: '',
        username: '',
        avatar: '',
        email: '',
        bio: '',
      },
    };
  },
  mounted() {
    this.account = this.user;
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
  },
  components: {
    SettingsTab,
    SettingsTabs,
    CurrentUser,
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
.useraccount__settings {
  width: 65vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.useraccount__settings-view {
  width: 65vw;
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
.settings__title {

}

</style>