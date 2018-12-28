<template>
  <div class="home">
      <div id="segmentedControl" class="mui-segmented-control">
        <router-link class="mui-control-item" to="hot">热卖</router-link>
        <router-link class="mui-control-item" to="seafood">海鲜</router-link>
        <router-link class="mui-control-item" to="food">进口食品</router-link>
        <router-link class="mui-control-item" to="fruits">水果</router-link>
      </div>
      <transition mode="out-in">
      <router-view></router-view>
      </transition>


      <!-- 内容区域 -->
      <div class="content">
          <h3>今日特价</h3>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span><img src="../../assets/img/index-icon1.png" alt=""></span>
          <div class="mui-media-body">热销排行</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <span><img src="../../assets/img/index-icon2.png" alt=""></span>
          <div class="mui-media-body">国内海鲜</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <span><img src="../../assets/img/index-icon3.png" alt=""></span>
          <div class="mui-media-body">进口海鲜</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span><img src="../../assets/img/index-icon4.png" alt=""></span>
          <div class="mui-media-body">水果</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <span><img src="../../assets/img/index-icon5.png" alt=""></span>
          <div class="mui-media-body">企业团购</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span><img src="../../assets/img/index-icon6.png" alt=""></span>
          <div class="mui-media-body">拼团活动</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <span><img src="../../assets/img/index-icon7.png" alt=""></span>
          <div class="mui-media-body">其他</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span><img src="../../assets/img/index-icon8.png" alt=""></span>
          <div class="mui-media-body">更多</div>
        </a>
      </li>
    </ul>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../assets/img/index1_13.png">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p>营养丰富，物廉价美</p>
            <div class="pri">
              <span>{{item.num}}只</span>
              <span>￥{{item.oldprice}}</span>
            </div>
            <router-link class="mui-ellipsis" :to="'/home/hotinfo/'+item.id">￥{{item.newprice}}</router-link>
          </div>
        </a>
      </li>
    </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data(){
      return {
       list:[{"id":11,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":1,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":2,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":3,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":4,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":5,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":6,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":7,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":8,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":9,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
       {"id":10,"url":"../../assets/img/首页1_13.png","title":"新鲜小龙虾","num":5,"oldprice":"188.00","newprice":"139.00"},
      ]
      
      }
  }
};
</script>
<style scoped>
.mui-segmented-control .mui-control-item.mui-active{
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid goldenrod;
}
.mui-segmented-control{
    border:0;
    background-color: #fff;
}
.mui-segmented-control .mui-control-item{
    border: 0;
    color: #333;
}
.content > h3 {
  text-align: center;
  font-weight: 400;
  line-height: 60px;
}
.content > img {
  width: 100%;
  height: 190px;
}
.mui-table-view .mui-media-object {
  max-width: 160px;
  height: auto;
}
.mui-media-body h3 {
  text-align: right;
  font-weight: 200;
  font-size: 18px;
}
.mui-media-body p {
  text-align: right;
  font-weight: 100;
  font-size: 18px;
  margin-top: 5px;
}
.pri {
  margin-top: 5px;
  text-align: right
}
.mui-media-body .mui-ellipsis {
  float: right;
  margin-top: 5px;
  background-color: gold;
  padding: 3px;
  border-radius: 3px;
}
.mui-table-view li{
    margin-top: 5px
}
.mui-table-view-cell img{
  width: 50px;
  height: 50px;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s;
}
</style>
