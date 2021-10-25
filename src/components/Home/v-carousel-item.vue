<template>
    <div class="v-carousel-item">
        <div class="comment-blocks">
            <div class="block">
                <div class="block__img">
                    <img :src= "require('../../assets/'+ item_data.img)" :alt= "item_data.alt">
                </div>
                <div class="block__txt">
                    <h2>{{item_data.title}}</h2>
                    <p>{{item_data.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-carousel-item",
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }, 
}
</script>

<style lang="scss" scoped>
    .v-carousel-item{
        display: none;    
        &.active{
            display: flex;
            flex-shrink: 1;
            flex-basis: 30%;
        }
        .comment-blocks{
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            .block{
                // width: 350px;
                // height: 200px;
                display: flex;
                padding: 30px 20px 20px 30px;
                flex-direction: row;
                background-color: #fff;
                box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.14);
                border-radius: 60px 0px;
                transition: 300ms ease;
                .block__txt {
                        h2{
                            font-family: Open Sans;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 1.5rem;
                            margin: 0;
                        }
                        p{
                            flex-wrap: wrap;
                            font-family: Open Sans;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 1rem;
                            line-height: 28px;
                            letter-spacing: -0.01em;
                            text-transform: none;
                        }
                }
                .block__img{
                    padding-right: 20px;
                }
                &:hover{
                    background-color: #CAA892;
                    .block__txt {
                        p, h2{
                            color: #fff;
                        }
                    }
                    .block__img{
                        filter: invert(100%);
                    }
                }
            }
        }
    }
</style>