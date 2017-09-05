import * as types from './types'
export default {
  [types.SHOW_FOOT]:(state)=>{
    state.bFoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.bFoot=false;
  },
  [types.SHOW_LOADING]:(state)=>{
    state.bLoading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bLoading=false;
  },
  [types.CHANGE_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state)=>{
    state.buycar=[];
  }
}
