<template >
    <form class="df" @submit="changeSlug">

        <input class='search-input' 
        type="search" 
        :value="value" 
        @change="e => this.value = e.target.value"
        placeholder="Qidrish..." />

        <div class="iconsearch">
            <button type='submit' class="search-button-nav" >
                <i class="fa-solid fa-magnifying-glass" style="color: orange;"></i>
            </button>

        </div>

    </form>
</template>
<script>
import { IconButton, Paper } from '@mui/material'
import { BsSearch } from 'react-icons/bs'

export default {
    data() {
        return {
            value: '',
        }
    },

    methods: {
        changeSlug(e) {
            e.preventDefault()
            if(this.value){
                this.$router.push(`/search/slug?${this.value}`)
            }
                
        },
    }
}
</script>
<style >
.search-button-nav {
    border: none;
    width: 80%;
    height: 90%;
    background: none;
    cursor: pointer;
}
</style>