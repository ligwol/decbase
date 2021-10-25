<template>
  <div class="carousel-items">
      <div class="profile-pic">
        <img :src= "require('../../../assets/'+ item_data.img)" :alt="item_data.alt">
      </div>
      <div class="comment">
            <div class="content">
                <div class="quotes">
                    <img src="../../../assets/quotes.png" alt="quotes">
                </div>
                <div class="head">
                    <p class="name">
                        {{item_data.name}}
                    </p>
                    <p class="position">
                        {{item_data.position}}
                    </p>
                </div>
                <p class="comment">{{item_data.comment}}</p>                                
            </div>
      </div>      
  </div>
</template>

<script>
export default {
    name: 'carouselCommentsItems',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
    .carousel-items{
        display: none;    
        &.active{
            display: flex;
            flex-direction: row;
            flex-shrink: 1;
            flex-basis: 45%;
            margin: 0;
            justify-content: space-evenly;
            background: #FFFFFF;
            box-shadow: 7px 7px 30px 5px rgba(66, 96, 84, 0.15);
            border-radius: 70px 0px;
            position: relative;
            padding: 40px;
            padding-left: 100px;
        } 
        .profile-pic{
            position: absolute;
            left: -50px;
            img{
                border-radius: 50px 0px;
            }
        }
        .comment{
            text-align: left;
            position: relative;
            .content{
                display: flex;
                flex-direction: column;
                .quotes{
                    position: absolute;
                    right: 0;
                }
                .head{
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: flex-end;
                    text-align: left;
                    margin: 0;
                    .name {
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        color: #212121;
                        margin: 0;
                    }

                    .position {
                        margin: 0;
                        font-weight: 500;
                        font-size: 14px;
                        color: #646464;
                        text-transform: none;
                    }
                }
                .comment{
                    padding-top: 10px;
                    text-transform: none;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    color:#646464;             
                }
            }
        }       
    }
</style>