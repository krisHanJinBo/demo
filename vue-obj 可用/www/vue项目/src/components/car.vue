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
     <div class="dingdanlist" v-for="(item,index) in list">
      
      <table>
       <tr>
        <td width="100%" colspan="4"></td>
       </tr>
       <router-link  :to="'/page/'+item.id">
       <tr>
        <td width="4%"><input type="checkbox" name="1"/></td>
        <td class="dingimg" width="15%"><img :src="'src/assets/'+item.src" /></td>
        <td width="50%">
         <h3>{{item.jie}}</h3>
         <time>下单时间：2017-08-11  13:51</time>
        </td>
        <td align="right">
        	<p style="font-size: 16px; width:100px; text-align: center;" >数量：{{item.count}}</p>
        </td>
       </tr>
       </router-link>
       <tr>
        <th colspan="4"><strong class="orange">¥{{item.price}}</strong></th>
       </tr>
       <tr><div @click="de(item.id,index)">删除</div></tr>
      </table>
      
     </div><!--dingdanlist/-->

     <div class="height1"></div>
     <div class="gwcpiao">
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
	    mounted(){
	    console.log("...")
	      this.$http({
	        url:'http://localhost:3000/car',
	        method:'post',
	        withCredentials: true
	      }).then((res)=>{
              for(var i=0;i<res.data.a.length;i++){              	  
              	for(var j=0;j<res.data.b.length;j++){             	
              	    if(res.data.a[i].id==res.data.b[j].Id){
              	    	res.data.a[i].count=res.data.b[j].count
              	    	if(Number(res.data.b[j].count)!=0){
              	    		this.list.push(res.data.a[i])  
              	    	}             	    	
              	    }
                }
              }
             for(var t=0;t<this.list.length;t++){
             	this.num+=Number(this.list[t].count)*Number(this.list[t].price)
             	this.sum+=Number(this.list[t].count)
             }
             console.log(res.data)
	      }).catch((res)=>{
	      })
	    },
	    methods:{
	     	
		    de(n,index){
		        MessageBox.confirm('确认删除此商品吗?').then(action => {
			      this.$http({
			        url:'http://localhost:3000/del',
			        withCredentials: true,
			        method:'get',
			        params:{
			          id:n
			        }
			      }).then((res)=>{
			      	if(res.data.error==0){
			      		this.list.splice(index,1)
			      	}
			      	
			      }).catch((res)=>{
			        
			      })
			    },action =>{return})
	        }
	    
	  }
    }
</script>

<style>
</style>