import React from 'react';
import './Profile.css';

export default function Profile({currentUser}) {

    const data = currentUser.data;

    return (
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
                </div>
            </div>
        </div>
    );
}

