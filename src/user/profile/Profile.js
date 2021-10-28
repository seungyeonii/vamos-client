import React, {useState} from 'react';
import './Profile.css';
import Modal from "../../page/Modal";

export default function Profile({currentUser}) {

    const data = currentUser.data;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && <Modal visible={isOpen}/>}
            <div className="profile-container">

                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {
                                data.profile ? (
                                    <img src={data.profile} alt={data.nickname}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{data.nickname ? data.nickname : data.username}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                            <h2>{data.username}</h2>
                            <p className="profile-email">{data.email}</p>
                        </div>

                        <div>
                            <button type={"button"} onClick={() => setIsOpen(!isOpen)}>open</button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}