<template>

</template>

<script>
import permissionApi from '@/api/add'
export default {
  data (){
    return {
      info: "123"
    }
  },
  created (){
    this.fetchData();
  },
  methods: {
    fetchData(){
      permissionApi.getPermission().then(response => {
        this.info = response.data;
      });
    }
  }
}
</script>
<style>

</style>
