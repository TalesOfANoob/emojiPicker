/* eslint-disable prettier/prettier */
import createDataContext from './createDataContext';

const EmojiReducer = (state,action)=>{
    switch (action.type){
        case 'add_emoji':
            
            const index = state.findIndex((e)=>{
                
                e.emojiCode === action.payload});
            
            if (index == -1){
                return [...state,{emojiCode:action.payload,count:1}];
            }
            const copy = [...state];
            copy[index].count++;
            
            return [...copy];


        default:
            return state;
    }
};

const addEmoji = dispatch =>(emojiCode)=>{
    
    dispatch({type:'add_emoji',payload:emojiCode});

};

export const {Provider,Context} = createDataContext(
    EmojiReducer,
    {addEmoji},
    []
);
