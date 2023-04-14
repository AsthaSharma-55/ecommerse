<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div>
        <span style="font-size: 21px;"><router-link to="/">E-com</router-link></span>
        <input type="text" placeholder="Search" style=" margin-left: 10px"/>
        <button type="button">Search</button>
    </div>
    <div class="block">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/card">Category</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                    </a>
                    <ul class="dropdown-menu" style="margin-left: -75px">
                        <li><a class="dropdown-item" href="/edit">Edit Profile</a></li>
                        <li><a class="dropdown-item" href="#"></a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="/login">Logout</a></li>
                    </ul>
                </li>
            </ul>
            <fa icon= 'cart-shopping'/>
            <p>{{ addItem}}</p>

        </div>
    </div>

</nav>

</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            count:0,
            emittedData:"emittedData"
        }
    },
    props:{
        addItem:Function
    },
       
}
</script>

<style scoped>
nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
input {
    margin-left: 24px;
    width: 254px;
}
p{
    color: white;
    background-color: yellowgreen;
    height: 20px;
    width: 17px;
    text-align: center;
    border-radius: 50%;
}


.block{
    margin-right: 29px;
} 
</style>
