<template>
    <div class="tab-destination">
      <div class="tab-destination-card">
        <p>From</p>
        <input class="card-input" type="text" id="departure-country" v-model="departureCountryName" @input="getDepartureAirportName" placeholder="Country Name" />
        <div v-if="departureCountryName && departureAirportName === null">
          <span id="departure-airport">No airports found</span>
        </div>
        <div v-if="departureAirportName !== null">
          <span id="departure-airport">{{ departureAirportName }}</span>
        </div>
      </div>
      <div class="departure-arrows">
        <i class="fas fa-exchange-alt"></i>
      </div>
      <div class="tab-destination-card">
        <p>To</p>
        <input class="card-input" type="text" id="arrival-country" v-model="arrivalCountryName" @input="getArrivalAirportName" placeholder="Country Name" />
        <div v-if="arrivalCountryName && arrivalAirportName === null">
          <span id="arrival-airport">No airports found</span>
        </div>
        <div v-if="arrivalAirportName !== null">
          <span id="arrival-airport">{{ arrivalAirportName }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        departureCountryName: '',
        arrivalCountryName: '',
        departureAirportName: null,
        arrivalAirportName: null,
        airports: {
          pakistan: 'Jinnah International Airport',
          india: 'Indira Gandhi International Airport',
          spain: 'Adolfo Suárez Madrid–Barajas Airport',
          iran: 'Imam Khomeini International Airport',
          japan: 'Tokyo Haneda Airport'
        }
      };
    },
    methods: {
      getDepartureAirportName() {
        const country = this.departureCountryName.trim().toLowerCase();
        if (country in this.airports) {
          this.departureAirportName = this.airports[country];
        } else {
          this.departureAirportName = null;
        }
      },
      getArrivalAirportName() {
        const country = this.arrivalCountryName.trim().toLowerCase();
        if (country in this.airports) {
          this.arrivalAirportName = this.airports[country];
        } else {
          this.arrivalAirportName = null;
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .tab-destination {
    display: flex;
    position: relative;
    width: 100%;
    .departure-arrows{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 30px;
            background: var(--red-300);
            border-radius: var(--radius-circle);
            border: 2px solid $white;
        }
    }
  }
  
  .tab-destination-card {
    background: $red-300;
    width: 100%;
    padding: var(--spacing-5);
    margin: var(--spacing-1);
    border-radius: var(--radius-md);
    p {
      margin: var(--spacing-1) 0;
    }
    input[type="text"] {
      font-size: var(--text-h3);
      border: none;
      outline: none;
      background: transparent;
      padding: 0;
      z-index: 3;
      position: relative;
    }
  }
  </style>
  