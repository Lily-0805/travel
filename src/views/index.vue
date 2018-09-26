<!--suppress ALL, JSAnnotator -->
<template>
	<div>
		<div class="nav">
			<ul>
				<li :class="$route.path=='/territory' ? 'on' : ''"><router-link to="/territory">我的版图</router-link></li>
				<li :class="$route.path=='/footprint' ? 'on' : ''"><router-link to="/footprint">我的足迹</router-link></li>
				<li :class="$route.path=='/where' ? 'on' : ''"><router-link to="/where">我去了哪里？</router-link></li>
			</ul>
		</div>
		<el-container style="height: 100%;">
			<router-view></router-view>
		</el-container>
	</div>
</template>
<style>
	.el-header{text-align: right;}
	.el-menu.el-menu--horizontal{ border-bottom: none;}
	.el-menu--horizontal>.el-menu-item{ float: right;}
	.el-main{padding: 0; width: 100%; height: 100%;}
	.nav{ position: fixed; top: 20px; right: 20px; padding: 0 13px;  background: #fff; border-radius: 25px; box-shadow:  0 0 5px #c69; z-index: 1}
	.nav li{ float: left; padding: 0 25px; height: 40px; line-height: 40px; text-align: center; font-size: 14px;}
	.nav li.on{ color: #c69}
</style>
<script>
	export default {
		data () {
			return {


			}
		},
		methods:{

		}
	}
</script>