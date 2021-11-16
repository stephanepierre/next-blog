import React from 'react';
import styles from '../../styles/Home.module.css';
import { v4 as uuid_v4 } from "uuid";
import Head from 'next/head'
import Link from 'next/link'



export default function liste(props) {
    
    return (
        <>
            <Head>
                <title>liste des membres</title>
                <meta name="description" content="voici la page qui recense la liste des membres ayant posté un article sur le blog" />
            </Head>

            <div className="container">
                <h1 className={styles.title}>La liste des membres</h1>
                <table className="table table-bordered">
                    <tbody>
                        {props.users.map(user => (
                            <>
                                <tr className="text-center" key={uuid_v4()}>
                                    <td>{user.username}</td>
                                    <td>
                                        <Link href={`/liste/${user.username}`}>
                                            <a>Voir le membre</a>
                                        </Link>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export async function getStaticProps(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();

    if(!users){
        return {
            notFound: true
        };
    }
    return {
        props: {users}
    }
}

//
