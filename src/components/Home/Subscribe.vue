<template>
  <div class="subscribe">
      <h1>
          DON’T FORGET TO SIGN UP
      </h1>
      <hr>
      <p>
          Find out early about all upcoming promotions and new product releases with our newsletter.
      </p>
      <div class="subscribe__field">
          <form class="subscribe__form">
              <input type="email" class="form__input" placeholder="Enter your email address...">
              <input type="submit" class="form__button">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Subscribe',
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
    @import "./../../styles/adaptive/adaptive-home.scss";

</style>