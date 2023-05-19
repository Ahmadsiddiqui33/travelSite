<template>
        <div class="banner" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
        <div class="banner-content">
            <h1 class="banner-heading">{{ heading }}</h1>
            <h3 class="banner-subheading">{{ subHeading }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name : 'topBanner',
    props : {
        heading : String,
        subHeading : String,
        bgImage : String
    }
}
</script>