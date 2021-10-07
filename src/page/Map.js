// Map 오류 남. kakao 어디서 가져오는지를 모르겠음. 준석오빠한테 설명해서 걍 PostCode로 주소 입력 받고 좌표 전환해서 찍는 거 밖에 방법 없을 듯!!


import React, {useEffect} from 'react';
import styled from 'styled-components';

const Map = (props) => {

    useEffect(() => {
        const container = document.getElementById('myMap'); //지도 표시할 div
        const options = {
            center: new kakao.maps.LatLng(37.545642179638556, 126.98117041998981), //지도 중심 좌표
            level: 8 //지도의 확대 레벨
        };
        const map = new kakao.maps.Map(container, options);//지도를 생성합니다. // 파란색 기본 마커입니다.
        const marker = new kakao.maps.Marker({position: map.getCenter()}); // 마커위에 뜨는 정보창입니다.
        const infowindow = new kakao.maps.InfoWindow({zindex: 1}); // 해당 위치 값이 어딘지 알게해주는 역할
        var geocoder = new kakao.maps.services.Geocoder(); //주소입력버튼을 아이디를 통해 가져왔습니다.
        const address = document.getElementById("address") // 주소입력버튼을 클릭했을 때 주소 입력란에 주소를 가져오고 // 그 주소를 좌표값으로 전환시킨다음에 그 좌표값으로 마커를 찍습니다.
        address.addEventListener('click', function () {
            const road = document.getElementById("road").value;
            geocoder.addressSearch(road, function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    searchDetailAddrFromCoords(coords, function (result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                            detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                            var content = `<div style="border:none ; padding:8px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">` + `<div style="display:flex; justify-content: space-between; margin-bottom: 5px;">` + '<span style="font-weight: 600;">주소정보</span>' + `</div>` + detailAddr + '<div style="color:grey; font-size:13px; margin-top:5px; " >새 마커를 만들고 싶으면 파란색 마커를 클릭해주세요!😀</div>' + `</div>`;
                            infowindow.setContent(content);
                            setAddress(result[0].address.address_name)
                        }
                    })
                    console.log(coords, road) // 마커에 좌표값을 넣어줍니다.
                    marker.setPosition(coords); //마커를 map에 보이게 합니다.
                    marker.setMap(map); // 지도 중심을 좌표값으로 옮깁니다.
                    map.setCenter(coords)
                    setLatitude(coords.Ma)
                    setLongitude(coords.La)
                    setRoad("")
                }
            })
        })

        function searchDetailAddrFromCoords(coords, callback) { // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
    }, [normalMarker])
    return (
        <React.Fragment>
            <MapSearch>
                <TextField id="road" label="주소를 입력해주세요😀" style={{width: "60%"}} value={roadAddress}
                           onChange={changeRoadAddress}/>
                &nbsp;
                <Button id="address" style={{backgroundColor: "#FFCC4D"}} variant="contained" disableElevation><span
                    style={{fontWeight: "600"}}>주소입력</span></Button> </MapSearch>
            <MapLinkContainer> <MapLink href="https://www.juso.go.kr/openIndexPage.do" target="_blank">정확한 주소를 모른다면
                클릭해주세요!</MapLink> </MapLinkContainer>
            <MapContainer id='myMap'> </ MapContainer> </React.Fragment>)
}
const MapContainer = styled.div` 
  position: relative;
  margin: auto;
  margin-bottom: 60px;
  width: 900px;
  height: 500px;
  @media (max-width: 1000px) {
    width: 85%;
  };
  @media (max-width: 450px) {
    width: 95%;
    height: 400px;
  } `
const MapSearch = styled.div` margin: auto;
  margin-top: 150px;
  width: 900px;
  display: flex;
`;

// align-items: center; @media (max-width: 1000px){ width: 85%; }; @media (max-width: 450px){ width: 95%; } `
const MapLinkContainer = styled.div`
  width: 900px;
  margin: auto;
  margin-bottom: 15px;
  @media (max-width: 1000px) {
    width: 85%;
  };
  @media (max-width: 450px) {
    width: 95%;
  } `
const MapLink = styled.a` font-size: 13px;
  text-align: center;
  cursor: pointer;
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
    font-weight: 600
  } `;

export default Map;