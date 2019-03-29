<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>
                <!-- template 相当于自带隐藏属性的容器，可以执行语句，但最终不会被渲染 -->
                <template v-for="product in productList">
                    <h3>{{ product.title }}</h3>
                    <ul>
                        <li v-for="item in product.list">
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="!product.last" class="hr"></div>
                </template>
            </div>
            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="item in newsList">
                        <a :href="item.url">{{ item.name }}</a>
                        <span v-if="item.hot" class="hot-tag">HOT</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <slide-show :slides="slides" :inv="invTime"></slide-show>
            <div class="index-board-list">
                <div class="index-board-item"
                     v-for="(item, index) in boardList"
                     :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
                     <div class="index-board-item-inner">
                        <img :src="item.src">
                        <h2>{{ item.title }}</h2>
                        <p style="text-align: left;">{{ item.description }}</p>
                        <div class="index-board-button">
                            <a :href="item.href" class="button">立即购买</a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import slideShow from '@/components/slideShow'

    export default {
        components: {
            slideShow
        },
        // created() {
        //     this.$http.get('api/getNewsList').then((res) => {
        //         this.newsList = res.data;
        //     },(err) => {
        //         console.log(err)
        //     })
        // },
        data() {
            return {
                invTime: 2000,
                slides: [
                    {
                        src: require('@/common/slideShow/pic1.jpg'),
                        title: 'hu1',
                        href: 'detail/analysis'
                    },
                    {
                        src: require('@/common/slideShow/pic2.jpg'),
                        title: 'hu2',
                        href: 'detail/count'
                    },
                    {
                        src: require('@/common/slideShow/pic3.jpg'),
                        title: 'hu3',
                        href: 'detail/publish'
                    },
                    {
                        src: require('@/common/slideShow/pic4.jpg'),
                        title: 'hu4',
                        href: 'detail/forecast'
                    }
                ],
                boardList: [
                    {
                        title: '开放产品',
                        description: '开放产品是一款开放产品',
                        src: require('@/common/images/1.png'),
                        toKey: 'analysis',
                        saleout: false,
                        href: 'detail/analysis'
                    },
                    {
                        title: '品牌营销',
                        description: 
                            '品牌营销帮助你的产品更好地找到定位',
                        src: require('@/common/images/2.png'),
                        toKey: 'count',
                        saleout: false,
                        href: 'detail/count'
                    },
                    {
                        title: '使命必达',
                        description: '使命必达快速迭代永远保持最前端的速度',
                        src: require('@/common/images/3.png'),
                        toKey: 'forecast',
                        saleout: true,
                        href: 'detail/forecast'
                    },
                    {
                        title: '勇攀高峰',
                        description: '帮你勇闯高峰，到达事业的顶峰',
                        src: require('@/common/images/4.png'),
                        toKey: 'publish',
                        saleout: false,
                        href: 'detail/publish'
                    }   
                ],
                newsList: [
                    {
                        name: '数据统计',
                        url: '#'
                    },
                    {
                        name: '数据预测',
                        url: '#'
                    },
                    {
                        name: '流量分析',
                        url: '#',
                        hot: true
                    },
                    {
                        name: '广告发布',
                        url: '#'
                    }
                ],
                productList: {
                    pc:{
                        title: 'PC产品',
                        list: [
                            {
                              name: '数据统计',
                              url: '#'
                            },
                            {
                              name: '数据预测',
                              url: '#'
                            },
                            {
                              name: '流量分析',
                              url: '#',
                              hot: true
                            },
                            {
                              name: '广告发布',
                              url: '#'
                            }
                        ]
                    },
                    app: {
                        title: '手机应用类',
                        last: true,
                        list: [
                            {
                                name: '91助手',
                                url: '#'
                            },
                            {
                                name: '产品助手',
                                url: '#',
                                hot: true
                            },
                            {
                                name: '智能地图',
                                url: '#'
                            },
                            {
                                name: '团队语音',
                                url: '#'
                            }
                        ]
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .index-wrap {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .index-left {
        float: left;
        width: 300px;
        text-align: left;
    }
    .index-right {
        float: left;
        width: 900px;
    }
    .index-left-block {
        margin: 15px;
        background: #fff;
        /*下拉阴影框*/
        box-shadow: 0 0 1px #ddd;
    }
    .index-left-block .hr {
        margin-bottom: 20px;
        border: 1px solid #bbb;
    }
    .index-left-block h2 {
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h3 {
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #000;
    }
    .index-left-block ul {
        padding: 10px 15px;
    }
    .index-left-block li {
        padding: 5px;
    }
    .index-left-block .hot-tag {
        background: red;
        color: #fff;
    }
    /*.new-item {
        display: inline-block;
        overflow: hidden;
        width: 230px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }*/
    .lastest-news {
        min-height: 512px;
    }
    .index-board-list {
        overflow: hidden;
    }
    .index-board-item {
        float: left;
        width: 400px;
        background: #fff;
        box-shadow: 0 0 1px #ddd;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .index-board-item-inner {
        min-height: 125px;
    }
    .index-board-item-inner img {
        float: left;
        width: 120px;
        height: 100px;
        margin-right: 20px;
    }
    .index-board-item h2 {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
        text-align: left;
    }
    .line-last {
        margin-right: 0px;
    }
    .index-board-button {
        margin-top: 30px;
        text-align: left;
    }
    .button {
        width: 100px;
        height: 40px;
        color: #fff;
        font-size: 14px;
        padding: 10px;
        background: #388864;
    }
</style>