import {createStore} from 'redux'


const EmojiReducer = (state=[],action) =>{
    switch (action.type){
        case 'add_emoji':
            
            let index = state.findIndex((e)=>{
                return e.emoji.name == action.payload.name});
            if (index == -1){
                return [...state,{emoji:action.payload,count:1}];
            }
            const copy = [...state];
            copy[index].count++;
            
            return copy;
        
        case 'rm_emoji':
            
            let index1 = state.findIndex((e)=>{
                return e.emoji.name == action.payload.name});
            const copy1 = [...state];
            if(state[index1].count>1){
                copy1[index1].count--;
                return copy1;
            }else{
                return copy1.slice(0,index1).concat(copy1.slice(index1+1));
            }
        
        default:
            return state;
    }
}


export const store=createStore(EmojiReducer);