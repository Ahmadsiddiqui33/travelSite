<template>
    <div >
      <div class="content" v-for="(item, index) in items" :key="index">
        <WhereTo/>
        <JourneyDate :showReturnDate="true" />
        <button class="delete-button" @click="deleteContent(index)"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="btn-wrapper">
        <button class="add_flight" @click="addContent"><i class="fa-solid fa-plus"></i>Add another flight</button>
      </div>
    </div>
  </template>
  
  <script>
  import JourneyDate from './TabsInnerComponents/DatePicker';
  import WhereTo from './TabsInnerComponents/whereTo.vue'
  
  export default {
    name: 'ContentOneWay',
    components: {
      JourneyDate,
      WhereTo
    },
    data() {
      return {
        items: [{ id: 1 }],
        nextItemId: 2, 
      };
    },
    methods: {
      addContent() {
        this.items.push({ id: this.nextItemId });
        this.nextItemId++;
      },
      deleteContent(index) {
        this.items.splice(index, 1);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .content {
    display: flex;
    position: relative;
    .delete-button{
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $primary;
      height: 20px;
      width: 20px;
      border-radius: var(--radius-circle);
      border: 1px solid $primary;
      background: $red-300;
    }
  }
  .add_flight{
    background: none;
    border: none;
    color: $primary;
    i{
      padding-right: var(--spacing-1);
    }
  }
  .btn-wrapper{
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: var(--spacing-2) 0;
  }
  </style>
  