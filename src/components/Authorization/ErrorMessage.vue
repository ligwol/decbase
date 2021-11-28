<template>
  <div class="alert" v-if="isError">
    <div class="alert__txt">
        <i class="fas fa-exclamation-circle"></i>
        <p>{{this.$props.message}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
        message: String,
        isError: Boolean,
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.alert{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    i{
        margin: 0;
        color: #ff6b6b;
        padding: 5px;
    }
    .alert__txt{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
}

</style>