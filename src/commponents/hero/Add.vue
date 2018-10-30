<template>
    <div>
    
        <h2 class="sub-header">添加英雄</h2>
    
        <form>
    
            <div class="form-group">
    
                <label for="exampleInputEmail1">英雄名称</label>
    
                <input
                  class="form-control" 
                  id="exampleInputEmail1" 
                  placeholder="name"
                  v-model='formData.name'
                  >
    
            </div>
    
            <div class="form-group">
    
                <label for="exampleInputPassword1">性别</label>
    
                <input  
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="gender"
                v-model='formData.gender'
                >
    
            </div>
            <button 
            type="submit"
            class="btn btn-success"
            @click.prevent='addHero()'
            >新增</button>
            
        </form>
    
    </div>
</template>

<script>
// import axios from 'axios'
    export default {
    data(){
        return {
            formData:{
                name:'',
                gender:''
            }
        }
    },
    methods: {
        addHero(){
        this.$http.post('heroes',this.formData)
        .then((res=>{
            const {status,data} = res
                if(status===201){
                    this.$router.push('/')
                }
        }))
        }
    }
    
    }
</script>

<style>
    
</style>
