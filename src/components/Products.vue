<template>
  <div>

    <div v-for="item in prodList.var" :param="item" :key="item.id">
      <fieldset>
      {{item.id}} |
      {{item.category}} |
      <img v-bind:src="item.image"/> |
      {{item.price}} $ |
      {{item.title}} |
        <router-link :to="'/products/' + item.id">view more</router-link>
    </fieldset>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "@vue/composition-api";
import axios from 'axios';

export default defineComponent({
  name: "Products",
  setup() {
    const prodList= reactive({var: []})
    let loadList = () => {
      axios.get('https://fakestoreapi.com/products')
          .then(response => {
            prodList.var = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    }
    loadList();
    return {prodList}
  }
})
</script>
<style scoped>
div {

}
img {
  width: 95px;
  height:  100px;
}
</style>