import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import Axios from 'axios';
import {API_BASE_URL} from "../constants";
import {postUpdate} from "../util/APIUtils";
import "./Writepage.css";

const { TextArea } = Input;

const Continents = [
    { key: 1, value: "DIGITAL_DEVICE" },
    { key: 2, value: "HOME_APPLIANCES" },
    { key: 3, value: "FURNITURE_INTERIOR" },
    { key: 4, value: "INFANT_CHILD" },
    { key: 5, value: "TODDLER_BOOK" },
    { key: 6, value: "PROCESSED_FOOD" },
    { key: 7, value: "SPORTS_LEISURE" },
    { key: 8, value: "WOMEN_FASHION" },
    { key: 9, value: "MEN_FASHION" },
    { key: 10, value: "GAME_HOBBY" },
    { key: 11, value: "BEAUTY" },
    { key: 12, value: "PET_SUPPLIES" },
    { key: 13, value: "BOOKS_TICKETS_RECORDS" },
    { key: 14, value: "PLANT" },
    { key: 15, value: "ETC" },
    { key: 16, value: "WANT_BUY" },
]

function Writepage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (event) => {
        setImages(event.currentTarget.value)
    }

    const submitHandler = (event) => {
        event.preventDefault(); /* reflash를 방지하기 위함*/

        if (!Title || !Description || !Price || !Continent ) {
            return alert(" 모든 값을 넣어주셔야 합니다.")
        }
        console.log(event.target)
        //서버에 채운 값들을 request로 보낸다.
      let data = new FormData(event.target);
        data.append("title", Title)
        data.append("content",Description)
        data.append("price",Price)
        data.append("categoryNumber",Continent)
        //data.append("files", Images)

      /*  const body = {
            //로그인 된 사람의 ID
            title: Title,
            content: Description,
            price: Price,
            categoryNameEN: Continent
        }*/
        for (let key of data.entries()) {
            console.log(key[0] + ', ' + key[1])
        }
        console.log(data);
        // const headers ={'credentials': 'include'}

    /* Axios.post(API_BASE_URL+'/board', data, {headers})
            .then(response => {
                if (response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')

                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
         .catch(res => console.log('res : ', res))

     */

        postUpdate(data)
            .then((response)=>{
                if (response.status === 200) {
                    window.location.href = "/"
                }
            })
            //.then(json => console.log(json))
            .catch(res => res.json().then(console.log))
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 중고 상품 판매 글쓰기</h2>
            </div>
            <form onSubmit={submitHandler}>
                <br />
                <Input className="title" onChange={titleChangeHandler} value={Title} placeholder="제목을 입력하세요."/>
                <br />
                <br />
                <br/>
                <Input className="description" onChange={descriptionChangeHandler} value={Description} placeholder="상품설명을 적어주세요."/>
                <br />
                <br />
                <br />
                <label>가격 : </label>
                <Input className="price" type="number" onChange={priceChangeHandler} value={Price} placeholder="가격을 적어주세요."/>
                <br />
                <br />
                <br/>
                <label>카테고리 : </label>
                <select onChange={continentChangeHandler} value={Continent}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <br/>
                <div style={{textAlign : 'center'}}>
                    <button style={{width:'100%'}}>글올리기</button>

                </div>
            </form>
        </div>
    )
}

export default Writepage