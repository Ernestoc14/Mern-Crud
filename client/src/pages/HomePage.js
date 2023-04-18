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

      <Link to="/new">Create New Post</Link>
      
			<div className='grid grid-cols-3 gap-4'>
      {posts.map((post) => (
				<PostCard post={post} key={post.id}/>
			))}
      </div>
		</div>
	)
}
