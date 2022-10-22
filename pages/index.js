import Link from 'next/link';
import React from 'react';
import { Layout } from '../layout';

export default function Home() {
  return (
    <Layout title="Home Page">
      <Link href="/login">
        <a className="form__regester">login</a>
      </Link>
    </Layout>
  );
}
