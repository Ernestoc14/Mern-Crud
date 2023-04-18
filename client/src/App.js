import { PostProvider } from './context/postContext'
import { HomePage, PostForm, NotFoundPage } from './pages'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export default function App() {
	return (
		<div className='bg-neutral-900 min-h-screen flex items-center'>
			<div className='m-auto '>
				<PostProvider>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/new' element={<PostForm />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
					<Toaster />
				</PostProvider>
			</div>
		</div>
	)
}
