import React from 'react'
import Head from 'next/head'
import HomeCards from '../../components/HomeCards/HomeCards'
import Link from 'next/link'


export default function liste(props) {
    return (
        <>
            <Head>
                <title>membre</title>
                <meta name="description" content="un de nos membres ayant écrit un article" />
            </Head>
            <HomeCards 
              title="Faites un tour vers la liste de membres"
              subTitle="Faites-vous des amis"
              text="Ajouter, invitez et discutez avec les membres."
            >
                <Link href="/liste">
                    <a>Découvre la liste des membres</a>
                </Link>
                <tbody>
                    {props.listeEnCours.map(element => (
                    <tr key={uuidv4()}>
                        <td>{element.en}</td>
                        <td>{element.fr}</td>
                    </tr>
                    ))}
                </tbody>
            </HomeCards>
        </>
    )
}

/* export async function getStaticProps(context){
    /* const res = context.params.liste; */
    const data = await import(`https://jsonplaceholder.typicode.com/users`);
    console.log(data);
 */

    
    /* const listeEnCours = data.find(list => list.username === res)

    return {
        props: {
            listeEnCours: listeEnCours.data
        }
    } */
}

/* export async function getStaticPaths() {
    const data = await import(`https://jsonplaceholder.typicode.com/users`)

    //on map sur le tableau de données pour récupérer les names
    const paths = data.map(item => ({
        params: {liste: item.username}
    }))

    return {
        //on utilise les nomsqu'on a récupéré dans le map de la constante paths du dessus
        paths,

        fallback: false     // veut dire que si on a un chemin non définit ici dans path/params, on aura une page 404
                            //si on met blocking au lieu de false tout se fera coté serveur (très peu utilisé car lent)
    } 
}   */