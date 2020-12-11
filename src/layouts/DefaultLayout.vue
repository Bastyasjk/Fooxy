<template>
  <div class="default-layout">
    <header-partial class="z-index__correct"></header-partial>
    <section class="section__hero py-6 bg-black bg-cover bg-center">
      <div class="container w-full">
        <div class="section__form bg-transparent p-10 w-full">
          <h1 class="mb-5 text-white">Discover the new era of work.</h1>
        </div>
      </div>
    </section>
    <!-- M O D A L   -   L O G I N -->
    <transition name="fade" appear>
    <modal :show="modals.login" @close-modal="closeModalLogin">
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
      <form @submit.prevent="loginHandlerSubmit">
        <div class="email__input">
          <label class="input__label">Email</label>
          <div class="form__field relative">
            <input v-model="formLogin.email" class="input__field" type="text" placeholder="bruce.wayne@imnotbatman.org">
          </div>
        </div>
        <div class="password__input">
          <label class="input__label">Password</label>
          <div class="form__field relative">
            <input v-model="formLogin.password" class="input__field" type="password" placeholder="*********">
          </div>
        </div>
        <div class="login__btn-container">
          <button class="btn__login-confirm">Login</button>
        </div>
        <div class="toggle__rememberme">
          <div class="text-rememberme">Remember Me</div>
          <toggle-input v-model="formLogin.rememberMe"></toggle-input>
        </div>
      </form>
    </modal>
    </transition>
    <!-- M O D A L   -   R E G I S T E R   -    P R I N C I P A L -->
    <transition name="fade" appear>
    <modal :show="modals.mainregister" @close-modal="closeModalMainRegister">
      <div class="modal__register-title">
        <h3 >
          Sign Up
        </h3>
      </div>
      <div class="modal__register-subtitle">
        <span>
          Start using fooxy.io in less than a minute
        </span>
      </div>
      <div class="btn__gmailregister-container">
        <button
          class="btn__gmailregister">
          Continue with Google
        </button>
      </div>
      <div class="btn__githubregister-container">
        <button
          class="btn__githubregister">
          Continue with Github
        </button>
      </div>
      <div class="btn__dribbbleregister-container">
        <button
          class="btn__dribbbleregister">
          Continue with Dribbble
        </button>
      </div>
      <div class="btn__emailregister-container">
        <button @click.prevent="openEmailRegister"
          class="btn__emailregister">
          Sign up with Email
        </button>
      </div>
    </modal>
    </transition>
     <!-- M O D A L  -  R E G I S T E R   B Y   E M A I L -->
    <transition name="fade" appear>
        <modal :show="modals.emailregister" @close-modal="closeModalEmailRegister">
          <form class="form" @submit.prevent="registerHandlerSubmit">
              <div class="username__input">
                <label class="input__label" for="username">Username</label>
                <div class="form__field relative">
                    <input 
                    class="input__field"
                    id="username"
                    v-model="formRegister.username"
                    type="text"
                    placeholder="Bastián Inostroza">
                </div>
              </div>
              <div class="email__input">
                <label class="input__label" for="email">Email</label>
                <div class="form__field relative">
                    <input 
                    class="input__field"
                    id="email"
                    v-model="formRegister.email"
                    type="email"
                    placeholder="contacto@fooxyapp.com">
                </div>
              </div>
              <div class="password__input">
                <label class="input__label" for="password">Password</label>
                <div class="form__field relative">
                    <input 
                    class="input__field"
                    id="password"
                    v-model="formRegister.password"
                    type="password"
                    placeholder="Create a Password">
                </div>
              </div>
              <div class="register__btn-container">
                <button class="btn__register-confirm">Create account</button>
              </div>
          </form>
      </modal>
    </transition>
    <!-- M O D A L  -  R E G I S T E R   P R O F I L E -->
    <transition name="fade" appear>
        <modal :show="modals.profileregister" @close-modal="closeModalProfileRegister">
          <form class="form" @submit.prevent="registerProfile">
              <div class="username__input">
                <label class="input__label" for="firstname">First Name</label>
                <div class="form__field relative">
                    <input 
                    class="input__field"
                    id="firstname"
                    v-model="formProfile.firstname"
                    type="text"
                    placeholder="Bastián">
                </div>
              </div>
              <div class="username__input">
                <label class="input__label" for="lastname">Last Name</label>
                <div class="form__field relative">
                    <input 
                    class="input__field"
                    id="lastname"
                    v-model="formProfile.lastname"
                    type="text"
                    placeholder="Inostroza Álvarez">
                </div>
              </div>
              <div class="mb-4">
                <label class="input__label" for="avatar">Avatar</label>
                <input id="avatar" v-model="formProfile.avatar" class="input__field" type="text" placeholder="https://images.unsplash.com/photo-1432303492674-642e9d0944b">
              </div>
              <div class="username__input">
                <label class="input__label" for="profession">Profession</label>
                <div class="form__field relative">
                    <input 
                    class="input__field"
                    id="profession"
                    v-model="formProfile.profession"
                    type="text"
                    placeholder="FrontEnd Developer">
                </div>
              </div>
              <div class="register__btn-container">
                <button class="btn__register-confirm">Create account</button>
              </div>
          </form>
      </modal>
    </transition>
    <!-- M O D A L   -   U S E R   N A V I G A T I O N -->
    <!-- M O D A L   -   U S E R   N A V I G A T I O N -->
    <transition name="fade" appear>
      <ModalNavigation :show="modalsnavigation.usernavigation" @close-modal="closeModalUserNavigation">
        <current-user>
          <template slot-scope="{ user }">
            <div class="modal_usernavigation">
              <div class="avatar__container">
                    <img 
                      class="userAvatar__image"
                      :src="user.userprofile.avatar" 
                      alt="">
              </div>
              <div class="name__container">
                {{ user.username }}
              </div>
              <div class="logout__btn-container">
                <router-link :to="{ name: 'UserProfile' }">
                  <button 
                  class="btn__logout-confirm">
                    Profile
                  </button>
                </router-link>
              </div>
              <div class="logout__btn-container">
                <router-link :to="{ name: 'UserDashboard' }">
                  <button 
                  class="btn__logout-confirm">
                    Dashboard
                  </button>
                </router-link>
              </div>
              <div class="logout__btn-container">
                <router-link :to="{ name: 'UserStore' }">
                  <button 
                  class="btn__logout-confirm">
                    Store
                  </button>
                </router-link>
              </div>
              <div class="logout__btn-container">
                <router-link :to="{ name: 'UserAccount' }">
                  <button 
                  class="btn__logout-confirm">
                    Account
                  </button>
                </router-link>
              </div>
              <div class="logout__btn-container">
                <button 
                @click.prevent="logOut"
                class="btn__logout-confirm">
                  Log Out
                </button>
              </div>
            </div>
          </template>
        </current-user> 
      </ModalNavigation>
    </transition>
     <!-- M O D A L S -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderPartial from '@/partials/HeaderPartial.vue';
