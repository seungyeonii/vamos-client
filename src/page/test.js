import React, {useEffect} from 'react';
import {APP_KEY} from "../constants";

const kakao = window;

const Test = () => {

    useEffect(()=>{
        const script1 = document.createElement("script");
        const script2 =
        script1.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey"+APP_KEY+"&libraries=LIBRARY"
        document.head.appendChild(script);
        script1.onload = () => {
                let container = document.getElementById("map");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                };
        }


    }, []);



    return (
        <div>

        </div>
    );
};

export default Test;