<template>
	<div>
	<div class="maincont">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>购物车</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <table class="shoucangtab">
      <tr>
       <td width="75%"><span class="hui">购物车共有：<strong class="orange">{{this.sum}}</strong>件商品</span></td>
       <td width="25%" align="center">
        <span class="glyphicon glyphicon-shopping-cart" style="font-size:2rem;color:#666;"></span>
       </td>
      </tr>
     </table>
     <div style="height:30px;padding:8px"><a href="javascript:;"><input type="checkbox" name="1" v-model="quan"/> 全选</a></div>
     <div class="dingdanlist" v-for="(item,index) in buycar">
      
      <table>
       <tr>
        <td width="100%" colspan="4"></td>
       </tr>
       
       <tr>
       	<router-link  :to="'/page/'+item.id">
        <td width="4%"><input type="checkbox" name="1"/></td>
        <td class="dingimg" width="15%"><img :src="'src/assets/'+item.src" /></td>
        <td width="50%">
         <h3>{{item.jie}}</h3>
         <time>下单时间：2017-08-11  13:51</time>
        </td>
        </router-link>
        <td align="right">
        	<p style="font-size: 16px; width:100px; text-align: center;" ></p>
        	<input class="min" type="button" value="-" @click="changeItem({id:item.id,num:-1})" />   
		     {{item.number}}  
			<input class="add" type="button" value="+" @click="changeItem({id:item.id,num:1})"/>
        </td>
       </tr>
       
       <tr>
        <th colspan="4"><strong class="orange">¥{{item.price}}</strong></th>
       </tr>
       <tr><div @click="removeItem({id:item.id})">删除</div></tr>
      </table>
      
     </div><!--dingdanlist/-->

     <div class="height1"></div>
     <div class="gwcpiao">
     <input type="button" value="清空购物车" @click="clearBuycar">
     <table>
      <tr>
       <th width="10%"><a href="javascript:history.back(-1)"><span class="glyphicon glyphicon-menu-left"></span></a></th>
       <td width="50%">总计：<strong class="orange">¥{{num}}</strong></td>
       <td width="40%"><router-link to="/pay" class="jiesuan">结算</router-link></td>
      </tr>
     </table>
    </div><!--gwcpiao/-->
    </div><!--maincont-->
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import {mapActions,mapGetters} from 'vuex';
	export default{
		
	    data(){
	      return {
            sum:0,
	      	quan:true,
	      	count:"",
	        list:[],
	        num:0
	      }
	    },
	    computed:mapGetters([
	      'buycar'
	    ]),
	    methods:mapActions([
	      'changeItem','removeItem','clearBuycar'
	    ])
    }
</script>

<style>
</style>