import { API_URL } from '../../../constantsAPI';

export const POST_USER = "POST_USER"
export const POST_USER_SUCCESS = "POST_USER_SUCCESS"
export const POST_USER_FAILURE = "POST_USER_FAILURE"

export const postUser = ({ user_name, first_name, last_name, email, password, admin }) => (dispatch) => {
    console.log(user_name)
    dispatch({ type: POST_USER })
    
    fetch(API_URL + `/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_name,
            first_name,
            last_name,
            email,
            password,
            admin
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return dispatch({ type: POST_USER_SUCCESS, payload: data })
    })
    .catch(err => {
        return dispatch({ type: POST_USER_FAILURE, payload: err })
    })
}
