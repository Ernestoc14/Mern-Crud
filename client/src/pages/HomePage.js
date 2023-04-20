import { usePosts } from '../context/postContext'
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import { PostCard } from '../components/PostCard';

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
      <h1 className='text-4xl mb-8 justify-center flex'>Posts</h1>
      <div className='grid place-content-center'>
        <Link to="/new" className='bg-teal-500 text-black p-3 rounded-md mb-8'>Create New Post</Link>
      </div>
			<div className='grid grid-cols-3 gap-2'>
      {posts.map((post) => (
				<PostCard post={post} key={post.id}/>
			))}
      </div>
		</div>
	)
}
