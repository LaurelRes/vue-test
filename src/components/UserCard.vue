<template>
  <div align="center">
    <ol v-if="user">
      <li><h2>Person №{{ userID }}</h2></li>
      <li><h3>email: {{ user.var.email }}</h3></li>
      <li><h3>First name: {{ user.var.first_name }}</h3></li>
      <li><h3>Last name: {{ user.var.last_name }}</h3></li>
      <li><img v-bind:src="user.var.avatar"/></li>
    </ol>
    <router-link to="/Users">Go back</router-link> |
    <router-link :to="'/Products/'">Products' list</router-link>
  </div>

</template>

<script lang="ts">
import axios from 'axios';
import {computed, defineComponent, reactive, Ref} from "@vue/composition-api";

class Card {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string
}

export default defineComponent({
  name: "UserCard",

  setup(props, ctx) {
    const user  = reactive({var: new Card()})
    const userID: Ref<string> = computed(() => ctx.root.$route.params.id);
    let loadUser = () => {
      axios.get('https://reqres.in/api/users/' + userID.value)
          .then(response => {
            user.var = response.data.data
          })
          .catch((error) => {
            console.log(error)
          })
    }
    loadUser();
    console.log(userID.value)
    return {user, userID}
  }
})
</script>

<style scoped>
h2 {
  font-size: 28px;
  color: darkmagenta;
}

h3 {
  padding: 3px;
  font-size: 18px;
  color: mediumslateblue;
}

ol {
  width: 300px;
  background: plum;
  border: 3px solid #fff;
  border-radius: 30px;
  list-style-type: none;
}

img {
  border-radius: 20px;
}

li {
  align-content: center;
}
</style>