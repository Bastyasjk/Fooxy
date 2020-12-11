<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input
              class="input__search"
              id="where"
              type="text"
              placeholder="Santiago, Chile">
          </div>
        </form>
      </div>
    </section>
    <section class="section__items py-8">
      <div class="container">
        <h1 class="text-3xl font-light mb-3">Explorar</h1>
        <div class="search__content grid-container mb-8">
          <div class="service__card mb-3" v-for="service in services" :key="service['.key']">
            <div class="service__thumbnail relative overflow-hidden">
              <img class="service__image absolute w-full" width="250" :src="service.featured_image">
            </div>
            <div class="service__content bg-white p-3 border rounded">
              <div class="service__type font-semibold text-xs uppercase text-teal-dark mb-1">
                {{ service.type }}
              </div>
              <div class="service__title font-bold mb-2">
                {{ service.title }}
              </div>
              <div class="service__price text-xs">
                <span class="font-bold">${{ service.price }} CLP</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </page-layout>
</template>


<script>
import { mapGetters } from 'vuex';
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'SearchPage',
  beforeCreate() {
    this.$store.dispatch('FETCH_SERVICES');
  },
  computed: {
    ...mapGetters([
      'services',
    ]),
  },
  components: {
    PageLayout,
  },
};
</script>

<style>
.section__items .grid-container {
  grid-template-columns: repeat(4, 1fr);
}

@media(max-width: 992px) {
  .section__items .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(max-width: 576px) {
  .section__items .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
