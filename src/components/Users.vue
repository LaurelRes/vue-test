<template>
  <div align="center">
    <User v-for="item in users" :param="item" :key="item.id">
    </User>
  </div>
</template>
<script>
//import users from '../../fake.json'
import User from "./User";
import axios from 'axios';
export default {
  components: {User},
  name : "Users",
  data: () => ({
    users: []
  }),
  created()
  {
    axios.get('https://reqres.in/api/users?page=2')
    .then(response => {
      this.users = response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

</script>
<style scoped>

</style>