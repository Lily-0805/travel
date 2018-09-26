<template>
	<div>
		<div id="allmap" style="width: 1000px;height: 600px;"></div>
	</div>
</template>
<style>

</style>
<script>
	export default {
		data(){
			return {
				map:''
			}
		},

		mounted() {
			this.map = new BMap.Map("allmap");
			this.map.enableScrollWheelZoom(true);//地图可缩放
			let point = new BMap.Point(104, 35);//地图默认中心点
			this.map.centerAndZoom(point, 5);
		},
	}
</script>