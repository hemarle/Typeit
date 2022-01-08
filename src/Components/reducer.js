export const initialState={
    user:null
}
export const actionTypes={
    set_user: "set_user"
}

const reducer= (state, action)=>{
    switch (action.type){
        case actionTypes.set_user:
            return {...state, user:action.user}

        default:
            return state
    }
}

export default reducer