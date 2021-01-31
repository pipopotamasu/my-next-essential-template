import Head from 'next/head'
import { useRouter } from 'next/router';

export default function ListItem() {
  const router = useRouter()
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Sample List Item {id}</title>
      </Head>
      <p>
        This is dummy item {id}.
      </p>
    </>
  )
}
