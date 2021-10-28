import React, {useEffect, useState} from 'react';
import {Card, Button} from "react-bootstrap";
import axios from "axios";
import {getPostList} from "../util/APIUtils";
import {API_BASE_URL} from "../constants";

function List() {

    const getData = () => {

        const {listPost}=
            getPostList()
                .then(res => res.json())
                .then(console.log)
                .catch(res => res.json().then(console.log))
        console.log(listPost);
    };

    /*
        const[data, setData] = useState([]);

        const getData = (item) => {
            getPostList()
                .then(response => response.json())
                .then(responseData => {setData(responseData.item);});
        }

        const tableRows = data.map(
            (item, index) =>
                <tr key={index}>
                    <td>{item.title}</td>
                </tr>
        )
    */
    return (
        <div className="List">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <button onClick={getData}> dk</button>
                    <Card.Title ></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default List;
