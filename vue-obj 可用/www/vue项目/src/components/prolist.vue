<template>
	<div class="maincont">
		<header>
			<a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
			<div class="head-mid">
				<form action="#" method="get" class="prosearch"><input type="text" /></form>
			</div>
		</header>
		
		<ul class="pro-select">
			<li class="pro-selCur">
				<a href="javascript:;">新品</a>
			</li>
			<li>
				<a href="javascript:;">销量</a>
			</li>
			<li>
				<a href="javascript:;">价格</a>
			</li>
		</ul>
		<!--pro-select/-->
		<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<div class="prolist">
				<dl v-for="(item,index) in list">
					<dt><router-link :to="'/page/'+item.id"><img :src="['src/assets/'+item.src]" width="100" height="100" /></router-link></dt>
					<dd>
						<h3><router-link :to="'/page/'+item.id">{{item.jie}}</router-link></h3>
						<div class="prolist-price"><strong>¥{{item.price}}</strong> <span>¥599</span></div>
						<div class="prolist-yishou"><span>5.0折</span> <em>已售：35</em></div>
					</dd>
					<div class="clearfix"></div>
				</dl>
			</div>
			<div slot="top" class="mint-loadmore-top">
		        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
		        <span v-show="topStatus === 'loading'">Loading...</span>
		    </div>
			</loadmore>
		<!--prolist/-->
		
	</div>
</template>

<script>
	import Vue from 'vue'
    import { Loadmore } from 'mint-ui';
    Vue.component('loadmore', Loadmore);
    
	export default {
		data() {
			return {
				list: [],
				allLoaded:false
			}
		},
		mounted() {
			this.$http({
				url: 'http://localhost:3000/prolist',
				method: 'get'
			}).then((res) => {
				this.list = res.data;
			}).catch((res) => {

			})
		},
		methods:{
			loadTop() {
			  // 加载更多数据
				this.$http({
					url: 'http://localhost:3000/prolist',
					method: 'get'
				}).then((res) => {
					
				    for(let i=0;i<res.data.length;i++){
				    	this.list.push(res.data[i])
				    }
					console.log("...")
				}).catch((res) => {
	
				})
			  this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
			  // 加载更多数据
			  this.$http({
					url: 'http://localhost:3000/prolist',
					method: 'get'
				}).then((res) => {
					
				    for(let i=0;i<res.data.length;i++){
				    	this.list.push(res.data[i])
				    }
					console.log("...")
				}).catch((res) => {
	
				})
				if(this.list.length>120){
					 this.allLoaded = true;// 若数据已全部获取完毕
				}
			 
			  this.$refs.loadmore.onBottomLoaded();
			}
			
		}
		
	}
</script>

<style>

</style>