<template>
  <div class="player">
  </div>
</template>

<script>
// import { Replayer } from 'rrweb';

export default {
  name: 'Player',
  components: {
  },
  mounted() {
    const res = localStorage.getItem('rrweb-db');
    console.log(res);
    if (res) {
      console.log('value');
      const events = JSON.parse(res);

      const replayer =  new window.rrwebPlayer({
        target: document.body, // 可以自定义 DOM 元素
        // 配置项
        props: {
          events: events
        }
      });;
      replayer.play();
    }
  },
};
</script>
