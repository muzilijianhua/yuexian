<template>
  <div class="goodlist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../assets/img/index1_13.png">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p>营养丰富，物廉价美</p>
            <div class="pri" style="margin-bottom:5px">
              <span>{{item.num}}只</span>
              <span>￥{{item.oldprice}}</span>
            </div>
            <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" value="0" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
             <router-link class="mui-ellipsis" :to="'/home/goodinfo/'+item.id">购买</router-link>
            
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "goodlist",
  data() {
    return {
      list: [
        {
          id: 11,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 1,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 2,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 3,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 4,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 5,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 6,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 7,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 8,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 9,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        },
        {
          id: 10,
          url: "../../assets/img/首页1_13.png",
          title: "新鲜小龙虾",
          num: 5,
          oldprice: "188.00",
          newprice: "139.00"
        }
      ]
    };
  }
};
</script>
<style scoped>
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
  text-align: right;
}
.mui-media-body .mui-ellipsis {
  margin-top: 5px;
  background-color: gold;
  padding: 3px;
  border-radius: 3px;
}
.mui-table-view li {
  margin-top: 5px;
}
.mui-table-view-cell img {
  width: 50px;
  height: 50px;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
</style>
