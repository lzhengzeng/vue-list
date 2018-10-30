<template>
    <div>
         <h2 class="sub-header">编辑</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input
            class="form-control" 
            id="exampleInputEmail1" 
            placeholder="英雄名称"
            v-model='formData.name' 
          >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>
            <input 
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="性别" 
            v-model='formData.gender'
            >
          </div>      
          <button 
          type="submit" 
          class="btn btn-success"
          @click.prevent='editHero()'
          >编辑</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
mounted() {
    this.findHero()
},
data(){
    return {
        formData:{
            name:'',
            gender:''
        }
    }
},
methods: {
    findHero(){
        this.$http.get('heroes/'+this.$route.params.id)
        .then((res)=>{
             const {status,data} = res
                if(status===200){
                    // console.log(data)
                     this.formData=data
                }
        })
    },
    editHero(){
         this.$http.put('heroes/'+this.$route.params.id,this.formData)
        .then((res)=>{
             const {status,data} = res
                if(status===200){
                    this.$router.push('/')
                }
        })
    }
}
}
</script>

<style>

</style>
