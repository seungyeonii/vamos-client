import React, {useEffect, useState} from 'react';
import {updateUserLocation} from "../util/APIUtils";
import "./LocationPage.css";
import locationcard from "../img/locationcard.png";

const {kakao} = window;
const {daum} = window;
let testval;
let container;
let geocoder;
let marker;
let map;

const LocationPage = () => {
    let m_location;

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
                        m_location = result;
                        console.log(result, coords)
                        container.style.display = "block";
                        console.log(container + '1');
                        map.relayout();
                        map.setCenter(coords);
                        marker.setPosition(coords)

                    }
                    return [result, coords]
                });
            }
        }).open();
    }


    function submitLocation() {
        let data = {
            "x": m_location.x,
            "y": m_location.y,
            "addressName": m_location.address.address_name,
        }

        updateUserLocation(data)
            .then((response) => {
                if (response.status === 200) {
                    window.location.href = "/"
                }
            })
    }

    return (
        <div className="location_">
            <div className="location_shape">
                <br/>
                <h2>
                    위치를 설정해주세요.
                    <h6>
                        * 위치설정을 해야 근처의 물품을 확인할 수 있습니다.
                        <br/>
                        <br/>
                        * 위치설정을 해야만 판매글을 올리실 수 있습니다.
                    </h6>
                    <div className="line" ></div>
                    <div className="location_content">
                        <br/>
                        <br/>
                        <input type="text" id="sample5_address"></input>
                        <button onClick={sample5_execDaumPostcode}>주소검색</button>
                        <div className="map" id="map"
                             style={{width: "500px", height: "450px", margin: "25px 90px"}}></div>
                        <div>
                            <button className="button_submit" onClick={submitLocation}>완료</button>
                        </div>
                    </div>
                </h2>
            </div>
        </div>
    )
};

export default LocationPage;
