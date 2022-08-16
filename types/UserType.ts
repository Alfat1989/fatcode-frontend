import { UserActionTypes } from "../store/actions";

export type UserAction = FETCH_USER | FETCH_USER_SUCCESS | FETCH_USER_DELETE | FETCH_USER_ERROR 

export interface UserState{
    user: any[];
    loading: boolean;
    error: null | string;
}


export interface FETCH_USER{
    type: UserActionTypes.FETCH_USER; 
}

export interface FETCH_USER_SUCCESS{
    type:  UserActionTypes.FETCH_USER_SUCCESS;
    payload: any[];
}

export interface FETCH_USER_ERROR{
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

//Пока оставлю так, но нужно будет продумать что будет с состояними при удалении пользователя
interface FETCH_USER_DELETE{
    type: UserActionTypes.FETCH_USER_DELETE;
    payload: any[];
}