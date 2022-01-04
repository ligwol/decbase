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
                      Continue reading...
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
                      Continue reading...
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

    .latest-news{
        text-align: center;
        padding: 80px 60px 100px 60px;
        background-color: #f8f8f8;
        .latest-news__blocks{
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;
            .latest-news__block{
                display: flex;
                flex-direction: column;
                text-align: left;
                .latest-news__img{
                    margin: 40px 0;
                    .center{
                        position: absolute;
                        top: -20px;
                        right: 20px;
                        height: auto;
                        width: 450px;
                        border-radius: 100px 0px;
                        z-index: 5;
                    }
                    .border{
                        position: relative;
                        height: 315px;
                        width: 450px;
                        border: 2px solid #B0855B;
                        border-radius: 100px 0px;
                        z-index: 4;
                    }
                }
                .latest-news__txt{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    .title{
                        margin: 0;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 28px;
                        line-height: 28px;
                        color: #212121;
                        padding-top: 20px;
                    }
                    .content{
                        font-family: Open Sans;
                        font-style: normal;
                        font-weight: normal;
                        text-transform: none;;
                        font-size: 18px;
                        line-height: 28px;
                        color: #646464;
                        padding-top: 20px;
                    }
                    button{
                        text-transform: uppercase;
                        margin: 20px 0 0 0;
                        font-size: 16px;
                        font-weight: 600;
                        &:hover{
                            background-color: #f8f8f8;
                        }
                    }
                }
            }
        }
    }
</style>