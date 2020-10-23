
export const addEmoji =(emoji)=>{
    
    return {type:'add_emoji',payload:emoji};

};

export const rmEmoji =(emoji)=>{
    return {type:'rm_emoji',payload:emoji};
};