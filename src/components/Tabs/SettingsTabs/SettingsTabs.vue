<template>
    <div class="tabs__settingstabs-container">

        <nav class="tabs__settingstabs">
            <ul class="tabs__settingstabs-links">
                <li 
                class="settingstabs__links"
                v-for="(settingstab,index) in settingstabs" :key="index">
                    <div 
                    :class="{ 'is-active': settingstab.isActive }"
                    @click="selectTab(settingstab)">
                    {{ settingstab.name }}
                    </div>
                </li>
            </ul>
            <section class="tabs__settingstabs-details">
            <slot></slot>
        </section>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'SettingsTabs',
    data: () => {
        return {
            settingstabs: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.settingstabs.forEach(settingstab => {
                settingstab.isActive = settingstab.name === selectedTab.name;
            });
        }
    },
    created() {
        this.settingstabs = this.$children;
    }
}
</script>

<style lang="scss" scoped>
  .tabs__settingstabs-container {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      display: display;
  }
  .tabs__settingstabs-links {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      display: flex;
      padding: 0;
      list-style: none;
  }

  .tabs__settingstabs-details {
      width: 50%;
      height: 100%;
      border: 1px solid white;
      padding: 10px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .tabs__settingstabs {
      width: 100%;
      height: 100%;
      border: 1px solid white;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
  }
  .tabs__settingstabs-links {
      width: 50%;
      height: 100%;
      border: 1px solid white;
      display: block;
      align-items: center;
      justify-content: center;
      list-style: none;
  }
  .settingstabs__links {
      width: 100%;
      height: 20%;
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
