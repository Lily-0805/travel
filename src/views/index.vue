<!--suppress ALL, JSAnnotator -->
<template>
	<div>
		<div class="nav">
			<ul>
				<li>我去了哪里？</li>
			</ul>
		</div>
		<el-container style="height: 100%;">
			<router-view></router-view>

			<!--<el-header>-->
				<!--<el-menu :default-active="navselected" router class="el-menu-demo" mode="horizontal" @select="menuselct">-->
					<!--<template v-for="(item,index) in navList">-->
						<!--<el-menu-item :index="item.path" :key="item.path">{{item.name}}</el-menu-item>-->
					<!--</template>-->
				<!--</el-menu>-->

			<!--</el-header>-->

		</el-container>
	</div>
</template>
<style>
	.el-header{text-align: right;}
	.el-menu.el-menu--horizontal{ border-bottom: none;}
	.el-menu--horizontal>.el-menu-item{ float: right;}
	.el-main{padding: 0; width: 100%; height: 100%;}
	.nav{ position: fixed; top: 0; left: 0; }
</style>
<script>
	export default {
		data () {
			return {
                navList:[
	                {name:'我去了哪里？',path:'/where'},
	                {name:'我的足迹',path:'/footprint'},
                	{name:'我的版图',path:'/territory'}
                ],
				navselected:'/map',

			}
		},
		methods:{
			//导航选择
			menuselct(key){
				this.navselected=key
			},
		}
	}
</script>