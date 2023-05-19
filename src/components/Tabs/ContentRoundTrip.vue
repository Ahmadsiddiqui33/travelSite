<template>
    <div class="content">
        <TabDestination text="From" icon="fas fa-plane-departure" />
        <JourneyDate :showReturnDate="true" />
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