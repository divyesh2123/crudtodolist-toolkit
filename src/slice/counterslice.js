import { createSlice } from '@reduxjs/toolkit'
import { act } from '@testing-library/react';

const initialState = {

    count : 0,
    items: [],
    editIndex: -1
}

const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    increment: (state) => {
        state.count += 1
      },
      decrement: (state) => {
        state.count -= 1
      },
      incrementByAmount: (state, action) => {
        state.count += parseInt(action.payload)
      },

      addItem : (state,action) => {


        state.items.push(action.payload);

        

      },

      editItems : (state,action) => {

        state.editIndex = action.payload;

        console.log(action.payload);

      },

      
      updateItem : (state,action) => {

        state.items[action.payload.index]= action.payload.value;

      },

      deleteItem :(state,action) => {

        state.items.splice(action.payload,1);
      }


  }
});

export const {increment, decrement, incrementByAmount,addItem,deleteItem,updateItem,
    editItems} = counterslice.actions

export default counterslice.reducer