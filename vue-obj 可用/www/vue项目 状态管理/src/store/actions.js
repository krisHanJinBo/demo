import * as types from './types'
export default {
  showFoot:({commit,state},payload)=>{
    commit(types.SHOW_FOOT)
  },
  hideFoot:({commit,state},payload)=>{
    commit(types.HIDE_FOOT)
  },
  showLoading:({commit,state},payload)=>{
    commit(types.SHOW_LOADING)
  },
  hideLoading:({commit,state},payload)=>{
    commit(types.HIDE_LOADING)
  },
  addItem:({commit,state},payload)=>{
    // console.log('state',state);
    // console.log('payload',payload);
    let find=false;
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        find=true;
        item.number++;
      }
    });
    if(!find){
      payload.number=1;
      state.buycar.push(payload)
    }
    commit(types.CHANGE_BUYCAR,[...state.buycar]);
  },
  changeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        item.number+=payload.num;
      }
    });
    // console.log('changeItem',state.buycar);
    commit(types.CHANGE_BUYCAR,[...state.buycar])
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.CHANGE_BUYCAR,[...state.buycar])
  },
  clearBuycar:({commit})=>{
    commit(types.CLEAR_BUYCAR)
  }
}
