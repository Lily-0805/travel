<template>
	<div>
		<div :style="{height:height,width:width}" ref="myEchart"></div>

	</div>
</template>
<style>

</style>
<script>
	import echarts from 'echarts'

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
			}
		},

		mounted() {
			this.initChart();
		},
		beforeDestroy() {
			if (!this.chart) {
				return
			}
			this.chart.dispose();
			this.chart = null;
		},
		methods: {
			initChart(){
				this.chart = echarts.init(this.$refs.myEchart);
				// 把配置和数据放这里
				this.chart.setOption(
					{
						title: {
							text: 'iphone销量',
							subtext: '纯属虚构',
							left: 'center'
						},
						tooltip: {
							trigger: 'item'
						},
						legend: {
							orient: 'vertical',
							left: 'left',
							data:['iphone3','iphone4','iphone5']
						},
						visualMap: {
							min: 0,
							max: 2500,
							left: 'left',
							top: 'bottom',
							text: ['高','低'],           // 文本，默认为数值文本
							calculable: true
						},
						toolbox: {
							show: true,
							orient: 'vertical',
							left: 'right',
							top: 'center',
							feature: {
								dataView: {readOnly: false},
								restore: {},
								saveAsImage: {}
							}
						},
						series: [
							{
								name: 'iphone3',
								type: 'map',
								mapType: 'china',
								roam: false,
								label: {
									normal: {
										show: true
									},
									emphasis: {
										show: true
									}
								},
								data:[
									{name: '北京',value: 0 },
									{name: '天津',value: 0 },
									{name: '上海',value: 0 },
									{name: '重庆',value: 0 },
									{name: '河北',value: 0 },
									{name: '河南',value: 0 },
									{name: '云南',value: 0 },
									{name: '辽宁',value: 0 },
									{name: '黑龙江',value: 0 },
									{name: '湖南',value: 0 },
									{name: '安徽',value: 0 },
									{name: '山东',value: 0 },
									{name: '新疆',value: 0 },
									{name: '江苏',value: 0 },
									{name: '浙江',value: 0 },
									{name: '江西',value: 0 },
									{name: '湖北',value: 0 },
									{name: '广西',value: 0 },
									{name: '甘肃',value: 0 },
									{name: '山西',value: 0 },
									{name: '内蒙古',value: 0 },
									{name: '陕西',value: 0 },
									{name: '吉林',value: 0 },
									{name: '福建',value: 0 },
									{name: '贵州',value: 0 },
									{name: '广东',value: 0 },
									{name: '青海',value: 0 },
									{name: '西藏',value: 0 },
									{name: '四川',value: 0 },
									{name: '宁夏',value: 0 },
									{name: '海南',value: 0 },
									{name: '台湾',value: 0 },
									{name: '香港',value: 0 },
									{name: '澳门',value: 0 }
								]
							},
							{
								name: 'iphone4',
								type: 'map',
								mapType: 'china',
								label: {
									normal: {
										show: true
									},
									emphasis: {
										show: true
									}
								},
								data:[
									{name: '北京',value: 0 },
									{name: '天津',value: 0 },
									{name: '上海',value: 0 },
									{name: '重庆',value: 0 },
									{name: '河北',value: 0 },
									{name: '安徽',value: 0 },
									{name: '新疆',value: 0 },
									{name: '浙江',value: 0 },
									{name: '江西',value: 0 },
									{name: '山西',value: 0 },
									{name: '内蒙古',value: 0 },
									{name: '吉林',value: 0 },
									{name: '福建',value: 0 },
									{name: '广东',value: 0 },
									{name: '西藏',value: 0 },
									{name: '四川',value: 0 },
									{name: '宁夏',value: 0 },
									{name: '香港',value: 0 },
									{name: '澳门',value: 0 }
								]
							},
							{
								name: 'iphone5',
								type: 'map',
								mapType: 'china',
								label: {
									normal: {
										show: true
									},
									emphasis: {
										show: true
									}
								},
								data:[
									{name: '北京',value: 0 },
									{name: '天津',value: 0 },
									{name: '上海',value: 0 },
									{name: '广东',value: 0 },
									{name: '台湾',value: 0 },
									{name: '香港',value: 0 },
									{name: '澳门',value: 0 }
								]
							}
						]
					}

				)

			}
		}
	}
</script>