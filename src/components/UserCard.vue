<template>
  <div align="center">
    <ol v-if="user">
      <li><h2>Person №{{ user.data.id }}</h2></li>
      <li><h3>email: {{ user.data.email }}</h3></li>
      <li><h3>First name: {{ user.data.first_name }}</h3></li>
      <li><h3>Last name: {{ user.data.last_name }}</h3></li>
      <li><img v-bind:src="user.data.avatar"/></li>
    </ol>
    <router-link to="/Users">Go back</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import {computed, defineComponent, ref} from "@vue/composition-api";

export default defineComponent({
  name: "UserCard",
  setup(props, ctx) {
    const user = ref(null);
    console.log(ctx.root.$route.params.id)
    const ID = computed(() => ctx.root.$route.params.id);
    let loadUser = () => {
      axios.get('https://reqres.in/api/users/' + ID.value)
          .then(response => {
            user.value = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    }
    loadUser();
    return {user, ID}
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