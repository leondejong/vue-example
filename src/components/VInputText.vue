<script>
  export default {
    name: 'VInputText',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: event =>
            this.$emit('input', event.target.value),
        };
      },
    },
  };
</script>

<template>
  <input
    class="input-text"
    :value="value"
    v-on="listeners" />
</template>

<style scoped>
  .input-text {
    display: inline-block;
    padding: 0.5rem;
    color: rgba(0, 0, 0, 1);
    background: rgba(255, 255, 255, 1);
    border: 0.0625rem solid rgba(0, 0, 0, 1);
    border-radius: 0.3125rem;
    text-align: left;
    text-decoration: none;
    font-size: 1rem;
  }
  .input-text::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
</style>
