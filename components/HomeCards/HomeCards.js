import React from 'react';

export default function HomeCards(props) {
    return (    
        <div className="col-12 col-sm-6 my-2" style={{minHeight: "200px"}}>
            <div className="card shadow-sm w-100 h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                    <p className="card-text">{props.text}</p>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