import MenuNavigation from '@/partials/MenuNavigation.vue';
import ModalNavigation from '@/components/ModalNavigation.vue'
import Modal from '@/components/Modal.vue';
import ToggleInput from '@/components/ToggleInput.vue';
import CurrentUser from '@/components/CurrentUser.vue';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      formLogin: {
        email: '',
        password: '',
        rememberMe: false,
      },
      formRegister: {
        email: '',
        username: '',
        password: '',
      },
      formProfile: {
        firstname: '',
        lastname: '',
        avatar: '',
        profession: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
    }),
    ...mapGetters([
      'modalsnavigation',
      'modals',
    ]),
  },
  components: {
    HeaderPartial,
    MenuNavigation,
    ModalNavigation,
    Modal,
    ToggleInput,
    CurrentUser,
  },
  methods: {
    //FUNCIÓN PARA ABRIR EL MODAL - LOGIN //
    getLogin() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'login',
        value: true,
      });
    },
    //FUNCIÓN PARA CERRAR EL MODAL - LOGIN //
    closeModalLogin () {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'login',
        value: false,
      });
    },
    //FUNCIÓN PARA ABRIR EL MODAL - REGISTER //
    signUp() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'mainregister',
        value: true,
      });
    },
    //FUNCIÓN PARA CERRAR EL MODAL - REGISTER //
    closeModalMainRegister() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'mainregister',
        value: false,
      });
    },
    //FUNCIÓN PARA ABRIR EL MODAL - EMAIL REGISTER //
    openEmailRegister() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'emailregister',
        value: true,
      }),
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'mainregister',
        value: false,
      });
    },
    //FUNCIÓN PARA CERRAR EL MODAL - EMAIL REGISTER //
    closeModalEmailRegister() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'emailregister',
        value: false,
      });
    },


    //FUNCIÓN PARA CERRAR EL MODAL - PROFILE REGISTER //
    openModalProfileRegister() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'profileregister',
        value: true,
      });
    },
    //FUNCIÓN PARA CERRAR EL MODAL - EMAIL REGISTER //
    closeModalProfileRegister() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'profileregister',
        value: false,
      });
    },


    //FUNCIÓN PARA REGISTRAR UN USUARIO //
    registerHandlerSubmit() {
      this.$store.dispatch('CREATE_USER', this.formRegister)
        .then(() => {
          this.closeModalEmailRegister();
          this.openModalProfileRegister();
        });
    },
    //FUNCIÓN PARA INGRESAR UN USUARIO //
    loginHandlerSubmit() {
      this.$store.dispatch('SIGN_IN', {
        email: this.formLogin.email,
        password: this.formLogin.password,
      }).then(() => {
        this.closeModalLogin();
      });
    },


    //FUNCIÓN PARA REGISTRAR UN USUARIO //
    registerProfile() {
      this.$store.dispatch('CREATE_USER_PROFILE', this.formProfile)
        .then(() => {
          this.closeModalProfileRegister();
        });
    },
    //FUNCIÓN PARA CERRAR MODAL DE NAVEGACIÓN DEL USUARIO//
    closeModalUserNavigation() {
        this.$store.dispatch('TOGGLE_MODALNAVIGATION_STATE', {
        name: 'usernavigation',
        value: false,
      });
    },
    //FUNCIÓN PARA CERRAR SESIÓN DEL USUARIO//
    logOut() {
      this.$store.dispatch('LOG_OUT');
      this.$store.dispatch('TOGGLE_MODALNAVIGATION_STATE', {
        name: 'usernavigation',
        value: false,
      });
    },
  },
};
</script>

