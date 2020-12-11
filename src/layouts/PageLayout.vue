<template>
  <div class="page-layout">
    <header-partial></header-partial>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import HeaderPartial from '@/partials/HeaderPartial.vue';

export default {
  name: 'PageLayout',
  components: {
    HeaderPartial,
  },
};
</script>

<style>

</style>
