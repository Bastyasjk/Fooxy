<template>
    <current-user>
          <template slot-scope="{ user }">
            <section class="section__dashboard">
                <div class="dashboard__info">
                  <div class="dashboard__goback">
                    <router-link 
                    class="goback__arrow"
                    :to="{ name: 'HomePage' }">
                      <i class="material-icons">keyboard_arrow_left</i>
                      </router-link>
                  </div>
                  <div class="dashboard__basic-information">
                    <div class="dashboard__avatar-container">
                      <button 
                      @click.prevent="editAvatar"
                      class="btn__editAvatar">
                        <img
                          class="avatar__image"
                          src="@/assets/images/avatar-test155px.png"
                          alt="Avatar">
                      </button>
                    </div>
                    <div class="dashboard__username-container">
                      <span class="dashboard__username">{{ user.name }}</span>
                    </div>
                    <div class="dashboard__bio-container">
                      <span class="dashboard__bio">Hola, soy Bastián estoy aprendiendo Vue Js</span>
                    </div>
                    <div class="dashboard__profile-container">
                      <router-link :to="{ name: 'UserProfile' }">
                      <button class="btn__edit-profile">Edit Profile</button>
                      </router-link>
                    </div>
                    <div class="dashboard__badges-container">
                      <div class="badges-storeRanking">BADGE 1</div>
                      <div class="badges-highlightsRanking">BADGE 2</div>
                      <div class="badges-portfolioRanking">BADGE 3</div>
                    </div>
                    
                  </div>
                  <div class="dashboard__statistics">
                    <div class="statistics__tabsnavigation">
                      <div class="statistics__header"></div>
                      <div class="statistics__tabslink">
                        <StatisticsTabs>
                            <StatisticsTab name="STATISTICS" selected="true">
                              <div class="tabslink__statistics">STATISTICS</div>
                            </StatisticsTab>
                            <StatisticsTab name="STORE">
                              <div class="tabslink__store">STORE</div>
                            </StatisticsTab>
                            <StatisticsTab name="HIGHLIGHTS">
                              <div class="tabslink__skilltree">HIGHLIGHTS</div>
                            </StatisticsTab>
                            <StatisticsTab name="PORTFOLIO">
                              <div class="tabslink__portfolio">PORTFOLIO</div>
                            </StatisticsTab>
                        </StatisticsTabs>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <!-- TABS -->
            
              <!-- MODAL DASHBOARD - AVATAR -->
                <ModalDashboard :show="modalsdashboard.avatarEdit" @close-modal="closeModalEditAvatar">
                      <div class="modal__login-title">
                        <h3 >
                          Welcome Back
                        </h3>
                      </div>
                  <div class="modal__login-subtitle">
                    <span>
                      Start using fooxy.io in less than a minute
                    </span>
                  </div>
                </ModalDashboard>
          </template>
    </current-user>
</template>

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
.dashboard__goback {
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
.dashboard__basic-information {
  width: 30vw;
  height: 100%;
  display: block;
  border: 1px solid white;
}
.dashboard__avatar-container {
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.btn__editAvatar{
    width: 200px;
    height: 200px;
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
.avatar__image {
  width: 150px;
  height: 150px;
}
.dashboard__username-container {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.dashboard__username {
  font-size: 16px;
}
.dashboard__bio-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white; 
  padding: 5px;
}
.dashboard__bio {
  font-size: 14px;
  text-align: center;
}
.dashboard__profile-container {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white; 
  padding: 5px;
}
.btn__edit-profile {
  width: 150px;
  height: 35px;
  color: white;
  border: 1px solid white;
  font-size: 14px;
  outline-style: none !important;
}
.btn__edit-profile:hover { 
  background: blue;
  color: white;
}
.dashboard__badges-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;  
}
.badges-storeRanking {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid white;
  color: white;
}
.badges-highlightsRanking {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid white;
  color: white;
}
.badges-portfolioRanking {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid white;
  color: white;
}

.dashboard__statistics {
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.statistics__tabsnavigation {
  width: 40vw;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.statistics__header {
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.statistics__tabslink {
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}

</style>

<script>
import firebase from 'firebase';
import firestore from 'firebase';
import { mapGetters } from 'vuex';
import CurrentUser from '@/components/CurrentUser.vue';
import ModalDashboard from '@/components/ModalDashboard.vue';
import StatisticsTab from '@/components/Tabs/StatisticsDashboard/StatisticsTab.vue';
import StatisticsTabs from '@/components/Tabs/StatisticsDashboard/StatisticsTabs.vue';

export default {
  name: 'Dashboard',
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
    ...mapGetters([
      'modalsdashboard',
    ]),
  },
  components: {
    ModalDashboard,
    StatisticsTabs,
    StatisticsTab,
    CurrentUser,
  },
  methods: {
    //FUNCIÓN PARA ABRIR EL MODAL - EDITAR AVATAR //
    editAvatar() {
      this.$store.dispatch('TOGGLE_MODALDASHBOARD_STATE', {
        name: 'avatarEdit',
        value: true,
      });
    },
    //FUNCIÓN PARA CERRAR EL MODAL - EDITAR AVATAR //
    closeModalEditAvatar () {
      this.$store.dispatch('TOGGLE_MODALDASHBOARD_STATE', {
        name: 'avatarEdit',
        value: false,
      });
    },
  },
};
</script>
