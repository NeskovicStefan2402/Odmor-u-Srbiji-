<template>
  <div>
      <h3>Gde na odmor?</h3>
      <Loading/>
  </div>
</template>

<script>
import Loading from '../Kviz/Loading'
export default {
  components:{
    Loading
  }
}
</script>

<style scoped>
h3{
    text-align: center;
    padding-bottom: 100px;
}
div{
  padding-top: 30px;
}
</style>