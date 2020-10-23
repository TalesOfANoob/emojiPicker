/* eslint-disable prettier/prettier */
import createDataContext from './createDataContext';

const EmojiReducer = (state,action)=>{
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
};

const addEmoji = dispatch =>(emoji)=>{
    
    dispatch({type:'add_emoji',payload:emoji});

};

const rmEmoji = dispatch =>(emoji)=>{
    dispatch({type:'rm_emoji',payload:emoji});
}

export const {Provider,Context} = createDataContext(
    EmojiReducer,
    {addEmoji,rmEmoji},
    []
);
