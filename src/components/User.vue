<template>
  <div>
    <fieldset>
      <h1>{{ param.id }} |
      {{ param.email }} |
        {{ param.first_name }}
        {{ param.last_name }} |
        <router-link :to="'/users/' + param.id">Personal Card</router-link></h1>
      <img v-bind:src="param.avatar"/>

    </fieldset>
  </div>

</template>

<script>

export default {
  name: "User",
  mounted() {},
  data() {
    return {}
  },
  props: {
    param: Object
  }
}
</script>

<style scoped>
fieldset{
  align-content: center;
  width: 700px;
}
h1{
  font-size: 14px;
}
</style>