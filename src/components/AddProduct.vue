<template>
<div align="center">
  Create a new item (fill all gaps)
  <p>Title: <input type="text" id="title" size="21" value="test product"></p>
  <p>Price: <input type="text" id="price" size="20" value="13.5"></p>
  <p>Description: <input type="text" id="description" size="15" value="lorem ipsum set"></p>
  <p>Category: <input type="text" id="category" size="17" value="electronic"></p>
  <p>Image: <input type="text" id="image" size="20" value="https://i.pravatar.cc"></p>
  <button v-on:click="addProd()">Отправить запрос</button>
</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "@vue/composition-api";
import axios from "axios";
class Product {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  title?: string
}
export default defineComponent({
  name: "AddProduct",

  setup() {
    console.log('///////')
    const newprod = reactive({var: new Product()})
    let addProd = () => {
      axios.post('https://fakestoreapi.com/products/', {
        method: "POST",
        body: JSON.stringify(
            {
              title: (document.getElementById("title") as HTMLInputElement).value,
              price: (document.getElementById("price") as HTMLInputElement).value,
              description: (document.getElementById("description") as HTMLInputElement).value,
              image: (document.getElementById("image") as HTMLInputElement).value,
              category: (document.getElementById("category") as HTMLInputElement).value
            }
        )
      })
          .then(response => {
            newprod.var = response.data;
          })
          .catch((error) => {
            console.log(error)
          })
    }
    return {newprod, addProd}
  }
})
</script>

<style scoped>
label {
  display: block;
  font: 1rem 'Fira Sans', sans-serif;
  margin: .4rem 0;
}
div {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: 3px solid #fff;
  border-radius: 30px;
  background: antiquewhite;
}

</style>