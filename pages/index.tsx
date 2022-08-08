import React from "react";
import { Provider } from "react-redux";
import {store} from '../store'

const Index =()=>{
    return(
        <Provider store={store}>
            <div>
                Main page
            </div>
        </Provider>
    )
}

export default Index;