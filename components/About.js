import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <Head>
        <title>Hakkımda</title>
      </Head>
      <h1>About</h1>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
    </div>
  );
}
