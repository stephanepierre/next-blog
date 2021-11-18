import React from 'react'
import Head from 'next/head'
import HomeCards from '../../components/HomeCards/HomeCards'


export default function liste(props) {
    return (
        <>
            <Head>
                <title>membre {props.listeEnCours.username}</title>
                <meta name="description" content={`Notre membre ${props.listeEnCours.username}`} />
            </Head>
            <div className="row justify-content-center mt-5">
                <h2 className="text-center">Nom du membre: {props.listeEnCours.username}</h2>
                <HomeCards 
                title={props.listeEnCours.name}
                subTitle={`Username: ${props.listeEnCours.username}`}
                >
                    <ul className="list-group">
                        <li className="list-group-item">
                            Email: {props.listeEnCours.email}
                        </li>
                        <li className="list-group-item">
                            Site web: {props.listeEnCours.website}
                        </li>
                        <li className="list-group-item">
                            Téléphone: {props.listeEnCours.phone}
                        </li>
                    </ul>

                </HomeCards>
            </div>
        </>
    )
}

export async function getStaticProps(context){
    const id = context.params.liste; 
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    const listeEnCours = await data.json();

    return {
        props: {
            listeEnCours
        }
    } 
}

export async function getStaticPaths() {

    //on indique où récupérer les données
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await data.json();

    //on fourni un tableau avec tous les chemins
    const paths = users.map(item => ({
        params: {liste: item.id.toString()},
    }))

    //on retourne les diférents chemin créés et le fallback
    return {
        paths,
        fallback: false
    }
}

