<template>
  <div>
    <ol v-if="prod">
      <li><h2>{{ prod.var.title }}</h2></li>
      <li><h3>{{ prod.var.price }} $ </h3></li>
      <li><h3>{{ prod.var.description }}</h3></li>
      <li><img v-bind:src="prod.var.image"/></li>
      <router-link :to="'/Products/'">Previous page</router-link>
    </ol>
  </div>
</template>

<script lang="ts">
class Product {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  title?: string
}

import {computed, defineComponent, reactive, Ref} from "@vue/composition-api";
import axios from 'axios';

export default defineComponent({
  name: "ProductCard",
  setup(props, ctx) {
    const prod = reactive({var: new Product()})
    const prodID: Ref<string> = computed(() => ctx.root.$route.params.id);
    let loadCard = () => {
      console.log("///" + prodID.value)
      axios.get('https://fakestoreapi.com/products/' + prodID.value)
          .then(response => {
            prod.var = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    }

    loadCard();
    return {prodID, prod}
  }
})

</script>
<style scoped>
img {
  height: 500px;
  width: 500px;
  border-radius: 50px;
}
 ol{
   list-style-type: none;
   background: #79fffc;
   border: 3px solid #fff;
   border-radius: 30px;
 }
</style>