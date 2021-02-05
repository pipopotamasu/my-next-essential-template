import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next Essential Template</title>
      </Head>
      <main>
        <List>
          <li>
            <Link href="/list">
              <a>Test List</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </List>
      </main>
    </>
  );
}
