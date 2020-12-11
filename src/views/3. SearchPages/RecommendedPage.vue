<template>
    <div>
         <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Recommended</h1>
      <div class="section">
        <tiny-slider>
          <div class="slider-item">1</div>
          <div class="slider-item">2</div>
          <div class="slider-item">3</div>
          <div class="slider-item">4</div>
          <div class="slider-item">5</div>
          <div class="slider-item">6</div>
        </tiny-slider>
      </div>
    </section>
    <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Explorar</h1>
      <div class="section__explore grid-container mb-8">
        <div class="service__card mb-3" v-for="service in services" :key="service['.key']">
          <div class="service__thumbnail relative overflow-hidden">
            <img class="service__image absolute w-full" width="250" :src="service.featured_image">
          </div>
          <div class="service__content bg-white p-3 border rounded">
            <div class="service__type font-semibold text-xs uppercase text-teal-dark mb-1">
              {{ service.type }}
            </div>
            <div class="service__title font-bold mb-2">{{ service.title }}</div>
            <div class="service__price text-xs">
              <span class="font-bold">${{ service.price }} CLP</span> 
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link
          :to="{ name: 'SearchPage' }"
          class="py-3 px-12 bg-yellow-dark no-underline text-yellow-darker text-lg rounded">
          Mostrar todos
        </router-link>
      </div>
    </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TinySlider from '@/components/TinySlider.vue';

export default {
  name: 'Recommeded',
  beforeCreate() {
    this.$store.dispatch('FETCH_SERVICES', 12);
  },
  computed: {
    ...mapGetters([
      'services',
    ]),
  },
  components: {
    TinySlider,
  },
};
</script>


<style lang="css">
  .section__explore {
    grid-template-columns: repeat(4, 1fr);
  }

  .service__card > .service__thumbnail {
    height: 170px;
  }

  .service__thumbnail > .service__image {
    width: 100%;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  @media(max-width: 992px) {
    .service__card > .service__thumbnail {
      height: 150px;
    }
    .section__explore {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media(max-width: 576px) {
    .section__explore {
      grid-template-columns: repeat(1, 1fr);
    }

    .service__card > .service__thumbnail {
      height: 120px;
    }
  }
</style>
