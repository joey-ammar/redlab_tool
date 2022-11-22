<script setup>
  import NavigationVue from './components/Navigation/Navigation.vue';
</script>

<template>
    <NavigationVue />
    <router-view />
</template>

<style lang="scss">
/*Basic Reset*/
    *,
    *::after,
    *::before {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;

    }
    body {
        background-color: #F7F6F2!important;
    }

    a {
        text-decoration: none!important;
    }

</style>
