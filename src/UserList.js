import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './slice/userSlice';

export default function UserList() {

    const data=   useSelector(y=>y.users.data);

    const dis = useDispatch();

    useEffect(()=> {

        dis(getUserList(1));

    },[])

    console.log(data);


  return (
    <div>UserList</div>
  )
}
