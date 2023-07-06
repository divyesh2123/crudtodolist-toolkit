import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function MySagaWithT() {

   const d = useSelector(y=>y.myusers);

   console.log(d);

   const dis = useDispatch();

   useEffect(()=> {

    dis({ type: 'FETCH_USER' });

   },[])
  return (
    <div>MySagaWithT</div>
  )
}
