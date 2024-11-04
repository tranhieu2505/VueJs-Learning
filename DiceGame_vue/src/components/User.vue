<template>
  <div class="user">
    <h3>{{ user.email }}</h3>
    <button
        class="delete"
        v-on:click="handleDelete"
    >Delete</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleDelete(e) {
      var data = {
        id:this.user.id
      }
      console.log('handleDelete in User.vue');
      this.$emit('deleteUser', data)
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style>
  .user {
    position: relative;
  }
  .user .delete {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
