import React, {useState} from 'react';
import {getCurrentUser, login, updateUserLocation} from "../util/APIUtils";
import PopUp from './PopUp';

const Locationpage = (props) => {
    const [latlng, setLatlng] = useState(0)
    const getData=(latlng)=>{
        setLatlng(latlng);
    }

    const locationSubmit = (event) => {
        event.preventDefault();

        const locationRequest = Object.assign({}, {x,y});
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
                <PopUp latlng={latlng} getData={getData}></PopUp>
            </div>
            <button type="submit" style={{width : '100%'}}>
                위치 저장하기
            </button>
        </form>
    );
};

export default Locationpage;