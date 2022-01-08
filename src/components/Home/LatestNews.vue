<template>
  <div class="latest-news">
      <h2>
          Latest News
      </h2>
      <h1>
          From Our Blog
      </h1>
      <div class="latest-news__blocks">
          <div class="latest-news__block">
              <div class="latest-news__img">
                  <div class="border">
                    <img class="center" src="../../assets/image-4.png" alt="furniture">
                  </div>
              </div>
              <div class="latest-news__txt">
                  <h3 class="title">
                      2020 Interior Design Trends
                  </h3>
                  <p class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et
                      dolore
                      magna aliqua.
                  </p>
                  <button>
                      <router-link to="/blog" class="link">Continue reading...</router-link>
                  </button>
              </div>
          </div>
          <div class="latest-news__block">
              <div class="latest-news__img">
                  <div class="border">
                    <img class="center" src="../../assets/image-5.png" alt="furniture">
                  </div>
              </div>
              <div class="latest-news__txt">
                  <h3 class="title">
                      28 Notable Product at ARC Interior Design
                  </h3>
                  <p class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et
                      dolore
                      magna aliqua.
                  </p>
                  <button>
                      <router-link to="/blog" class="link">Continue reading...</router-link>
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LatestNews',
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
    @import "./../../styles/adaptive/adaptive-home.scss";

</style>