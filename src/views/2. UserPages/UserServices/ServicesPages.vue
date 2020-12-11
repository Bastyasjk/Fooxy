<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input class="input__search" id="where" type="text" placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section>
    <section class="section__services py-6">
      <div class="container">
        <h1 class="text-3xl font-light m-3">Mis Servicios</h1>
        <div class="grid-container">
          <div class="service__card mb-3" v-for="i in 4" :key="i">
            <div class="service__thumbnail relative overflow-hidden">
              <img class="service__image absolute w-full" src="https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80">
            </div>
            <div class="service__content bg-white p-3 border">
              <div class="service__type font-semibold text-xs uppercase text-teal-dark mb-1">
                Private Room
              </div>
              <div class="service__title font-bold mb-2">
                Guest Suite in Historic Architecture Home
              </div>
              <div class="service__price text-xs">
                <span class="font-bold">$592 MXN</span> per night
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'ServicesPages',
  components: {
    PageLayout,
  },
};
</script>
<style>
.section__services .grid-container {
  grid-template-columns: repeat(4, 1fr);
}


  @media(max-width: 992px) {
    .service__card > .service__thumbnail {
      height: 150px;
    }
    .section__services .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media(max-width: 576px) {
    .section__services .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }

    .service__card > .service__thumbnail {
      height: 120px;
    }
  }
</style>
