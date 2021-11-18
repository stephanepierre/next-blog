import React from 'react';
import Head from 'next/head';


export default function article(props) {
    return (
        <>
            <Head>
                <title>article {props.articlePost.title.slice(0, 10) + `...`}</title>
                <meta name="description" content={`Voici la page sur un article parlant de ${props.articlePost.title}`} />
            </Head>

            <div className="container px-4 pt-5">
                <h1 className="text-center mb-4">{props.articlePost.title}</h1>
                <p className="text-center">{props.articlePost.body}</p>
            </div>
        </>
    )
}

export async function getStaticProps(context){
    //on recupère les données de chaque articles
    const id = context.params.article;
    // on utilise le chemin en ajoutant qu'on recherche par la fonction du dessus par id
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    //on transforme l'article en json
    const articlePost = await data.json();

    return {
        props: {
            articlePost
        }
    }
}

export async function getStaticPaths() {

    //on indique où récupérer les données
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await data.json();

    //on fourni un tableau avec tous les chemins
    const paths = articles.map(item => ({
        params: {article: item.id.toString()},
    }))

    //on retourne les diférents chemin créés et le fallback
    return {
        paths,
        fallback: false
    }
}