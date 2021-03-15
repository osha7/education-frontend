import { POST_USER, POST_USER_SUCCESS, POST_USER_FAILURE } from '../actions/user/userAction';

const initialState = {
    user: [],
    jwt: "",
    isLoading: false,
    errors: []
}

function userReducer(state = initialState, action) {
    switch(action.type){
        case POST_USER:
            return {...state, isLoading: true, errors: ""}

        case POST_USER_SUCCESS:
            const user = action.payload.user
            const jwt = action.payload.jwt
            return {...state, isLoading: false, user: user, jwt: jwt}

        case POST_USER_FAILURE:
            console.log(action.payload)
            return {...state, isLoading: false, errors: action.payload.errors}
            
        default:
            return state;
    }
}

export default userReducer;

