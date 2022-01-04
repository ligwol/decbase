<template>
  <div class="footer">
      <div class="footer__block">
          <div class="block__logo">
              <img src="../../assets/logo-full.png" alt="logo">
              <p>
                  But i must explain to you all this mistaken idea of dencouncing pleasure.
              </p>
          </div>
          <div class="block__links">
              <b>Quick Links</b>
              <ul>
                  <li>
                      about our company
                  </li>
                  <li>
                      services we provide
                  </li>
                  <li>
                      career & oportunity
                  </li>
                  <li>
                      privacy & policy
                  </li>
                  <li>
                      contact us
                  </li>
              </ul>
          </div>
          <div class="block__links">
              <b>Company</b>
              <ul>
                  <li>
                      about company
                  </li>
                  <li>
                      our testimonials
                  </li>
                  <li>
                      latest news
                  </li>
                  <li>
                      our mission
                  </li>
                  <li>
                      get a free quot
                  </li>
              </ul>
          </div>
          <div class="block__links">
              <b>Contact Us</b>
                  <p>
                      Sagrada Familia, Herba<br>
                      Street Front USA<br>
                      brandoxide@gmail.com<br>
                      002-568423591
                  </p>
          </div>
          <div class="block__sns">
              <b>Follow Us</b>
              <ul>
                  <li>
                      <i class="fab fa-facebook-f"></i>
                  </li>
                  <li>
                      <i class="fab fa-twitter"></i>
                  </li>
                  <li>
                      <i class="fab fa-instagram"></i>
                  </li>
                  <li>
                      <i class="fab fa-linkedin-in"></i>
                  </li>
              </ul>
          </div>
      </div>
      <div class="footer__copyright">
          Copyright @ 2020 <a href="#">Brandoxide</a>.all right reserved.
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
    .footer{
        display: flex;
        flex-direction: column;
        background-color: #f8f8f8;
        .footer__block{
            display: flex;
            flex-direction: row;
            padding: 60px 60px;
            gap: 30px;
            .block__logo{
                flex-basis: 30%;
                img{
                    width: 150px;
                    height: auto;
                }
                p{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 28px;
                    color: #646464;
                }
            }
            .block__links{
                flex-basis: 17%;
                li{
                    list-style: none;
                    font-family: 'Open Sans';
                    text-transform: capitalize;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 40px;
                    color: #646464;
                }
                b{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 40px;
                    color: #212121;
                }
                p{
                    font-family: 'Open Sans';
                    text-transform: capitalize;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 40px;
                    color: #646464;
                }
            }
            .block__sns{
                flex-basis: 18%;
                b{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 40px;
                    color: #212121;
                }
                ul{
                    display: flex;
                    flex-direction: row;
                    li{
                        list-style: none;
                        font-size: 16px;
                        line-height: 40px;
                        width: 45px;
                        height: 45px;
                        i{
                            border-radius: 50px;
                            background-color: #d5d5d5;
                            padding: 12px;
                            color: #fff;
                            transition: 300ms ease;
                                &[class="fab fa-facebook-f"]{
                                padding: 12px 15px;
                            }
                            &:hover{
                                background-color: #37806B;;
                            }
                        }
                        
                    }
                }
                
            }
        }
        .footer__copyright{
            border-top: 1px solid #d5d5d5;
            width: 100vw;
            padding: 10px 0;
            text-align: center;
            font-family: 'Open Sans';
            font-size: 16px;
            color: #646464;
            a{
                color: #679e8e;
                font-style: none;
                text-transform: none;
                font-weight: normal;
            }
        }
    }
</style>