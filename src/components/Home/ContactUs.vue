<template>
    <div class="contact-us" v-if="!isHidden">
        <div class="contact-us__form">
            <div class="contact-us__form__text">
                <h2> Let's get in touch </h2>
                <div class="contact-us__phone">
                    <p><i class="fas fa-phone-alt"></i></p>
                    <a href="tel:002-568423591">002-568423591 </a>
                </div>
                <div class="contact-us__email">
                    <p><i class="fas fa-envelope-open"></i></p>
                    <a href="mailto:brandoxide@gmail.com">brandoxide@gmail.com</a>
                </div>
                <div class="contact-us__details">
                    We're open to any suggestions or let's have a 
                    <router-link to="/contact" class="link">chat</router-link>
                </div>
            </div>
            <button class="contact-us__button" v-on:click="$parent.toggleContact()">
                <i class="fas fa-times"></i>
            </button> 
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'ContactUs',
        data() {
            return {
                isShows: false,
            }
        },
        methods: {
            toggleContact: function () {
                this.isShows = !this.isShows;
            },
        },
    } 
</script>

<style lang="scss" scoped>
    .contact-us {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        padding: 40px;
        background-color: #66666693;
        z-index: 10;
        overflow: hidden;
        font-family: 'Poppins';
        font-size: 20px;
        color: #646464;
        .contact-us__form{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 40px;
            box-sizing: border-box;
            background-color: #fff;
            height: 400px;
            width: 450px;
            .contact-us__button {
                display: flex;
                align-items: flex-start;
                z-index: 11;
                font-size: 20px;
                overflow: hidden;
                background-color: transparent;
                border: none;
                transition: 300ms ease;
                &:hover{
                    background-color: #fff;
                    color: #646464;
                }
            }
            .contact-us__phone, .contact-us__email{
                display: flex;
                flex-direction: row;
                align-items: center;
                a{
                    color: #646464;
                    text-decoration: none;
                }
                p{
                    padding: 10px 10px 10px 0;
                    margin: 0;
                    display: flex;
                }
            }
            .contact-us__details{
                padding-top: 30px;
                a{
                    color: #37806B;
                    text-decoration: underline;
                    font-weight: 600;
                }
            }
        }
    }
</style>