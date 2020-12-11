<template>
    <div class="tabs__storenavigation-container">
        <section class="tabs__storenavigation-details">
            <slot></slot>
        </section>
        <nav class="tabs__storenavigation">
            <ul class="tabs__storenavigation-links">
                <li 
                class="storenavigation__links"
                v-for="(navigationtabstore,index) in navigationtabsstore" :key="index">
                    <div 
                    :class="{ 'is-active': navigationtabstore.isActive }"
                    @click="selectTab(navigationtabstore)">
                    {{ navigationtabstore.name }}
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavigationTabsStore',
    data: () => {
        return {
            navigationtabsstore: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.navigationtabsstore.forEach(navigationtabstore => {
                navigationtabstore.isActive = navigationtabstore.name === selectedTab.name;
            });
        }
    },
    created() {
        this.navigationtabsstore = this.$children;
    }
}
</script>

<style lang="scss" scoped>
  .tabs__storenavigation-container {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      display: block;
  }
  .tabs__statistics {
      width: 100%;
      height: 10%;
      border: 1px solid white;
  }
  .tabs__statistics-links {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      display: flex;
      padding: 0;
      list-style: none;
  }

  .tabs__storenavigation-details {
      width: 100%;
      height: 80%;
      border: 1px solid white;
      padding: 10px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .tabs__storenavigation {
      width: 100%;
      height: 20%;
      border: 1px solid white;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
  }
  .tabs__storenavigation-links {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
  }
  .storenavigation__links {
      width: 25%;
      height: 100%;
      margin: 5px;
      border: 1px solid white;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      cursor: pointer;

      &:hover {
          color: #FB140A;
      }
      &:is-active {
          color: #FB140A;
      }
  }
  

</style>
