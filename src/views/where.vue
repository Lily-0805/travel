<template>
	<div class="main-box">
		<div id="allmap" style="width: 100%;height: 100%"></div>
	</div>
</template>
<style>

</style>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				map:''
			}
		},

		mounted() {
			let that = this;

			that.map = new BMap.Map("allmap");
			that.map.enableScrollWheelZoom(true);//地图可缩放
			that.map.centerAndZoom(new BMap.Point(104, 35), 5);





		},
		created(){
			this.getList();
		},
		methods:{
			getList(){
				let that = this;
				axios.get('/json/where.json')
					.then(function (rs) {
						let list = rs.data.data
						for(let i=0; i<list.length;i++){
							let myGeo = new BMap.Geocoder();

							// 将地址解析结果显示在地图上，并调整地图视野
							myGeo.getPoint(list[i].spot, function(point){
									if (point) {

										//that.map.centerAndZoom(point, 16);
										that.map.addOverlay(new BMap.Marker(point));
									}
								},list[i].city);
						}
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		}

	}
</script>