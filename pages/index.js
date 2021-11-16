import Head from 'next/head'
import HomeCards from '../components/HomeCards/HomeCards'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>le blog de steph</title>
        <meta name="description" content="créé par stéphane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className={styles.title}>Bienvenue sur Code.io</h1>
        <p>Le blog communautaire des fans du développement web</p>
        <div className="container">
          <div className="row gx-5">
            <HomeCards 
              title="Lisez les articles"
              subTitle="Maximisez votre culture web"
              text="Chaque auteur tente de vous apporter le plus de valeur possible par article."
            >
              <Link href="/blog">
                <a>Visite le blog</a>
              </Link>
            </HomeCards>

            <HomeCards 
              title="Faites un tour vers la liste de membres"
              subTitle="Faites-vous des amis"
              text="Ajouter, invitez et discutez avec les membres."
            >
              <Link href="/liste">
                <a>Découvre la liste des membres</a>
              </Link>
            </HomeCards>
          </div>
        </div>
      </div>


    </>
  )
}
