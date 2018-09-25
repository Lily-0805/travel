import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getViewComponent = (path) => (resolve) => require(['@/views' + path + '.vue'], resolve)

const router = new Router({
	mode : 'history',
	routes: [
		{
			path: '/',
			component: getViewComponent('/index'),
			children:[
				{path: '/territory', component: getViewComponent('/territory'),meta: {title: '我的版图-我的旅行足迹'}},
				{path: '/footprint', component: getViewComponent('/footprint'),meta: {title: '我的足迹-我的旅行足迹'}},
				{path: '/where', component: getViewComponent('/where'),meta: {title: '我去了哪里-我的旅行足迹'}},
			],

			meta: {title: '我的旅行足迹'},redirect:'/territory'
		},
	]
})

export default router
