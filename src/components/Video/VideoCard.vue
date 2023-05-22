<template >
        <RouterLink :to="`/video/id?${api.id.videoId}`">
            <img v-bind:src="api.image" class='card_img' />
        </RouterLink>
        <div class="card_info" style="width: 300px;">
            <div class="infoc df">

                <div class="cardparas">

                    <h1 class='cardh1'>{{ api.name }}</h1>

                    <p class='cardp'>{{ api.chanelTitle }}</p>
                    <p class='cardp1'>{{ moment(api.publishTime).fromNow() }} </p>
                </div>
            </div>
        </div>

</template>
<script>
import moment from 'moment';

export default {

    created: function () {
        this.moment = moment;
    },
    props: {
        api: {
            type: Object,
            required: true
        }

    },
    // methods: {
    //     videoDetail() {
    //         return this.$router.push(`/video/${this.api.id.videoId}`)
    //     }
    // }
}
</script>
<style ></style>