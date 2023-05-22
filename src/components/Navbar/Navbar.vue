<template>
    <div>
        <div class="container">
            
            <div class="navbar">
                <div class="col3 df aic">
                    <div class="x-menu">
                        <div class="bar"></div>
                    </div>

                    <RouterLink to="/">
                        <div class="logo"></div>
                    </RouterLink>

                </div>
                <div class="col4 ">
                    <SearchBar />
                </div>
                <div class="col3 logining">
                    <div class="acc">
                        <div class="create"></div>
                        <div class="notifey"></div>
                        <div class="accaunt"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import '../../sytles/navbar/nav-res.css';
    import '../../sytles/navbar/navbar.css';
import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar }
}
</script>
<style></style>