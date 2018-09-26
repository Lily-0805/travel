<template>
	<div class="main-box">
		<div :style="{height:height,width:width}" ref="myEchart"></div>
		<div class="change">
			<img @click="changeChart('china')" :class="chartFor=='china' ? 'on' : ''" src="/image/china.png"/>
			<img @click="changeChart('world')" :class="chartFor=='world' ? 'on' : ''" src="/image/world.png"/>
		</div>
	</div>
</template>
<style>
.main-box{ position: fixed; top: 0; left: 0; width: 100%; height: 100%}
	.change{ position: fixed; padding: 10px 5px; bottom: 20px; right: 20px; z-index: 1;}
.change img{ float: left; margin: 0 5px; border-radius: 4px; border: 2px solid #fff; cursor: pointer;}
.change img.on{border: 2px solid #6c9;}
.change img:hover{border: 2px solid #6c9;}
</style>
<script>
	import echarts from 'echarts'
	import 'echarts/map/js/china.js';
	import 'echarts/map/js/world.js';

	export default {
		props: {
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '100%'
			}
		},
		data(){
			return {
				chart:null,
				chinaData:['北京','天津','上海','重庆','河南','云南','辽宁','黑龙江','湖南','安徽','山东','江苏','浙江','湖北','广西','甘肃','山西','内蒙古','陕西','福建','贵州','广东','西藏','四川','宁夏','海南','香港','澳门'],
				worldData:['China','Japan'],
				chartFor:'china'

			}
		},

		mounted() {
			this.chinaChart();
		},
		beforeDestroy() {
			if (!this.chart) {
				return
			}
			this.chart.dispose();
			this.chart = null;
		},
		methods: {
			chinaChart(){
				let that = this;
				let chartData =[];

				for(let i=0; i<that.chinaData.length;i++){
					chartData.push({
						name: that.chinaData[i],
						selected:true,

						emphasis:{
							itemStyle:{
								areaColor:'#66cc99',
							},
							label:{
								show:true,
								color:'#fff'
							}
						}
					})
				}


				// 把配置和数据放这里
				that.chart = echarts.init(that.$refs.myEchart);
				that.chart.setOption(
					{
						backgroundColor:'#333',
						series: [{
							type: 'map',
							mapType: 'china',
							selectedMode : false,
							label:{
								show:true,

							},
							emphasis:{
								itemStyle:{
									areaColor:'#efefef',
								},
								label:{
									color:'#000'
								}
							},
							itemStyle:{
								areaColor:'#efefef',
								borderColor:'#fff',
								shadowColor:'rgba(0, 0, 0, 0.9)'
							},
							data: chartData
						}]
					}
				)

			},
			worldChart(){
				let that = this;
				let chartData =[];

				for(let i=0; i<that.worldData.length;i++){
					chartData.push({
						name: that.worldData[i],
						selected:true,

						emphasis:{
							itemStyle:{
								areaColor:'#66cc99',
							},
							label:{
								show:true,
								color:'#fff'
							}
						}
					})
				}


				// 把配置和数据放这里
				that.chart = echarts.init(that.$refs.myEchart);
				that.chart.setOption(
					{
						backgroundColor:'#333',
						series: [{
							type: 'map',
							mapType: 'world',
							selectedMode : false,

							emphasis:{
								itemStyle:{
									areaColor:'#efefef',
								},
								label:{
									color:'#000'
								}
							},
							itemStyle:{
								areaColor:'#efefef',
								borderColor:'#ccc',
								shadowColor:'rgba(0, 0, 0, 0.9)'
							},
							data: chartData
						}]
					}
				)

			},

			changeChart(chartName){
				this.chartFor=chartName;
				this.chart.dispose();
				if(chartName=='world'){
					this.worldChart();
				}else{
					this.chinaChart();
				}
			}

		}
	}
</script>