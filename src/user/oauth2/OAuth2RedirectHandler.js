import React from 'react';
import {Redirect} from "react-router-dom";
import {getCurrentUser} from "../../util/APIUtils";

export default function OAuth2RedirectHandler(props) {

    getCurrentUser()
        .then(response => {
            props.setAfterLogin(response, true);
        })
    console.log(props)

    return <Redirect to={
        {
            pathname: "/",
            state: {
                from: props.location
            }
        }
    }/>
}