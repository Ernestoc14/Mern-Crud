import { HomePage, PostForm, NotFoundPage } from './pages'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<div className='bg-neutral-900 min-h-screen flex items-center'>
			<div className='m-auto'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/new' element={<PostForm />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</div>
	)
}