<style lang="scss">
  h1 {
    font-family: 'Michroma', sans-serif;
    font-size: 32px;
  } 
  h2 {
    font-family: 'Michroma', sans-serif;
    font-size: 24px;
  }
  h3 {
    font-family: 'Michroma', sans-serif;
    font-size: 16px;
    color:var(--primary-neon);
    text-transform: uppercase;
    text-shadow:var(--neon-shadow-text);
  }
  span {
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    color:var(--primary-neon);
    text-shadow:var(--neon-shadow-text);
  }
  .z-index__correct{
    display: flex;
    z-index: 9999;
  }
  .section__hero {
    margin-top: -150px;
    min-height: 850px;
  }
  .section__form {
    margin-top: 250px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }


  .form__field .input-icon {
    top: 7px;
    left: 9px;
  }

  @media(max-width: 576px) {
    .section__hero {
      min-height: 250px;
    }

    .section__form {
      width: 100%;
    }
  }

  /* INPUT - EMAIL */
  .email__input {
    margin-bottom: 25px;
    margin-top: 25px;
  }
  /* INPUT - USERNAME */
  .username__input {
    margin-bottom: 25px;
    margin-top: 25px;
  }
  /* INPUT - PASSWORD */
  .password__input {
    margin-bottom: 25px;
    margin-top: 25px;
  }
  /* TOGGLE - REMEMBERME */
  .toggle__rememberme {
    display: block;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 50px;
  }
  .text-rememberme {
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    color:var(--primary-neon);
    text-transform: uppercase;
    text-shadow:var(--neon-shadow-text);
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
  /* MODAL - LOGIN */
  .modal__login-title {
    margin-top: 50px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal__login-subtitle {
    margin-top: 15px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* BUTTON - LOGIN - CONFIRM*/
  .login__btn-container {
    margin-top: 15px;
  }
  .btn__login-confirm {
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    color:rgb(10, 226, 255);
    border: 1px solid rgba(10, 225, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__login-confirm:hover {
    background: rgb(10, 226, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(10, 225, 255, 0.9);
  }
  /* MODAL - REGISTRO */
  .modal__register-title {
    margin-top: 50px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal__register-subtitle {
    margin-top: 15px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* BUTTON - GMAIL REGISTER BUTTOM*/
  .btn__gmailregister-container {
    margin-top: 25px;
  }
  .btn__gmailregister{
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    color:rgb(255, 255, 255);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__gmailregister:hover {
    background: rgb(255, 255, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
  /* BUTTON - GITHUB REGISTER BUTTOM*/
  .btn__githubregister-container {
    margin-top: 25px;
  }
  .btn__githubregister{
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    color:rgb(26, 10, 255);
    border: 1px solid rgba(10, 108, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__githubregister:hover {
    background: rgb(26, 10, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(10, 108, 255, 0.9);
  }
  /* BUTTON - DRIBBBLE REGISTER BUTTOM*/
  .btn__dribbbleregister-container {
    margin-top: 25px;
  }
  .btn__dribbbleregister{
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    color:rgb(255, 10, 255);
    border: 1px solid rgba(255, 10, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__dribbbleregister:hover {
    background: rgb(255, 10, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(255, 10, 255, 0.9);
  }

  /* BUTTON - EMAIL REGISTER BUTTOM*/
  .btn__emailregister-container {
    margin-top: 25px;
  }
  .btn__emailregister{
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    color:rgb(10, 226, 255);
    border: 1px solid rgba(10, 225, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__emailregister:hover {
    background: rgb(10, 226, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(10, 225, 255, 0.9);
  }

  /* BUTTON - REGISTER */
  .register__btn-container {
    margin-top: 15px;
  }
  .btn__register-confirm {
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    color:rgb(10, 226, 255);
    border: 1px solid rgba(10, 225, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__register-confirm:hover {
    background: rgb(10, 226, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(10, 225, 255, 0.9);
  }

   /* MODAL - USERNAVIGATION */
  .modal_usernavigation {
    display: block;
   }
   
  .avatar__container {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navigation__avatar-image {
    width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .name__container {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Michroma', sans-serif;
    font-size: 14px;
    color:var(--primary-neon);
    text-shadow:var(--neon-shadow-text);
  }

  //LOGOUT BUTTON//
  .logout__btn-container {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .btn__logout-confirm {
    width: 100%;
    padding: 10px;
    background: transparent;
    font-family: 'Michroma', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    color:rgb(10, 226, 255);
    border: 1px solid rgba(10, 225, 255, 0.9);
    border-radius: 5px;
    outline-style: none !important;
  }
  .btn__logout-confirm:hover {
    background: rgb(10, 226, 255);
    font-weight: 900;
    color: black;
    border: 1px solid rgba(10, 225, 255, 0.9);
  }

  /* T R A N S I T I O N - E F F E C T S */
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  
</style>
