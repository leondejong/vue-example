<script>
  import VList from './VList.vue';
  export default {
    name: 'VLayout',
    components: {
      VList,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<template>
  <section class="layout">
    <header class="layout__header">
      <h1 class="layout__title">
        {{ title }}
      </h1>
    </header>
    <main class="layout__content">
      <VList class="layout__list" />
    </main>
    <footer class="layout__footer">
      {{ currentYear }}
    </footer>
  </section>
</template>

<style scoped>
  .layout {
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
  }
  .layout__header,
  .layout__footer {
    flex: 1 100%;
    padding: 1rem;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 1);
  }
  .layout__header {
    text-align: center;
  }
  .layout__footer {
    text-align: right;
  }
  .layout__content {
    flex: 1 100%;
    padding: 2rem;
  }
</style>
