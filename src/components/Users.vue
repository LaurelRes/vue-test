<template>
  <div align="center">
    <User v-for="item in users" :param="item" :key="item.id">
    </User>
  </div>
</template>
<script>
import User from "./User";
import axios from 'axios';
import {ref} from "@vue/composition-api";

export default {
  components: {User},
  name: "Users",
  setup() {
    const users = ref([]);
    let getUser = () => {
      axios.get('https://reqres.in/api/users?page=2')
          .then(response => {
            users.value = response.data.data
          })
          .catch((error) => {
            console.log(error)
          })
    }
    getUser();
    return {users}
  }
}
</script>
<style scoped>

</style>