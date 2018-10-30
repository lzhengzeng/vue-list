<template>
    <div id="app">
       
                <h2 class="sub-header">Hero List</h2>
                <a class="btn btn-success" 
                href="add.html"
                @click.prevent='addItem()'
                >Add</a>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>性别</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='(item,index) in list' :key='index'>
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.gender}}</td>
                                <td>
                                    <a 
                                    href="edit.html"
                                    @click.prevent='edit(item.id)'
                                    >编辑</a> &nbsp;&nbsp;
                                    <a 
                                    href="javascript:window.confirm('Are you sure?')"
                                    @click.prevent='deleitem(item.id)'
                                    >删除</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
           
    </div>
</template>

<script>
// import axios from 'axios';
export default {
data(){
    return {
        list:[]
    }
},
mounted() {
    this.loadListData();
},
methods: {
    loadListData(){
        this.$http.get('heroes')
        .then((res)=>{
            const {status,data} = res
            if(status===200){
                // console.log(data)
                this.list=data
            
            }
        })
    },
    deleitem(id){
        if(confirm('确定删除吗')){
        this.$http.delete('heroes/'+id)
        .then((res)=>{
            const {status,data} = res
            if(status===200){
                this.loadListData(); 
            }
        })
        }
       return 
    },
    addItem(){
        //跳转页面
        this.$router.push('/add')
    },
    edit(id){
        this.$router.push('/edit/'+id)
    }
}
}
</script>

<style>

</style>
