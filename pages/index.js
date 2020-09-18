import Head from "next/head";
import Layout from "../components/layout";
import BlogCard from "../components/BlogCard";


const Home = ({blogs}) => {
  return (
    <Layout>
      <Head>
        <title>indigo9alpha</title>
      </Head>
      <h2 className="my-5 text-5xl text-center">posts</h2>
      {blogs.map(blog => (
        <BlogCard title={blog.title} date={blog.createdAt} id={blog.id} key={blog.id} />
      ))}
    </Layout>
  );
};


export const getStaticProps = async () => {

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(
    "https://indigo9alpha.microcms.io/api/v1/blogs/",
    key
  );
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
