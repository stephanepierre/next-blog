import React from 'react';
import Link from 'next/link';

export default function HomeCards(props, href) {
    return (    
        <div className="col mx-2 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                <p className="card-text">{props.text}</p>
                <Link href={href} passHref>
                    <a className="card-link">{props.linkText}</a>
                </Link>
            </div>
        </div>
    )
}
