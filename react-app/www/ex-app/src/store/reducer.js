const reducer = (state,action) => {
  let {type,payload}=action;
  switch (type){
    case 'SHOW_NAV':
      return Object.assign({},state,{
        bNav:true
      });
      break;
    case 'HIDE_NAV':
      return Object.assign({},state,{
        bNav:false
      });
      break;
    case 'SHOW_FOOT':
      return Object.assign({},state,{
        bFoot:true
      });
      break;
    case 'HIDE_FOOT':
      return Object.assign({},state,{
        bFoot:false
      });
      break;
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading:true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading:false
      });
      break;
    case 'UPDATE_PROLIST':
      return Object.assign({},state,{
        prolist:payload
      });
      break;
    case 'ADD_ITEM':
      let find=false;
      state.buycar.forEach((val,index)=>{
      	if(val.id==payload.id){
      		find=true;
      		val.number++
      	}
      })
      if(!find){
      	payload.number=1;
      	state.buycar.push(payload)
      }
      return Object.assign({},state,{
        buycar:[...state.buycar]
      });
      break;
    case "REMOVE_ITEM" :   
	    state.buycar.forEach((val,index)=>{
	    	if(val.id==payload.id){
	    		val.number--;
	    		if(val.number<=0){
	    			val.number=0
	    		}
	    	}
	    })
      return Object.assign({},state,{
        buycar:[...state.buycar]
      });
      break;
    case 'DELETE_ITEM':
      // console.log('reducer66',payload);
      state.buycar.forEach((item,index)=>{
        if(item.id==payload.id){
          state.buycar.splice(index,1);
        }
      });
      // console.log(state.buyCar);
      return Object.assign({},state,{
        buycar:[...state.buycar]
      });
      break;
    case 'DELETE_ALL':
      return Object.assign({},state,{
        buycar:[]
      });
      break;
    default:
      return state;
  }
};
export default reducer;