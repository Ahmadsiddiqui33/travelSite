<template>
  <div class="tabs">
    <div class="tab-container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{
          'btn tab': true,
          'btn-primary': activeTab === index,
          'btn-secondary': activeTab !== index
        }"
        @click="activeTab = index"
      >
        <span><i :class="tab.icon" class="tab-icon"></i>{{ tab.title }}</span>
      </div>
    </div>
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <div v-if="index === 0">
          <div class="sub-tab-container">
            <div
              v-for="(subTab, subIndex) in tab.subTabs"
              :key="subIndex"
              :class="{'sub-tab': true, 'sub-active': activeSubTab === subIndex}"
              @click="activeSubTab = subIndex">
              {{ subTab }}
            </div>
          </div> 
          <content-one-way v-show="activeSubTab === 0" />
          <content-round-trip v-show="activeSubTab === 1" />
          <content-multi-city v-show="activeSubTab === 2" />
        </div>
        <div v-else-if="index === 1">
          <div class="content-tours">
            <ToursTab />
          </div>
        </div>
        <div v-else>
          <content-default :tabTitle="tab.title" />
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <button class="btn btn-primary">Search</button>
    </div>
  </div>
</template>

<script>
 import ContentOneWay from './ContentOneWay.vue';
 import ContentRoundTrip from './ContentRoundTrip.vue';
 import ContentMultiCity from './ContentMultiCity.vue';
 import ToursTab from './ToursTab.vue';

export default {
  data() {
    return {
      activeTab: 0,
      activeSubTab: 0,
      tabs: [
        {
          title: 'Flights',
          subTabs: ['One Way', 'Round Trip', 'Multi City'],
          icon: 'fa-solid fa-plane-departure',
        },
        {
          title: 'Tours',
          subTabs: [],
          icon: 'fa-solid fa-globe',
        },
        {
          title: 'Hotels',
          subTabs: [],
          icon: 'fa-solid fa-hotel',
        },
      ],
    };
  },
  components: {
     ContentOneWay,
     ContentRoundTrip,
     ContentMultiCity,
     ToursTab,
  },
};
</script>

<style lang="scss" scoped>
.btn-wrapper{
  width: 100%;
  justify-content: center;
  display: flex;
}

</style>
