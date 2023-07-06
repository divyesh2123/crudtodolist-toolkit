import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []

}

export async function fetchUsers() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      return users;
    } catch (e) {
      console.error('Error', e);
    }
  }
  

const myuserslice = createSlice({
  name: 'myusers',
  initialState,
  reducers: {

    fetchUsersSuccess: (state, { payload }) => {
        state.data.push(...payload);
      }

  }
});

export const fetchUsersAction = createAction('FETCH_USER');

export const {fetchUsersSuccess} = myuserslice.actions

export default myuserslice.reducer