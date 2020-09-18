import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog about front-end dev." />
      </Head>
      <header className="flex max-w-full bg-indigo-700">
        <Link href="/">
          <a className="text-white text-3xl m-2">Indigo9alpha</a>
        </Link>
        <div className="flex links">
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <Link href="/">
              <a className="text-xl m-2">blog</a>
            </Link>
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <Link href="/about">
              <a className="text-xl m-2">about</a>
            </Link>
          </div>
        </div>
      </header>
      <main className="h-full w-full center-item">{children}</main>
    </div>
  );
}
