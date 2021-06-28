<template>
  <div>
    <User v-for="item in foo" :param="item" :key="item.id">

    </User>
  </div>
</template>
<script>
import users from '../../fake.json'
import User from "./User";
export default {
  components: {User},
  name : "Users",
  mounted() {
    this.foo = users
    console.log(this.foo)
  },
  data(){
    return  {
      foo:null
    }
  }

}


</script>

<style scoped>

</style>