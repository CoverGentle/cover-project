import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  if(command === "serve"){
    return{
      // dev独有的配置
      plugins: [vue()]
    }
  }else{
    return{
      // build的配置

    }
  }
})
