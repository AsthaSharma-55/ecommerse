<template>
    <Navbar/>

<div class="Heading">
    <h1>Home | <router-link to="/about">About</router-link>
    </h1>
</div>
<category />
</template>

<script>
import Navbar from './Navbar.vue';
import category from './category.vue';
import card from './card.vue';
export default {
    name: "Home",
    components: {
        category,
        Navbar
    }

}
</script>

<style scoped>
.Heading {
    display: flex;
    justify-content: center;
}
</style>
