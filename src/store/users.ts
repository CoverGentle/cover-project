import {defineStore} from 'pinia'

export const useUsersStore  = defineStore('users',{
  state:()=>{
    return{
      name:"小明",
      age:11,
      sex:"男"
    }
  }
})

