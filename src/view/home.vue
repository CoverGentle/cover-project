<template>
  <div>
    {{name}}
    {{age}}
    {{sex}}
    <button @click="clickName">姓名</button>
  </div>
</template>

<script setup lang='ts'>
import {reactive, ref, toRefs} from 'vue'
// 引入useUsersStore
import { useUsersStore } from '../store/users'
import {storeToRefs} from 'pinia'
// 使用useUsersStore
const userStore = useUsersStore()
const{ name, age, sex} = storeToRefs(userStore)

const clickName = () =>{
  userStore.name = "张三"
  console.log(userStore);
}
// console.log(userStore);


</script>

<style lang='less' scoped> 
  
</style>