<template>
    <div class="contact-info">
        <div class="contact-info__data">
            <div class="contact-info__phone">
                <p><i class="fas fa-phone-alt"></i></p>
                <a href="tel:002-568423591">002-568423591 </a>
            </div>
            <div class="contact-info__email">
                <p><i class="fas fa-envelope-open"></i></p>
                <a href="mailto:brandoxide@gmail.com">brandoxide@gmail.com</a>
            </div>
        </div>
        <div class="contact-info__map">
            <div class="contact-info__phone">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.639537891642!2d2.1721671155823823!3d41.403633902950574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2z0KXRgNCw0Lwg0KHQstGP0YLQvtCz0L4g0KHQtdC80LXQudGB0YLQstCw!5e0!3m2!1sru!2sua!4v1641683565394!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactInfo',
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/contact.scss";
    @import "./../../styles/adaptive/adaptive-contact.scss";
</style>