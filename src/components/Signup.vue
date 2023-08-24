<template>
  <div class="block">
    <h1 class="heading">SignUp</h1>
    <div class="register">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="Password" placeholder="Password" v-model="password" />
      <button type="button" v-on:click="signUp">SignUp</button>
      <p class="link">
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",   
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.warn("signup", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:5000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn("result", result);
      if (result.status === 201) {
        console.log("hello");
        localStorage.setItem("user_info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" }); // Redirect to Home page after successful signup
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user_info");
    if (user) {
      this.$router.push({
        name: "Home", // this is navigate us after signup to home page
      });
    }
  },
};
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