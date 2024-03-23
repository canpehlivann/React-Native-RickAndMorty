const initialState = 
{
    likedCharacters: []
};

const rootReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'LIKE_CHARACTER':
            if (state.likedCharacters.includes(action.payload))
            {
                return state;
            }
        
            return {...state,likedCharacters:[...state.likedCharacters,action.payload]}

        case 'UNLIKE_CHARACTER':
            return{...state,likedCharacters:state.likedCharacters
            .filter(
                (id) => id !== action.payload
            )};
        
        default:
            return state;
    }
}

export default rootReducer;