//  본부

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./redux/user";

let cart = createSlice({
  name:'cart',
  initialState:[
    {id:0,name:'peopl01', count:1},
    {id:1,name:'peopl02', count:3},
    {id:2,name:'peopl03', count:4},
    {id:3,name:'peopl04', count:2},
  ],
  reducers:{
    addCount(state,action){
      // console.log(action)
     state[action.payload].count ++ ;
    }
  }
})
export let {addCount}  = cart.actions;
export default configureStore({
  reducer:{
    user:user.reducer,
    cart:cart.reducer 
  }
})