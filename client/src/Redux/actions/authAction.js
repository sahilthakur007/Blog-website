import { signin, signup } from "../../api/allApi";
export const loginUser = (userinfo,navigate) => async (dispatch) => {

    try {
        const res = await signup(userinfo);
        if (res.status == 200) {
            navigate("/")
        }
        dispatch({
            type: "LOGIN",
            payload: res.data
        })
    }
    catch (error) {
        console.log(error);
    }
}
export const signInUser = (userinfo,navigate) => async (dispatch) => {
   
    try {
       
        const res = await signin(userinfo);
        
        if (res.status == 200) {
            navigate("/")
        }
        else {
            alert("Invalid credentials")
        }
        dispatch({
            type: "SIGNIN",
            payload: res.data
        })
    }
    catch (error) {
        console.log(error);
    }
}
export const logoutUser = (id) => async (dispatch) => {
    
    dispatch({
        type: "LOGOUT"
    })
}