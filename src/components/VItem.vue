<script>
  import VButton from './VButton.vue';
  import VInputText from './VInputText.vue';
  export default {
    name: 'VItem',
    components: {
      VButton,
      VInputText,
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        sub: { // Substituted item to avoid direct modification
          id: this.item.id,
          name: this.item.name,
        },
      };
    },
  };
</script>

<template>
  <div class="item">
    <VInputText
      class="item__input-text item__input-text--name"
      placeholder="Name"
      v-model="sub.name"
      @keydown.enter="$emit('update', sub)" />
    <VButton
      class="item__button item__button--update"
      @click="$emit('update', sub)">
      Update
    </VButton>
    <VButton
      class="item__button item__button--remove"
      @click="$emit('remove', sub)">
      Remove
    </VButton>
  </div>
</template>

<style scoped>
  .item {
    margin: 0.25rem 0;
  }
  .item__button,
  .item__input-text {
    margin: 0 0.25rem;
  }
</style>
