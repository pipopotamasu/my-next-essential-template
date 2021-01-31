import Head from 'next/head'
import Link from 'next/link'

const ITEMS = [
  { id: 1, name: 'dummy item 1' },
  { id: 2, name: 'dummy item 2' },
  { id: 3, name: 'dummy item 3' }
]

export default function List() {
  return (
    <>
      <Head>
        <title>Sample List</title>
      </Head>
      <div>
        <ul>
          {
            ITEMS.map(({id, name}) => (
              <Link key={id} href={`/list/${id}`}>
                <a>
                  <li>{name}</li>
                </a>
              </Link>
            ))
          }
        </ul>
      </div>
    </>
  )
}
