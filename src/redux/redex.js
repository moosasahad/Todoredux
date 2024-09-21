import { createSlice} from '@reduxjs/toolkit'

  const todoSlice = createSlice({
    name:"todo",
    initialState:{
        inputvalue:"",
        todocart:[],
        editid:null,
    },
    reducers:{
        onchange:(state,action)=>{
            state.inputvalue=action.payload
        },
        addtask:(state,action)=>{
            if(state.inputvalue.trim()){
                state.todocart.push({id:Date.now(),text:state.inputvalue})
                state.inputvalue="";

            }
        
        },
        removecart:(state,action)=>{
            state.todocart=state.todocart.filter(item=>item.id!==action.payload)
            
        },
        editdata:(state,action)=>{
            const data =state.todocart.find(item=>item.id===action.payload)
            if(data){
                state.editid=data.id
                state.inputvalue=data.text
            }
        },
        edittask:(state)=>{
            const data = state.todocart.find( item => item.id == state.editid)
            if(data && state.inputvalue){
                data.text = state.inputvalue
                state.editid=null
                state.inputvalue=""
            }
        }
    }
 })

 export const { onchange,addtask,removecart,editdata,edittask } = todoSlice.actions;
 export default todoSlice.reducer 