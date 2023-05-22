<template>
    <div class="them">
        <p class='selected'>
            <!-- {selectedCategory} videolar 
                v-for="api in apiyt" 
                v-bind:key="apiyt.id"-->
        </p>
    </div>
    <div class="video_box">
            <VideoView
                :api="api"
                v-bind:key="apiyt.id"
                v-for="api in apiyt"
            />

    </div>
</template>
<script>
import VideoView from './VideoView.vue';
import axios from 'axios';
import { ApiServices } from '../service/api.service.js'

export default {
    components: { VideoView },
    data() {
        return {
            apiyt: [],
            category: 'uzbekistan'
        }
    },
    methods: {
        async apiYouTube() {
            try {
                const { items } = await ApiServices.fetching(`search?part=snippet&q=${this.category}`)
                const newArr = items.map(item => ({
                    id: item.id,
                    name: item.snippet?.title,
                    chanelTitle: item.snippet?.channelTitle,
                    publishTime: item.snippet?.publishTime,
                    image: item.snippet.thumbnails.high.url
                }))


                this.apiyt = newArr
            }
            catch (error) {
                alert(error.message)
            }
        },
    },
    
    mounted() {
        this.apiYouTube(),
        this.category
    },
    
}
</script>
<style></style>