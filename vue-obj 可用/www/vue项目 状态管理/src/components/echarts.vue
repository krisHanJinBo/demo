<template>
	<div>
	<header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>我的消费</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="src/assets/images/head.jpg" />
     </div><!--head-top/-->
     <table class="shoucangtab">
      <tr>
       <td width="75%"><span class="hui">2017年<strong class="orange">11</strong>月消费记录</span></td>
       <td width="25%" align="center" style="background:#fff url(src/assets/images/xian.jpg) left center no-repeat;"></td>
      </tr>
     </table>
     <div>
		<div id="myChart" style="width: 100%;height:480px" ref="myChart"></div>
	</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import echarts from 'echarts';
	Vue.prototype.$echarts = echarts; 
	export default {
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myChart'))
		        // 绘制图表
		        myChart.setOption({
		            title: { text: '消费记录' },
		            tooltip: {},
		            xAxis: {
		                data: ["面膜","修复液","粉底","腮红","口红","洗护"]
		            },
		            yAxis: {},
		            series: [{
		                name: '购买记录',
		                type: 'bar',
		                data: [5, 20, 30, 15, 10, 25]
		            }]
		        });
		    }
		}
	}
</script>