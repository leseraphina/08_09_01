const {createSlice} = require('@reduxjs/toolkit');

let user = createSlice({
  name:'user',
  initialState:{
    people:'people01',age:20
  },
  reducers:{
    chagneAge(state,action){
      console.log(action);
      state.age += action.payload;
    }
  }
})

export let {chagneAge} = user.actions;
export default user;

//  13 - 23