<template>
<h1>Edit category</h1>
<div class="form">
    <form @submit.prevent="submitDetails">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="data.name" required="true">

        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="data.description" required="true">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Price</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="data.price" required="true">
        </div>
        <button type="submit" class="btn btn-primary">Updated</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Edit",
    data() {
        return {
            data:[],
            name:'',
            description:'',
            price:''
        }
    },
    methods:{
        async getData(){
           let result=await axios.get(`http://localhost:5000/categories/${this.$route.params.id}`)
           this.data=result.data 
           console.log(result.data)
        },
        async submitDetails(){
            let result=await axios.put(`http://localhost:5000/categories/${this.$route.params.id}`,{
                name:this.data.name,
                description:this.data.description,
                price:this.data.price
                
            }) 
            if(result.status==200){
                alert('successessfully Updated')
                this.$router.push({name:"Card"})
            }
           
            console.log('resultt',result.data)
        }
    },
    mounted(){
       this.getData()
    }
}
</script>

<style>

</style>
