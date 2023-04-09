import { usePosts } from '../context/postContext'
import { VscEmptyWindow } from "react-icons/vsc";

export function HomePage() {
  const { posts } = usePosts()

  if(posts.length === 0) return (
    <div className='flex flex-col justify-center items-center'>
      <VscEmptyWindow className=' text-white' />
      <h1 className='text-white text-2xl'>No posts</h1>
    </div>
  )

	return (
		<div className='text-white'>
			{posts.map((post) => (
				<div key={post._id}>{post.title}</div>
			))}
		</div>
	)
}
