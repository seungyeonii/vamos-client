import React, {useEffect, useState} from 'react';
import {updateUserLocation} from "../util/APIUtils";

const {kakao} = window;
const {daum} = window;

let container;
let geocoder;
let marker;
let map;

const Test2 = (props) => {
    const [state, setstate] = useState();
    const {result,coords} = state;
    setstate({});


    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        container = document.getElementById("map");
        let options = {
            center: new daum.maps.LatLng(37.624915253753194, 127.15122688059974),
            level: 5,
        };
        //map
        map = new daum.maps.Map(container, options);

        geocoder = new daum.maps.services.Geocoder();
        marker = new daum.maps.Marker({
            position: new daum.maps.LatLng(37.537187, 127.005476),
            map: map
        });

    }

     function sample5_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function (data) {
                let addr = data.address; // 최종 주소 변수
                document.getElementById("sample5_address").value = addr;
                geocoder.addressSearch(data.address, function (results, status) {
                    if (status === daum.maps.services.Status.OK) {
                        var result = results[0];
                        var coords = new daum.maps.LatLng(result.y, result.x);

                        console.log(result, coords)
                        container.style.display = "block";
                        console.log(container + '1');
                        map.relayout();
                        map.setCenter(coords);
                        marker.setPosition(coords)
                    }
                });
            }
        }).open();
    }


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
        <div>
            <form onSubmit={locationSubmit}>
                <input type="text" id="sample5_address"></input>
                <button onClick={sample5_execDaumPostcode}>주소검색</button>
                <div className="map" id="map" style={{width: "600px", height: "600px", margin: "30px"}}></div>
                <div>
                    <button type="submit" className="location_submit">보내기</button>
                </div>
            </form>
        </div>
    )
};

export default Test2;
