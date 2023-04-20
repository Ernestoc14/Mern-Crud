import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { usePosts } from '../context/postContext';
import { useNavigate } from 'react-router-dom';

export function PostForm() {
    const { createPost } = usePosts()
    const navigate = useNavigate()
    return (
        <div>
            <Formik 
                initialValues={{
                    title: '',
                    description: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required('The title is Required'),
                    description: Yup.string().required('The description is Required')
                })}
                onSubmit={ async (values, actions) => {
                    await createPost(values)
                    navigate('/')
                }}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <h1 className='text-white text-4xl mb-8 justify-center flex'>Creating a New Post</h1>
                        <Field name='title' placeholder='title' 
                            className='px-3 py-2 focus:outline-none rounded bg-gray-700 text-white w-full'
                        />
                        <ErrorMessage component='p' className='text-red-100 text-sm' name='title' />
                        
                        <Field name='description' placeholder='description' 
                            className='px-3 py-2 focus:outline-none rounded bg-gray-700 text-white w-full mt-5'
                        />
                        <ErrorMessage component='p' className='text-red-100 text-sm' name='description'/>
                        
                        <button type='submit'className='bg-green-600 px-2 mt-7 rounded-md text-lg'>Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}