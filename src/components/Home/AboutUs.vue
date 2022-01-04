<template>
    <div class="about-us">
        <div class="about-us__block half__block">
            <div class="about-us__images block__img">
                <div class="about-us__images__block">
                    <img class="left" src="../../assets/image-2.png" alt="furniture">
                    <div class="about-us__images__border left-border"></div>
                </div>
            </div>
            <div class="about-us__info block__info">
                <h2>about us</h2>
                <h1>Interioris The Will of An Epoch Mextreo</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form injected humour, or randomised words which don't look even slightly
                    believable.If you are going to use a passage of Lorem Ipsum, sure there isn't anything embarrassing
                    hidden the middleof text. All the Lorem Ipsum generators on the Internettend to repeat predefined
                    chunks as necessary,making this the first true generator on the Internet.
                </p>
                <button><a href="/about" class="button-text">Learn more</a></button>
            </div>
        </div>
        <div class="about-us__block half__block">
            <div class="about-us__read-more block__info">
                <img src="../../assets/numbers.png" alt="20">
                <h1> Years Of Successful Working The Market </h1>                
                <button><a href="/blog" class="button-text">Read more</a></button>
            </div>
            <div class="about-us__images block__img">
                <div class="about-us__images__block">
                    <img class="right" src="../../assets/image-3.png" alt="furniture">
                    <div class="about-us__images__border right-border"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
</style>