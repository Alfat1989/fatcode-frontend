import { UserAction, UserState } from "../../types/UserType"
import { UserActionTypes } from "../actions/UserAction"

const initialState: UserState = {
      user: [],
      loading: false,
      error: null
}


export const userReducer = (state = initialState, action: UserAction): UserState=>{
    switch (action.type){
        case UserActionTypes.FETCH_USER:
            return {loading: true, error: null, user: []} 
        case UserActionTypes.FETCH_USER_SUCCESS:
                return {loading: true, error: null, user: action.payload} 
        case UserActionTypes.FETCH_USER_ERROR:
                return {loading: false, error: null, user: []} 
        case UserActionTypes.FETCH_USER_DELETE :
            return {loading: true, error: null, user: []} 
        default: 
            return state;
    }
}