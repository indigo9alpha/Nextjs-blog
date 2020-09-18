import Layout from "../../components/layout";
import Link from "next/link";
import Head from "next/head";

const BlogId = ({ blog }) => {
  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="w-2/3 center-item relative">
        <div className="text-center">
          <h1 className="text-4xl my-24">{blog.title}</h1>
        </div>
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        ></div>
        <br />
        <div>
          <Link href="/">
            <a className="bottom-0 right-0 absolute text-blue-600 text-xl">
              BACK
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(
    "https://indigo9alpha.microcms.io/api/v1/blogs/",
    key
  );
  const repos = await res.json();

  const paths = await repos.contents.map((repo) => `/blogs/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(
    `https://indigo9alpha.microcms.io/api/v1/blogs/${id}`,
    key
  );
  const blog = await res.json();

  return {
    props: {
      blog: blog,
    },
  };
};

export default BlogId;
