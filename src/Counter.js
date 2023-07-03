import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrement, deleteItem, editItem, editItems, increment, incrementByAmount, updateItem } from './slice/counterslice';

export default function Counter() {

  const counter =  useSelector(y=>y.counter.count);

  const items = useSelector(y=>y.counter.items);

  const editindex= useSelector(y=>y.counter.editIndex);

  console.log(items);
  const dis = useDispatch();

    const [input,setInput] = useState(0);

    const handleChange = (e)=> {

        setInput(e.target.value);

    }

    const inc = ()=> {

        dis(increment())


    }

    const dec = ()=> {

        dis(decrement())
    }

    const inbyAmout = ()=> {

        dis(incrementByAmount(input));

    }

    const itemstolist = ()=> {

        alert(editindex);

        
        if(editindex <0)
        {

        dis(addItem(input));

        }
        else
        {
            dis(updateItem({index:editindex,value:input}))
        }
    }

    const dele = (index)=> {

        dis(deleteItem(index))
    }

    const edit = (index)=> {

      ///  dis(editItem({index:index, value:input}));

      dis(editItems(index));
      setInput(items[index]);
      

    }

  return (
    <div>
        
        <input type='text' onChange={handleChange} value={input}/>

        {counter}

        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={inbyAmout}>incbyamout</button>
        <button onClick={itemstolist}>addToDoList</button>

        {

items.map((value,index)=> {
    
    return(<div>{value} <button onClick={()=>{ dele(index)} }>delete</button>
    <button onClick={()=> {
        edit(index)
    }}>edit</button>

    
      </div>)


})

        }
      
    </div>
  )
}
