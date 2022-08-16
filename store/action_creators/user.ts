import axios from "axios";
import {UserSignup} from "../../types/AuthTypes";

export const fetchUsers  = (user: UserSignup) => {
    return () => {
        try {
            const response = axios.post('http://194.67.110.24/api/v1/auth/users/', user)
            console.log(response);
        } catch (e) {
            console.log("error")
        }
    }
}
