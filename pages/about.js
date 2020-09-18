import Layout from ".././components/layout";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
        <link rel="stylesheet" href="" />
      </Head>
      <div className="flex justify-center items-center">
        <img src="../static/profile.png" className="rounded-full h-1/5 w-1/5" />
      </div>
      <div className="flex justify-center items-center my-8">
        <h1 className="text-5xl">Rei Tanaka</h1>
      </div>
      <div className="flex justify-center">
        <h2 className="text-3xl">about</h2>
      </div>
      <div className="flex justify-center ">
        <p>フロントエンド勉強中。</p>
        <p>翻訳者（英→日）</p>
      </div>
      <div className="flex justify-center my-4">
        <h2 className="text-3xl">link</h2>
      </div>
      <div className="flex justify-center ">
        <a
          href="https://twitter.com/indigo9alpha"
          target="_blank"
          className="mx-4 text-blue-500"
        >
          Twitter
        </a>
        <a
          href="https://github.com/indigo9alpha"
          target="_blank"
          className="text-blue-500"
        >
          GitHub
        </a>
      </div>
    </Layout>
  );
}
