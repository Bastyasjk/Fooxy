<template>
  <header class="header__principal">
    <div class="header__container">

      <nav class="navigation__section-left">
          <div class="nav__left-logo"></div>
          <div class="container-logo">
              <router-link :to="{ name: 'Intro' }">
                <img src="../assets/fooxylogo.png" 
                alt="" 
                class="logo__image"/>
              </router-link>
          </div>
          <div class="nav__right-logo"></div>
      </nav>

      <nav class="navigation__section-center">
          <div class="nav__center-left"></div>
          <div class="nav__center-menu">
              <div class="nav__center-menu-marketplace">
                <router-link :to="{ name: 'MarketplacePage' }">M a r k e t p l a c e
                </router-link>
              </div>
              <div class="nav__center-menu-store">
                <router-link :to="{ name: 'StorePage' }">T i e n d a
                </router-link>
              </div>
              <div class="nav__center-menu-explore">
                <router-link :to="{ name: 'ExplorePage' }">E x p l o r a
                </router-link>
              </div>
          </div>
          <div class="nav__center-right"></div>
      </nav>

      <nav class="navigation__section-right">
          <div class="nav__right-left"></div>

          <div class="nav__right-center">
            <!--ELSE : LOGIN - REGISTER -->

            <current-user>
              <template slot-scope="{ user }">
                <div class="items__controls">
                  <div class="flex" v-if="user">
                    <div class="userInfo__container">
                      <!--<router-link 
                      :to="{ name: 'CreateServicePage' }" 
                      class="no-underline text-white mr-2 flex items-center">
                        <i class="material-icons">add</i>
                    </router-link>-->
                    <div class="userCurrency__container">
                      <div class="userCurrency-margin"></div>
                      <div class="userCurrency-image"><img
                          class="image__currency"
                          src="@/assets/images/diamonds-img.png"
                          alt="Avatar">
                      </div>
                      <div class="userCurrency-name">3.000</div>
                      <div class="userCurrency-margin"></div>
                    </div>
                    <div class="userAvatar__container">
                      <button 
                      @click.prevent="openUserNavigation"
                      class="button__userAvatar">
                        <img 
                        class="userAvatar__image"
                        :src="user.userprofile.avatar" 
                        alt="">
                      </button>
                      <!--<div class="text-sm">
                      <p class="text-white leading-none">{{ user.name }}</p> 
                      </div> -->
                      </div>
                      <div class="userName__container">
                        <div class="userName__margin"></div>
                        <div class="userName__title"> {{ user.username }} </div>
                        <div class="userName__status">Online</div>
                        <div class="userName__margin-bottom"></div>
                      </div>
                    </div>
                  </div>
                  <!--ELSE : LOGIN - REGISTER -->
                  <div class="cta__button-container" v-else>
                    <div class="login_btn-container">
                      <button 
                        @click.prevent="getLogin" 
                        class="btn__login">
                        Login
                      </button>
                    </div>
                    <div class="register_btn-container">
                      <button
                        @click.prevent="signUp"
                        class="btn__register">
                        Register
                      </button>
                  </div>
                  </div>
                </div>
              </template>
            </current-user>
          </div>
          <div class="nav__right-right"></div>
        </nav>
      </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import CurrentUser from '@/components/CurrentUser.vue';
import { fb, db } from '../firebase'


export default {
  name: 'HeaderPartial',
   data () {
    return {
    };
  },
  firestore() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
  },
  components: {
    CurrentUser,
  },
  methods: {
    getLogin() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'login',
        value: true,
      });
    },
    signUp() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'mainregister',
        value: true,
      });
    },
    logOut() {
      this.$store.dispatch('LOG_OUT');
    },
    openUserNavigation() {
      this.$store.dispatch('TOGGLE_MODALNAVIGATION_STATE', {
        name: 'usernavigation',
        value: true,
      });
    },
  },
};
</script>

<style>
.header__principal {
  width: 100vw;
  height: 20vh;
  align-items: center;
  justify-content: center;
}
.header__container {
  width: 100vw;
  height: 15vh;
  display: flex;
}

