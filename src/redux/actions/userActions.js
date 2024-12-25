import { USER_UPDATE_FAIL } from "../constants/USerConstants";
import { USER_UPDATE_REQUEST } from "../constants/USerConstants";
import { USER_UPDATE_SUCCESS } from "../constants/USerConstants";

export const updateProfile= (user)=> async (dispatch, getState)=> {
    try{
        dispatch({type: USER_UPDATE_REQUEST });
        const {
            userLogin: [userInfo],
        }= getState();

        const config ={
            header: {
                "content-type" : "application/json",
                Authorization: `Bearer ${userInfo.token} `,
            },
        };
        const {data} = await axios.post ("/api/users/profile", user, config);
        dispatch ({type: USER_UPDATE_SUCCESS, payload: data}) ;
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
    
};