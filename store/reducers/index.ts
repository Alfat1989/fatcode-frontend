import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {reducer as formReducer} from "redux-form";

export const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>

