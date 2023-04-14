<template>
<div class="block">
    <h1 class="heading">Login</h1>
    <div class="register">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="Password" placeholder="Password" v-model="password" />
        <button type="button" v-on:click="login">Login</button>
        <p class="link">
            <router-link to="/signup">SignUp</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            alert('login')
            let result=await axios.get(`http://localhost:5000/users?email=${this.email}&password=${this.password}`)
            console.warn(result)
             if (result.status == 200 && result.data.length>0) {
                localStorage.setItem("user_info", JSON.stringify(result.data[0]))
                this.$router.push({
                    name: 'Home'                             // this is navigate us after signup to home page
                })
            }

        }
        
    },
    mounted(){
     let user= localStorage.getItem('user_info')
     if(user){
         this.$router.push({
                    name: 'Login'                             // this is navigate us after signup to home page
                })
    }
     }
}

</script>

<style scoped>
.block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.register {
    display: inline-grid;
    margin-top: 13px;
}

input {
    width: 285px;
    margin-top: 10px;
}

button {
    width: 285px;
    margin-top: 10px;
    color: white;
    background-color: blue;
    border-color: blue;
}

.link {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
}
</style>
