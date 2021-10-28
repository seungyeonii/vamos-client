import React from 'react';
import {Card, Button} from "react-bootstrap";

const Board = ({item, deleteBoard}) => {

    const deleteEventHandler = () => {
        deleteBoard(item);
    }

    return (
            <div style={{width:'fit-content'}}>
                <Card
                    style={{ marginLeft:'130px',display:'flex', width: 'fit-content',height:'400px', marginBottom:'50px', padding:'10px',border:'1px solid black',boxShadow:'4px 4px 4px' }}>

                    <Card.Body style={{ marginLeft:'10px',textAlign: 'center', marginTop:'130px'}}>
                        <Card.Title >제목 : {item.title}</Card.Title>
                        <Card.Text>
                            내용 : {item.content}
                        </Card.Text>
                        <Card.Text>
                            가격 : {item.price}
                        </Card.Text>
                        <Card.Text>
                            카테고리 : {item.category_info.category_name}
                        </Card.Text>
                        <Card.Text>
                            위치 : {item.location.address_name}
                        </Card.Text>
                            <Button style={{height:'40px', textAlign:'center'}} variant="primary" onClick={deleteEventHandler}>상세보기</Button>

                        </Card.Body>
                </Card>
            </div>

    );
};

export default Board;