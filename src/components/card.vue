<template>
    <Navbar/>
<router-link to="/">
    <fa class="icon" icon='arrow-left' />
</router-link>
<div>
    <div class="cardData" v-for="items in categoryData" :key="items.id">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title" style="margin: 5px;font-weight: 300;">{{ items.name }}</h5>
            <p class="card-text" style="margin: 5px;font-weight: 300;">{{ items.description }}</p>
            <p class="card-text" style="margin: 5px;font-weight: 300;">Price: ${{ items.price }}</p>
           <div class="button-box">
            <router-link :to="`/detail/${items.id}`" class="btn btn-primary" type="button">View</router-link>
            <router-link :to="`/editdetail/${items.id}`" class="btn btn-success">Edit</router-link>
            <button type="button" v-on:click="deleteCategory(items.id)">Delete</button>
           </div>
            
        </div>
    </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import axios from 'axios'
export default {
    name: "card",
    components:{
        Navbar
    },
    data() {
        return {
            categoryData: [],
        }
    },
    methods: {
        async deleteCategory(id) {
            console.warn('deleted')
            let result = await axios.delete(`http://localhost:5000/categories/${id}`)
            console.warn(result)
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get('http://localhost:5000/categories')
            this.categoryData = result.data
            console.log(result.data)
        }
    },
    mounted() {
        this.loadData()
    }

}
</script>

<style scoped>
.displaycard {
    display: inline;
}

.cardData {
    display: inline-block;
    width: 288px;
    height: 370px;
    margin-left: 139px;
    margin-top: 44px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}

.icon {
    font-size: 30px;
    margin-top: 10px;
    margin-left: 20px;
}
button{
    height: 34px;
    background-color: red;
    border: red;
    color: white;
    border-radius: 13%;
}
.button-box{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}
</style>
