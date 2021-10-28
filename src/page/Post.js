import React, {useEffect, useState} from 'react';
import {getPostList, deletePost} from "../util/APIUtils";
import DataList from "./DataList";

const Post = () => {
    const [items, setItems] = useState([]);

    function deleteBoard (item) {
        deletePost(item)
            .then(response => response.json())
            .then(json => alert(json.data))
            .then(() => {
                window.location.href='/boards'
            })
            .catch(response => response.json()
                .then(json => alert(json.error.message)));
    }

    useEffect(()=>{
        getPostList()
            .then(res => res.json())

            .then(response => {
                console.log(response)
                setItems(response.data) ;
            })

    }, []);

    useEffect(()=>{
        console.log(items)
    },[items])

    return (
        <div style={{margin:'0 auto', width :'100%'}}>
            <h3>
                <br/>
            </h3>
            <DataList items={items} deleteBoard={deleteBoard}/>
        </div>
    );
};

export default Post;