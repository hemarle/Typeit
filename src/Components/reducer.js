import Cookies from "universal-cookie";

const cookies= new Cookies();
 
export const initialState={
    user:cookies.get('user'),
    email:cookies.get('user')?.user?.email,
    files:[]

}
export const actionTypes={
    set_user: "set_user",
    set_email:"set_email",
    set_files: "set_files"
}

const reducer = (state, action)=>{

    switch (action.action){
        case actionTypes.set_user:
            return { ...state, user:action.user}
        case actionTypes.set_email:
            return { ...state, email:action.email}
        case actionTypes.set_files:
            return { ...state, files:action.files}
        default:
            return state
    }
}

export default reducer