import React from 'react'

export default function DisplayImg(params) {

    console.log(params);
  return (
    <img src={params.data.url}/>
  )
}
