<template>
    
            <div class="cardyt" >
            <VideoCard :api="api" />
        </div>
   
</template>
<script>
import VideoCard from '../components/Video/VideoCard.vue';

export default {
    name: 'VideoView',
    components: { VideoCard, VideoCard },
    props: {
        api: {
            type: Object,
            required: true
        }

    },
    methods: {

    }
}
</script>
<style></style>