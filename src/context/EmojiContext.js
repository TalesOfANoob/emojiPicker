/* eslint-disable prettier/prettier */
import createDataContext from './createDataContext';

const EmojiReducer = (state,action)=>{
    switch (action.type){
        case 'add_emoji':

            const index = state.findIndex((e)=>e.emoji === action.payload.emoji);
            if (index !== -1){
                return [...state,{emoji:action.payload.emoji,count:1}];
            }
            const copy = [...state];
            copy[index].count++;
            return copy;


        default:
            return state;
    }
};

const addEmoji = dispatch =>(emoji)=>{

    dispatch({type:'add_emoji',payload:emoji});

};

export const {Provider,Context} = createDataContext(
    EmojiReducer,
    {addEmoji},
    []
);
