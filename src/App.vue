<template>
  <div id="app">
    <mainHeader :navItems="navbarNavs" />
    <topBanner heading="This is a Heading" subHeading="This is a subheading of banner" bgImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
    <TabsComponent/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa distinctio earum non. Aut minima sit iure et, earum id qui minus culpa quidem nobis temporibus nam a esse quibusdam!</p>
  </div>
</template>

<script>
import mainHeader from './components/Header/main-header';
import topBanner from './components/Banner';
import TabsComponent from './components/Tabs/MainTabs';

export default {
  name: 'App',
  components: {
    mainHeader,
    topBanner,
    TabsComponent,
  },
  data() {
    return {
      navbarNavs: [
        { navLink: 'Home', url: '#', id: 1 },
        { navLink: 'Tours', url: '#', id: 2 },
        { navLink: 'Flights', url: '#', id: 3, subNavs : [
          { navLink: 'Tour 1', url: '#', id: 4 },
          { navLink: 'Tour 2', url: '#', id: 5 },
          { navLink: 'Tour 3', url: '#', id: 6 },
        ]},
        { navLink: 'Hotel', url: '#', id: 7 },
        { navLink: 'Pages', url: '#', id: 8 },
        { navLink: 'Contact', url: '#', id: 9 },
      ],
      
    }
  }
}
</script>

<style>
@import url('./assets/src/scss/style.scss');
</style>
