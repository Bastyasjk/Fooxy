<template>
    <transition name="fade">
        <div v-if="show" class="preloader">
            <div class="logo"><img src="../assets/fooxy-icon.png" alt=""></div>
            <p>Preloader</p>
        </div>
    </transition>
</template>

<style scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 9999;  
}
.preloader .logo {
  widows: 12.5rem;
  height: 12.5rem;
  background-repeat: no-repeat;
}
.preloader .logo .p{
  font: 600 1.5rem;
  margin-top: 1rem;
  color: white;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
    name: 'preloader',
    data(){
        return {
            show: true
        }
    },
    mounted() {
        this.showToggle()
    },
    methods: {
        showToggle(){
            setTimeout(() => {
                this.show = false
            }, 1500)
        }
    }
}
</script>
