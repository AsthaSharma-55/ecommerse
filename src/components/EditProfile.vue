<template>
    <Navbar/>
<div class="box">
    <h1 style="text-align: center;">Edit profile</h1>
    <label>UserName</label>
    <input type="text" placeholder="Name" v-model="users.name" />
    <label>Email</label>
    <input type="text" placeholder="Email" v-model="users.email" />
    <label>Password</label>
    <input type="password" placeholder="Password" v-model="users.password" />
    <button type="button" v-on:click="updtaeUser(users.id)">Update</button>
</div>
</template>

<script>
import axios from 'axios'
import Navbar from './Navbar.vue'

export default {
    name: "EditProfile",
    components:{
        Navbar
    },
    data() {
        return {
            users: {
                id: '',
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
       async updtaeUser(id) {

        alert("Updated Successfully")
            let result=await axios.put("http://localhost:5000/users/" + id,{
                name:this.users.name,
                email:this.users.email,
                password:this.users.password
            })
            if(result.status==200){
                localStorage.setItem('user_info',JSON.stringify(result.data))
            }
        }
    },
    mounted() {
        let result = localStorage.getItem('user_info')
        this.users = JSON.parse(result)
        console.log('hgkjhkjh', this.users)
    }

}
</script>

<style>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 86px;
}

.box input {
    width: 900px;
    margin-top: 17px;
    height: 54px;
    border: 1px solid black;
}

.box button {
    margin-top: 36px;
    height: 46px;
    width: 162px;
    color: white;
    background-color: mediumblue;
    border: mediumblue;
}

label {
    margin-top: 27px;
}
</style>
