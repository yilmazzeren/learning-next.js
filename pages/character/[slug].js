import Layout from '../../components/layout'
import Head from 'next/head'
import slug from 'slug'

function CharacterDetail({ character }) {
  return (
    <div>
      <Head>
        <title>{character.name} Hakkında Bilgiler</title>
      </Head>
      <Layout/>
      <h1>{character.name}</h1>

      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </div>
  )
}

export async function getStaticPaths() {
  const data = await fetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()

  const paths = characters.results.map(character => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const data = await fetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterDetail