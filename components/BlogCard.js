import Link from 'next/link'

const BlogCard = ({title, date,id}) => {
  return (
    <div className="h-56 w-2/3 bg-indigo-700 border-double border-4 border-black my-10 center-item relative">
      <Link href="/blogs/[id]" as={`blogs/${id}`}>
        <a>
      <h2 className="text-4xl text-white break-words my-5">{title}</h2>
        </a>
      </Link>
      <p className="text-xl bottom-0 text-white absolute">{date}</p>
    </div>
  );
}

export default BlogCard