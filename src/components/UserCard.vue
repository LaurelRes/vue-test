<template>
  <div align="center">
    <ol>
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

export default {
  name: "UserCard",
  created()
  {
    axios.get('https://reqres.in/api/users/' + this.$route.params.id)
    .then(response => {
     this.user = response.data
  })
    .catch((error) => {
      console.log(error)
    })

  },
  data()
  {
    return{
      user: null
    }
  }
}
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
img
{
  border-radius: 20px;
}
li {
  align-content: center;
}
</style>