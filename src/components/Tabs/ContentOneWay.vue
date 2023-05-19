<template>
    <div class="content">
        <TabDestination text="From" icon="fas fa-plane-departure" departure="JFK - John F. Kennedy International" landing="LCY, London city airport"/>
        <JourneyDate :showReturnDate="false" />
    </div>
</template>


<script>

import TabDestination from './TabsInnerComponents/TabDestination.vue';
import JourneyDate from './TabsInnerComponents/DatePicker'

export default {
    name : 'ContentOneWay',
    components : {
        TabDestination,
        JourneyDate
    }
}
</script>

<style lang="scss">
    .content{
        display: flex;
        }
</style>