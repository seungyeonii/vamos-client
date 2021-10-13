import React, {useState} from 'react';
import {postUpdate} from '../../util/APIUtils';
import {Button, Form, Input} from "antd";

const {TextArea} = input;

export default function Post(props) {
    if (props.authenticated) {
        return <Redirect to={
            {
                pathname: "/",
                state: {
                    from: props.home
                }
            }
        }/>
    }
    return (
        <div className="post-container">
            <div className="post-content">
                <h1 className="post-title"> 중고 상품 판매 글쓰기</h1>
                <PostForm/>
            </div>
        </div>
    )
}

const Continents = [
    { key: 1, value: "기타" },
    { key: 2, value: "책" },
    { key: 3, value: "가구" },
    { key: 4, value: "가전제품" },
    { key: 5, value: "디지털기기" },
    { key: 6, value: "식물" },
    { key: 7, value: "옷" }
]

function PostForm(props){
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

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const imageChange = (e) => {
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('file', img);
    }

    const postSubmit = (event) => {
        event.preventDefault();

        const postRequest = Object.assign({},{title, description,price, images,continents});
        postUpdate(postRequest)
            .then(response => {
                alert("successfully ");
                this.props.history.push("/home");
            })
            .catch(response => response.json()
                .then(json => alert(json.error.message))
            )
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 중고 상품 판매 글쓰기</h2>
            </div>
            <Form onSubmit={postSubmit()}>
                <label>이미지</label>
                <input onChange={imageChange} value={Images} />
                <br />
                <br />
                <label>제목</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <br/>
                <label>상품 설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <br/>
                <label>카테고리</label>
                <br/>
                <select onChange={continentChangeHandler} value={Continent}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <br/>
                <div style={{textAlign : 'center'}}>
                    <Button type="submit" style={{width:'100%'}}>
                        글 올리기
                    </Button>
                </div>
            </Form>
        </div>
    )
}