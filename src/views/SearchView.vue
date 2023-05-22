<template>
    <p className='selected'>
       '{{ videoIdRoute }}' videolari uchun qidiruv natijalari
    </p>
    <div className="column aic">
        <VideoCard 
                :api="api"
                v-for="api in apiyt" 
                v-bind:key="apiyt.id"
            />
    </div>
</template>
<script>
import { VideoCard } from '../components';
import axios from 'axios';
import { ApiServices } from '../service/api.service.js'

export default {
    components: { VideoCard },
    data() {
        return {
            apiyt: [],
            videoIdRoute: this.$route.fullPath.slice(13, 200),
        }
    },
    methods: {
        async apiYouTube() {
            try {
                const { items } = await ApiServices.fetching(`search?part=snippet&q=${this.videoIdRoute}`)
                const newArr = items.map(item => ({
                    id: item.id,
                    name: item.snippet?.title,
                    chanelTitle: item.snippet?.channelTitle,
                    publishTime: item.snippet?.publishTime,
                    image: item.snippet.thumbnails.high.url
                }))
                console.log(this.videoIdRoute)

                this.apiyt = newArr
            }
            catch (error) {
                alert(error.message)
            }
        },
    },

    mounted() {
        this.apiYouTube()
    },

}
</script>
<style></style>