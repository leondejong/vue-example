<script>
  export default {
    name: 'VButton',
    computed: {
      listeners() {
        return {
          ...this.$listeners,
        };
      },
    },
  };
</script>

<template>
  <button
    class="button"
    v-on="listeners">
    <slot>
      Button
    </slot>
  </button>
</template>

<style scoped>
  .button {
    padding: 0.5rem 1rem;
    color: rgba(0, 0, 0, 1);
    background: rgba(255, 255, 255, 1);
    border: 0.0625rem solid rgba(0, 0, 0, 1);
    border-radius: 0.3125rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    cursor: pointer;
  }
  .button:hover,
  .button--active {
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 1);
  }
</style>
