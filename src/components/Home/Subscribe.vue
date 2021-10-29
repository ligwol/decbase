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

<style lang="scss">
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";

    .subscribe{
        padding: 150px 60px;
        text-align: center;
        hr{
            margin: 50px auto;
            width: 50vw;
            border: 1px solid #C4C4C4;
        }
        p{
            padding-bottom: 40px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 28px;
            text-align: center;
            color: #646464;
            text-transform: none;
        }
        .subscribe__field{
            .subscribe__form{
                .form__input{
                    background: #EEEEEE;
                    border-radius: 20px 0px 0px;
                    border: none;
                    padding: 10px 20px;
                    width: 650px;
                    font-size: 16px;
                }
                .form__button{
                    background: #37806B;
                    border-radius: 0px 0px 20px 0px;
                    border: none;
                    padding: 10px;
                    width: 150px;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    text-align: center;
                    color: #FFFFFF;
                    cursor: pointer;
                }
            }
        }
    }
</style>