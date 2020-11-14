
import Head from 'next/head'
import Link from 'next/link'
import slug from 'slug'
import Layout from '../components/layout'

function HomePage({ characters }) {
  return (
    <div>
      
      <Head>
        <title>Ana sayfa</title>
      </Head>
      <Layout/>
      <h1 className="title">THE RICK AND MORTY</h1>

      <ul>
        {characters.results.map(character => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
</div>
    
  )
}

export async function getStaticProps() {
  const data = await fetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

export default HomePage