/* MENÚ - NAVEGACIÓN - IZQUIERDO */
.navigation__section-left{
  display: flex;
}
.nav__left-logo {
  width: 8vw;
  height: 15vh;
}
/* LOGO - ANIMACIÓN */
.container-logo {
  width: 10.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo__image {
  width: 95px;
  height: 95px;
}
.logo__image {
      animation: up-and-down 2s ease-in-out infinite alternate;
  }
  @keyframes up-and-down {
    0% {
      transform: translate(0%, 15%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }

.nav__right-logo {
  width: 5.25vw;
  height: 15vh;
}
/* MENÚ - NAVEGACIÓN - CENTRO */
.navigation__section-center {
  width: 42vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__center-left {
  width: 5.25vw;
  height: 15vh;
}
.nav__center-menu {
  width: 31.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* MENÚ - LINK: MARKETPLACE  */
.nav__center-menu-marketplace {
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  width: 10.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
}
/* MENÚ - LINK: STORE  */
.nav__center-menu-store {
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  width: 10.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
}
/* MENÚ - LINK: EXPLORE  */
.nav__center-menu-explore {
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  width: 10.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
}
.nav__center-right {
  width: 5.25vw;
  height: 15vh;
}
.navigation__section-right {
  width: 34.25vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__right-left {
  width: 5.25vw;
  height: 15vh;
}
.nav__right-center {
  width: 21vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* USER AVATAR */
.userInfo__container {
  width: 21vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userCurrency__container{
  width: 7vw;
  height: 15vh;
  display: block;
}
.userCurrency-margin {
  width: 100%;
  height: 15%;
}
.userCurrency-image {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image__currency {
  width: 34px;
  height: 44px;
}
.userCurrency-name {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Michroma', sans-serif;
  font-size: 6px;
  color:var(--primary-neon);
  text-transform: uppercase;
  text-shadow:var(--neon-shadow-text);
}
.userCurrency-margin-bottom {
  width: 100%;
  height: 25%;
}
.userAvatar__container {
  width: 7vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button__userAvatar {
  width: 65px;
  height: 65px;
  border: 4px solid #D7BC8F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-style: none !important;
}
.userAvatar__image {
  width: 60px;
  height: 60px;
}
.userName__container{
  width: 7vw;
  height: 15vh;
  display: block;
}
.userName__margin {
  width: 100%;
  height: 30%;
}
.userName__title {
  width: 100%;
  height: 20%;
  font-family: 'Michroma', sans-serif;
  font-size: 8px;
  color:var(--primary-neon);
  text-transform: uppercase;
  text-shadow:var(--neon-shadow-text);
}
.userName__status {
  width: 100%;
  height: 20%;
  font-family: 'Michroma', sans-serif;
  font-size: 8px;
  color:var(--primary-neon);
  text-transform: uppercase;
  text-shadow:var(--neon-shadow-text);
}
/* CALL TO ACTIONS - INGRESO / REGISTRO */
.cta__button-container {
  width: 21vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_btn-container {
  width: 10.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register_btn-container {
  width: 10.5vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* BOTÓN DE INGRESO */
.btn__login {
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  color:var(--primary-neon);
  text-transform: uppercase;
  text-shadow:var(--neon-shadow-text);
  padding: 10px;
  border-radius: 5px;
  outline-style: none !important;
}
.btn__login:hover {
  color:var(--bright-neon);
  text-shadow:var(--neon-shadow-text);
}
.btn__login:active {
  color:var(--bright-neon);
  text-shadow:var(--neon-shadow-text);
}
/* BOTÓN DE REGISTRO */
.btn__register {
  font-family: 'Michroma', sans-serif;
  font-size: 12px;
  color:var(--primary-neon);
  text-transform: uppercase;
  padding: 10px;
  border: 1px solid var(--primary-neon);
  border-radius: 5px; 
  text-shadow:var(--neon-shadow-text);
  box-shadow:var(--neon-shadow);
  outline-style: none !important;
  animation: flicker 10s linear infinite;
}
@keyframes flicker {
  0% {
    box-shadow:var(--neon-shadow);
  }
  45% {
    box-shadow:var(--neon-shadow-pulse);
  }
  90% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
    color:var(--primary-neon);
    text-shadow:var(--neon-shadow-text);
  }
  90.01% {
    box-shadow:none;
    border-color:var(--off-neon);
    color:var(--off-neon);
    text-shadow:none;
  }
  94% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  94.01% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  95% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  95.01% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  95.5% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  95.51% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  96% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  96.01% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  96.5% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  96.51% {
    box-shadow:var(--neon-shadow-bright);
    border-color:var(--primary-neon);
  }
  100% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
}

.nav__right-right {
  width: 8vw;
  height: 15vh;
}




</style>
