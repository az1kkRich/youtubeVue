<template >
  <Navbar />
  <div class="container">
    <div class="df">
      <div class="left_navbar mt-5">
        <LeftNav />

      </div>
      <div class="body_content mt-5">
        <div>

          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar, LeftNav } from './components';
import { RouterView } from 'vue-router';
import './index.css'
import './sytles/main/main.css';
import './sytles/video/video.css';
import './sytles/main/main-res.css';

export default {
  components: { Navbar, LeftNav },
  

}

</script>
<style ></style>