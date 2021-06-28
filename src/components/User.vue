<template>
  <div>
    <fieldset align="center">
      {{ param.id }}
      {{ param.email }}
      {{ param.first_name }}
      {{ param.last_name }}
      <img v-bind:src="param.avatar"/>
    </fieldset>
  </div>

</template>

<script>

export default {
  name: "User",
  mounted() {

  },
  data() {
    return {
      foo: null
    }
  },
  props: {
    param: Object
  }
}
</script>

<style scoped>

</style>