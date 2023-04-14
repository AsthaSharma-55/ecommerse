<template>
<h2>Category</h2>
<div class="form">
    <form @submit.prevent="submitDetails">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="name" required="true">

        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="description" required="true">
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</div>
</template>
<script>

import axios from 'axios'
export default {
    name: "Category",
    
    data() {
        return {
            name: "",
            description: "",
        }
    },
    methods: {
        async submitDetails() {
            console.warn("submitted", this.name, this.description)
            let result = await axios.post('http://localhost:5000/categories', {
                name: this.name,
                description: this.description
            })
            this.$router.push({
                name: "Card"
            })
        }
    }
}
</script>

<style scoped>
h2 {
    display: flex;
    justify-content: center;
    margin-top: 136px;
}

.form {
    display: flex;
    justify-content: center;
}

form input {
    width: 333px;
}
</style>
