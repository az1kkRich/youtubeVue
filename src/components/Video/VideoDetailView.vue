<template >
    <div>
        <div className="container">
            <vue-plyr>
                <div data-plyr-provider="youtube"
                    :data-plyr-embed-id="`${videoIdRoute}`"
                    >
                </div>
            </vue-plyr>
        
            <!-- <div className="discriptions">
                <h1 className="videoh1">{videoDetail?.snippet?.title}{{ videoIdRoute }}</h1>
                <div className="views">
                    <div className="chanel">
                        <Stack direction="row" spacing={1}>
                            <Avatar src={videoDetail?.snippet?.thumbnails?.default?.url} />
                        </Stack>
                        <div className="cardparas">
                            <p className='cardp'>{videoDetail?.snippet?.channelTitle}</p>
                        </div>
                    </div>
                    <div className="likes">
                        <div>
                            <FcLike /> <span className="count"> {videoDetail?.statistics?.likeCount}</span>
                        </div>
                        <div>
                            <AiFillEye color="green" /><span>{videoDetail?.statistics?.likeCount}</span>
                        </div>
                        <div>
                            <RxStopwatch color="blue" /><span>{moment(videoDetail?.snippet?.publishedAt).fromNow()}</span>
                        </div>
                    </div>

                </div>
                <div className="minides">
                     {videoDetail?.snippet?.localized?.description}
                        <br />

                        {videoDetail?.snippet?.tags?.length
                            ?  videoDetail?.snippet?.tags.map((item, index) => (
                                <>
                                    <p className="tag" key={index}>#{item}</p>
                                </>
                            ))
                            :<p className="tag" >#67 </p>
                        }

                </div>

            </div> -->

        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            videoIdRoute: this.$route.fullPath.slice(10, 100),
        }
    }
}


</script>