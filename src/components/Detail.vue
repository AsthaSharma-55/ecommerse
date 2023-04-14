<template>
<Navbar :addItem ="count"/>
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" class="card-img-top" alt="..." style="height:300px;width: 400px;">
    <div class="details">
        <h1>{{ categoryData.name }}</h1>
        <h4 class="card-title">Price</h4>
        <p class="card-text">{{categoryData.description}}</p>
        <button class="btn btn-primary" type="button" v-on:click="addItem" >Add to cart</button>
    </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import axios from 'axios'
export default {
    name: "Detail",
    components: {
        Navbar
    },
  
    data() {
        return {
            categoryData: [],
            count:0
        }
    },
    methods: {
        addItem:function(){
            this.count=this.count+1
           
        },
       
    },
    async mounted() {
        let user = localStorage.getItem('user_info')
        if (!user) {
            this.$router.push({
                name: 'SignUp' // this is navigate us after signup to home page
            })
        }
        let result = await axios.get(`http://localhost:5000/categories/${this.$route.params.id}`)
        console.log('gkjhgkjhg', result.data)
        this.categoryData = result.data

    }

}
</script>

<style scoped>
.details {
    display: inline-block;
    margin-left: 20px;

}
</style>
