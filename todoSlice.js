import createSlice from '@reduxjs/toolkit';

const todoSlice=createSlice({
    name:'todos',
    initialState:{
        items:[],
    },
    reducers:{
        addTodo:(state,action)=>{
            state.items.push({id:Date.now(),text:action.payload.text});
        },
        editTodo:(state,action)=>{
            const{id,text}=action.payload;
            const todo=state.items.find((item)=>item.id===id);
            if(todo){
                todo.text=text;
            }
        },
        removeTodo:(state,action)=>{
            const id=action.payload.id;
            state.items=state.items.filter(item=>item.id!==id);
        },
        setTodo:(state,action)=>{
            state.items=action.payload;
        }
    }
});

export const{addTodo,removeTodo,reducers,setTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducers;

