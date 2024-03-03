<template>
    <nav class="navbar navbar-expand-md custom-nav">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">{{ message }}</RouterLink>
            <ul class=" navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{ name: 'books' }">Books</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{ name: 'contact' }">Contact Us</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{ name: 'login' }">Login</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{ name: 'register' }">Register</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar",
    data() {
        return {
            message: "Bostorek"
        }
    }
}
</script>

<style scoped>
.custom-nav {
    background-color: #bfa1a0;
    padding: 15px 0;
}

.navbar-brand {

    padding: 0;
    margin: 0;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
}

.nav-link {
    padding: 10px 15px !important;
    color: #ffffff;
    text-align: center;
}

.nav-link:hover{
    color: #44b89d;
}
.active-link{
    color: #44b89d;

}
</style>