import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Detail from '@/components/pages/detail'
import Count from '@/components/pages/detail/count'
import Analysis from '@/components/pages/detail/analysis'
import Forecast from '@/components/pages/detail/forecast'
import Publish from '@/components/pages/detail/publish'

// 对路由组件进行注册
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: Layout
    },
    {
        path: '/detail',
        component: Detail,
        redirect: '/detail/analysis',
        children: [
            {
                path: 'analysis',
                component: Analysis
            },
            {
                path: 'count',
                component: Count
            },
            {
                path: 'forecast',
                component: Forecast
            },
            {
                path: 'publish',
                component: Publish
            }
        ]
    }
  ]
})
