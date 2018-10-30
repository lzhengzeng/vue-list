//路由配置
import Vue from 'vue'
import VueRouter  from 'vue-router'
import List from '../commponents/hero/AppList.vue'
import Bar from '../commponents/weap/Foo.vue'
import Foo from '../commponents/equip/Bar.vue'
import Add from '../commponents/hero/Add.vue'
import Edit from '../commponents/hero/edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:List
        },
        {
            path:'/List',
            component:List
        },
        {
            path:'/Bar',
            component:Bar
        },
        {
            path:'/Foo',
            component:Foo
        },
        {
            path:'/add',
            component:Add
        },
        {
            path:'/edit/:id',
            component:Edit
        },
        
    ],
    linkExactActiveClass:'active'
})

export default router