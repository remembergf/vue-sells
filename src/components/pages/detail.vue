<template>
  <div>
    <div class="app-head">
        <div class="app-head-inner">
          <router-link :to="{path: '/'}">
            <img src="@/common/logo.png">
          </router-link>
          <div class="head-nav">
            <ul class="nav-list">
              <li>登录</li>
              <li class="nav-pile">|</li>
              <li>注册</li>
              <li class="nav-pile">|</li>
              <li>关于</li>
            </ul>
          </div>
        </div>
    </div>
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="product-board">
          <img :src="productIcon">
          <ul>
            <router-link v-for="item in products" :to="{ path: item.path }" tag="li" active-class="active">
              {{ item.name }}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <div class="app-foot">
      <p>@ 2019 copyright from YF</p>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('@/common/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require("@/common/images/1.png"),
        '/detail/forecast': require("@/common/images/2.png"),
        '/detail/analysis': require("@/common/images/3.png"),
        '/detail/publish': require("@/common/images/4.png")
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        margin-top: -60px;
        background: #f0f2f5;
        font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        font-size: 14px;
        color: #444;
    }
    .app-head {
        background: #363636;
        color: #b2b2b2;
        width: 100%;
        height: 90px;
        line-height: 90px;
    }
    .app-head-inner {
        width: 1200px;
        margin: 0 auto;
    }
    .app-head-inner img {
        width: 50px;
        margin-top: 20px;
        float: left;
    }
    .head-nav {
        float: right;
    }
    .head-nav ul {
        overflow: hidden;
    }
    .head-nav li {
        float: left;
        cursor: pointer;
    }
    .nav-pile {
        padding: 0px 10px;
    }
    .app-foot {
        text-align: center;
        height: 80px;
        width: 100%;
        line-height: 80px;
        clear: both;
        margin-top: 30px;
        background: #e3e4e8;
    }
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
.sales-board {
  background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p  {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
    text-align: left;
}
.button {
    width: 70px;
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    text-align: center;
    cursor: pointer;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>
