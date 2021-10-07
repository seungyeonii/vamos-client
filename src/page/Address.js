/*
import React, {useEffect} from 'react';
import * as daum from "react-daum-postcode";
import maps from "react-daum-postcode";
import DaumPostcode from "react-daum-postcode";

const {kakao} = window;

export default function Address(){
    useEffect(()=>{
        address();
    },[]);

    const address = () => {
        /*
        let mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
                level: 5 // 지도의 확대 레벨
            };

        //지도를 미리 생성
        let map = new daum.maps.Map(mapContainer, mapOption);
        //주소-좌표 변환 객체를 생성
        let geocoder = new daum.maps.services.Geocoder();
        //마커를 미리 생성
        let marker = new daum.maps.Marker({
            position: new daum.maps.LatLng(37.537187, 127.005476),
            map: map
        });

        function sample5_execDaumPostcode() {
            new daum.Postcode({
                oncomplete: function(data) {
                    let addr = data.address; // 최종 주소 변수

                    // 주소 정보를 해당 필드에 넣는다.
                    document.getElementById("sample5_address").value = addr;
                    // 주소로 상세 정보를 검색
                    geocoder.addressSearch(data.address, function(results, status) {
                        // 정상적으로 검색이 완료됐으면
                        if (status === daum.maps.services.Status.OK) {

                            let result = results[0]; //첫번째 결과의 값을 활용

                            // 해당 주소에 대한 좌표를 받아서
                            let coords = new daum.maps.LatLng(result.y, result.x);
                            // 지도를 보여준다.
                            mapContainer.style.display = "block";
                            map.relayout();
                            // 지도 중심을 변경한다.
                            map.setCenter(coords);
                            // 마커를 결과값으로 받은 위치로 옮긴다.
                            marker.setPosition(coords)
                        }
                    });
                }
            }).open();
        }



        function completeHandler() {
            console.log('test');
        }


        return (
            <div>
                {/*
                <div className="map" id="map" style={{ width: "500px", height: "500px", margin:"30px" }}></div>

                }
                <DaumPostcode onComplete={completeHandler} />


            </div>
        );
    };

}
*/

import React from 'react';
import DaumPostcode from "react-daum-postcode";
import * as daum from "react-daum-postcode";




const Address = () => {
    function completeHandler() {
        console.log('complete event');
    }

    return (
        <div>

            <DaumPostcode onComplete={completeHandler} />
        </div>
    );
};

export default Address;