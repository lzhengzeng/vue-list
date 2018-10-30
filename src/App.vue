<template>
  <div id="app">
    <!-- 提取导航组件 -->
     <appHeader></appHeader>
     


    <div class="container-fluid">
        <div class="row">
           <!-- 导出slider组件 -->
            <appslider></appslider>

            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import appHeader from './commponents/common/appSlider';
import appslider from './commponents/common/headerVue';
// import AppList from '../src/AppList'
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader:appHeader,
    appslider:appslider,
    // applist:AppList
  }
}
</script>

<style>

</style>
