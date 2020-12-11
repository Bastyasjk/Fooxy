<template>
    <div class="tabs__statistics-container">
        <header class="tabs__statistics">
            <ul class="tabs__statistics-links">
                <li 
                class="statistics__links"
                v-for="(statisticstab,index) in statisticstabs" :key="index">
                    <div 
                    :class="{ 'is-active': statisticstab.isActive }"
                    @click="selectTab(statisticstab)">
                    {{ statisticstab.name }}
                    </div>
                </li>
            </ul>
        </header>
        <section class="tabs__statistics-details">
            <slot></slot>
        </section>
    </div>
</template>

<script>
export default {
    name: 'StatisticsTabs',
    data: () => {
        return {
            statisticstabs: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.statisticstabs.forEach(statisticstab => {
                statisticstab.isActive = statisticstab.name === selectedTab.name;
            });
        }
    },
    created() {
        this.statisticstabs = this.$children;
    }
}
</script>

<style lang="scss" scoped>
  .tabs__statistics-container {
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

  .tabs__statistics-details {
      width: 100%;
      height: 90%;
      border: 1px solid white;
      padding: 10px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .statistics__links {
      width: 25%;
      height: 100%;
      border: 1px solid white;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
          color: #FB140A;
      }
      &:is-active {
          color: #FB140A;
      }
  }
  

</style>
