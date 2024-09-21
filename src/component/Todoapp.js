import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { onchange, addtask,removecart,editdata,edittask } from '../redux/redex'
function Todoapp() {
    const data = useSelector((state)=>state.todo.inputvalue)
    const dispatch = useDispatch()
    const value = useSelector((state)=>state.todo.todocart)
    const editid = useSelector((state)=>state.todo.editid)
    console.log(value)
  return (
    <div>

     <input type="text" value={data} onChange={(e)=>dispatch(onchange(e.target.value))} />
     {!editid? (<button onClick={()=>dispatch(addtask())}>add</button>):(
        <button onClick={()=>dispatch(edittask())}>save edits</button>
     )}

      {
        value.map((value)=>(
           <div>
             <span>{value.text}</span> 
             <button onClick={()=>dispatch(removecart(value.id))}>removie</button>
             <button onClick={()=>dispatch(editdata(value.id))}>edite</button>
           </div>
        ))
      }
    </div>
  )
}

export default Todoapp
