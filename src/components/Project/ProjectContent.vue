<template>
    <div class="project-content">
        <div class="project-content__block">
            <div class="block__text">
                <h1>
                Our showroom
                </h1>
                <hr>
                <p>
                    Since 1998, Projects Contemporary Furniture, LC has been a premier showroom in the Midwest for luxury contemporary furniture, lighting, kitchens, closets and bath products in residential and contract settings. <br>
                    Projects operates as a full service showroom catering to the needs of homeowners, interior designers, builders and architects.
                </p>
            </div>
            <div class="block__image">
                <img src="./../../assets/project-1.jpg" alt="">
            </div>
        </div>
        <div class="project-content__block">
            <div class="block__text">
                <h1>
                Full service design
                </h1>
                <hr>
                <p>
                    We have an experienced interior design team, offering a wide range of services including space planning, product and fabric selections, design drawings and much more. <br>
                    We offer turnkey design services for Poliform cabinetry and Rifra bathroom installations. Our design team is able to make your vision a reality.
                </p>
                <button>
                    <router-link to="/contact" class="link">View services</router-link>
                </button>
            </div>
            <div class="block__image">
                <img src="./../../assets/project-2.jpg" alt="">
            </div>
        </div>
        <div class="project-content__block">
            <div class="block__text">
                <h1>
                Visit our showroom
                </h1>
                <hr>
                <p>
                    We are located in Sagrada Familia, Herba Street Front USA<br> 
                    Email brandoxide@gmail.com or call us at 002-568423591 to schedule a complimentary design consultation.
                </p>
            </div>
            <div class="block__image">
                <img src="./../../assets/project-3.jpg" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'ProjectContent',
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/project.scss";
    @import "./../../styles/adaptive/adaptive-project.scss";
</style>