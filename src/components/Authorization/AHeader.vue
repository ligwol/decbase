<template>
      <div class="authorization__header">
        <router-link class="authorization__header__link" to="/"> Home </router-link>
        <router-link class="authorization__header__link" to="/Project"> Project </router-link>
        <router-link class="authorization__header__link" to="/services"> services </router-link>
        <router-link class="authorization__header__link" to="/About"> about </router-link>
        <router-link class="authorization__header__link" to="/Blog"> blog </router-link>
        <router-link class="authorization__header__link" to="/Shop"> shop </router-link>
        <router-link class="authorization__header__link" to="/Contact"> contact </router-link>
      </div>
</template>

<script>
export default {
    name: 'AHeader',
}
</script>

<style lang="scss" scoped>
@import "./../../styles/authorization.scss";
</style>