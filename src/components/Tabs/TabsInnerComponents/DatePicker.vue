<template>
  <div class="date-selector">
    <div class="date-container">
      <label class="date-label" for="journey-date">Journey Date</label><br>
      <input
        type="date"
        id="journey-date"
        v-model="journeyDate"
        @input="updateJourneyDate"
      />
      <span>{{ getDayOfWeek(journeyDate) }}</span>
    </div>
    <div class="date-container" v-if="showReturnDate">
      <label class="date-label" for="return-date">Return Date</label><br>
      <input
        type="date"
        id="return-date"
        v-model="returnDate"
        @input="updateReturnDate"
      />
      <span>{{ getDayOfWeek(returnDate) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showReturnDate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      journeyDate: '',
      returnDate: ''
    };
  },
  methods: {
    updateJourneyDate(event) {
      this.journeyDate = event.target.value;
    },
    updateReturnDate(event) {
      this.returnDate = event.target.value;
    },
    getDayOfWeek(dateString) {
      if (!dateString) return '';
      
      const date = new Date(dateString);
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[date.getDay()];
    }
  }
};
</script>

<style scoped lang="scss">
.date-selector{
    display: flex;
    border-radius: var(--radius-md);
    margin: var(--spacing-1);
    background-color: var(--red-300);
    width: 100%;
    .date-container{
    padding: var(--spacing-5);
        input[type="date"] {
            width: 100%;
            font-family: sans-serif;
            font-size: var(--text-h3);
            border: none;
            outline: none;
            background: transparent;
            padding: 0;
            &::placeholder{
                color: var(--gray-500);
            }
            }
    }
}
</style>
