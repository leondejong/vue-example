<script>
  import VLayout from './components/VLayout.vue';

  import './assets/reset.css';
  import './assets/base.css';

  export default {
    name: 'application',
    components: {
      VLayout
    }
  }
</script>

<template>
  <article class="container" id="application">
    <VLayout title="Vue Example"/>
  </article>
</template>

<style>
  .container {
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
  }
</style>
