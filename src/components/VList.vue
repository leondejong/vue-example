<script>
  import { mapGetters, mapActions } from 'vuex';
  import VButton from './VButton.vue';
  import VInputText from './VInputText.vue';
  import VItem from './VItem.vue';
  export default {
    name: 'VList',
    components: {
      VButton,
      VInputText,
      VItem,
    },
    computed: {
      ...mapGetters([
        'list',
      ]),
      name() {
        return this.getName();
      },
    },
    methods: {
      ...mapActions([
        'addItem',
        'updateItem',
        'removeItem',
        'removeAll',
      ]),
      getName() {
        return this.$refs.name.$el.value.trim();
      },
    },
  };
</script>

<template>
  <div class="list">
    <ul class="list__items"
      v-if="list.length">
      <li class="list__item">
        <VItem
          v-for="item in list"
          :key="item.id"
          :item="item"
          @update="updateItem"
          @remove="removeItem" />
      </li>
    </ul>
    <div class="list__message" v-else>
      No items available
    </div>
    <VInputText
      class="list__input-text list__input-text--name"
      placeholder="Name"
      ref="name"
      @keydown.enter="addItem({ id: 0, name: getName() })" />
    <VButton
      class="list__button list__button--add"
      @click="addItem({ id: 0, name: getName() })">
      Add
    </VButton>
    <VButton
      class="list__button list__button--remove"
      @click="removeAll">
      Remove All
    </VButton>
  </div>
</template>

<style scoped>
  .list {
    margin: 1rem;
  }
  .list__item {
    margin-left: 0;
    list-style-type: none;
  }
  .list__message {
    margin: 0 0 1rem 0.25rem;
  }
  .list__button,
  .list__input-text {
    margin: 0 0.25rem;
  }
</style>
