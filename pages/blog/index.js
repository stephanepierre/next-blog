import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import HomeCards from '../../components/HomeCards/HomeCards';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';




export default function blog(props) {
    return (
        <>
            <Head>
                <title>liste des blogs</title>
                <meta name="description" content="c'est la page qui liste les différents articles du blog" />
            </Head>

            <div className="container">
                <h1 className={styles.title}>Bienvenue sur le blog.</h1>
                <p className="text-center">Voici les articles</p> 
                <div className="row">
                    {props.posts.map(post => (
                        <HomeCards 
                            key={uuidv4()}
                            title={post.title}
                            text={post.body.slice(0,50)+`...`}
                            >
                            <Link href={`/blog/${post.id.toString()}`}>
                                <a className="card-link">Lire cet article</a>
                            </Link>
                        </HomeCards>
                    ))}
                </div>
        
            </div>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();

    if(!posts){
        return {
            notFound: true
        };
    }
    return {
        props: {posts}
    }
}

//https://jsonplaceholder.typicode.com/posts