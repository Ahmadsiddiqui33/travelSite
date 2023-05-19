<template>
  <div>
        <nav class="main-nav">
            <brandLogo />
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="navItem in navItems" :key="navItem.id" :class="{ active: isActive(navItem.url) }">
                    <a class="nav-link" :href="navItem.url">{{ navItem.navLink }}</a>
                    <ul class="sub-nav" v-if="navItem.subNavs">
                    <li v-for="subNavItem in navItem.subNavs" :key="subNavItem.id">
                        <a :href="subNavItem.url">{{ subNavItem.navLink }}</a>
                    </li>
                    </ul>
                </li>
            </ul>
            <btnPrimary class="navbar-btn" text="Become a Partner" url="https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=1501s&ab_channel=TraversyMedia" />
        </nav>
  </div>
</template>

<script>
import btnPrimary from '../Buttons/btn-primary.vue'
import brandLogo from './brand-logo.vue'
export default {
  name: 'mainHeader',
  props: ['navItems'],
  methods: {
    isActive(url) {
      return window.location.href === url;
    }
  },
  components : {
    btnPrimary,
    brandLogo
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
