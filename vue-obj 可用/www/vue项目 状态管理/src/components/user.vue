<template>
	<div>
		<div class="maincont">
			<div class="userName" style="height:300px">

				<div v-show="hh">
					<dl class="names">
						<dt><img :src="user.src" /></dt>
						<dd>
							<h3>{{user.username}}</h3>
						</dd>
						<div class="clearfix"></div>
					</dl>
					<div class="shouyi">
						<dl>
							<dt>我的余额</dt>
							<dd>{{user.ye}}元</dd>
						</dl>
						<dl>
							<dt>我的积分</dt>
							<dd>{{user.jf}}</dd>
						</dl>
						<div class="clearfix"></div>
					</div>
				</div>

				<div class="shouyi" v-show="jj">
					<ul class="reg-login-click">
						<li>
							<router-link to="/login">登录</router-link>
						</li>
						<li>
							<router-link to="/reg">注册</router-link>
						</li>
						<div class="clearfix"></div>
					</ul>
					<div class="clearfix"></div>
				</div>
			</div>
			<!--userName/-->

			<ul class="userNav">

				<div class="height2"></div>

				<li><span class="glyphicon glyphicon-usd"></span>
					<router-link to="/echarts">我的消费记录</router-link>
				</li>
				<li><span class="glyphicon glyphicon-map-marker"></span>
					<router-link to="/echarts">收货地址管理</router-link>
				</li>
				<li><span class="glyphicon glyphicon-star-empty"></span>
					<router-link to="/echarts">我的收藏</router-link>
				</li>
				<li><span class="glyphicon glyphicon-heart"></span>
					<router-link to="/echarts">我的浏览记录</router-link>
				</li>
				<li><span class="glyphicon glyphicon-usd"></span>
					<router-link to="/echarts">余额提现</router-link>
				</li>
			</ul>
			<!--userNav/-->
		</div>
		<div id="exit" v-show="hh" @click="exit">退出登录</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				hh: false,
				jj: true,
				user: ""
			}
		},
		mounted() {
			this.$http({
				url: 'http://localhost:3000/user',
				method: 'post',
				withCredentials: true,
			}).then((res) => {
				if(res.data.error == 1) {} else {
					this.hh = true;
					this.jj = false;
					this.user = res.data[0]
				}
			}).catch((res) => {

			});
		},
		methods: {
			exit() {
			  MessageBox.confirm('确认退出吗?').then(action => {
				this.$http({
					url: 'http://localhost:3000/exit',
					method: 'post',
					withCredentials: true,
				}).then((res) => {
					if(res.data.error == 0) {
						this.$router.push({ path: '/home' })
					}
				}).catch((res) => {

				});
			  },action =>{return})
			}
		}
	}
</script>

<style>
	#exit {
		height: 50px;
		text-align: center;
		line-height: 50px;
		margin-top: 12px;
		background: dodgerblue;
		font-size: 18px;
		color: white;
	}
</style>