import React, {useState} from 'react';
import {getCurrentUser, login, updateUserLocation} from "../util/APIUtils";

export default function Location (props) {
    return (
        <div>

        </div>
    );
};

function locationFrom (props) {
    const [state, setstate] = useState();
    const {result, coders} = state;

    const locationSubmit = (event) => {
        event.preventDefault();

        const locationRequest = Object.assign({}, {result, coords});
        updateUserLocation(locationRequest)
            .then(() => {
                updateUserLocation()
                    .then(response => {
                        props.setAfterlocation(response, true);
                    })
                    .then(props.history.push("/"))
                    .catch(response => alert(response.error.message));
            })
    }

    return (
        <form onSubmit={locationSubmit}>
            <div>

            </div>
        </form>
    )


}
