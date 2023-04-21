import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { usePosts } from '../context/postContext';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState} from 'react';

export function PostForm() {

    const { createPost, getPost} = usePosts()

    const navigate = useNavigate()

    const params = useParams()

    const [post, setPost] = useState({
        title: '',
        description: ''
    })
    
    useEffect(() => {
        (async () =>{
            if(params.id) {
                const post = await getPost(params.id)
                setPost(post)
            }
        })()
    }, [])

    return (
        <div className='flex items-center justify-center'>
            <div className='bg-zinc-800 p-10 shadow-md shadow-black'>
            <Formik 
                initialValues={post}
                validationSchema={Yup.object({
                    title: Yup.string().required('The title is Required'),
                    description: Yup.string().required('The description is Required')
                })}
                onSubmit={ async (values, actions) => {
                    await createPost(values)
                    navigate('/')
                }}
                enableReinitialize = {true}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <h1 className='text-white text-4xl mb-8 justify-center flex'>Creating a New Post</h1>
                        <lable 
                            htmlFor= 'title' 
                            className='text-sm block font-bold text-gray-400'
                        >
                            Title
                        </lable>
                        <Field name='title' placeholder='title' 
                            className='px-3 py-2 focus:outline-none rounded bg-gray-700 text-white w-full mb-7'
                        />
                        <ErrorMessage component='p' className='text-red-100 text-sm' name='title' />
                        
                        <lable 
                            htmlFor= 'description' 
                            className='text-sm block font-bold text-gray-400'
                        >
                            Description
                        </lable>
                        <Field 
                            component='textarea'
                            name='description' placeholder='description' 
                            className='px-3 py-2 focus:outline-none rounded bg-gray-700 text-white w-full '
                        />
                        <ErrorMessage component='p' className='text-red-100 text-sm' name='description'/>
                        
                        <button type='submit'className='bg-teal-500 px-2 py-1 mt-7 rounded-md text-lg'>Save</button>
                        <Link to="/" className='bg-teal-500 px-2 py-1.5 rounded-md text-lg ml-10'>See All Posts</Link>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
    )
}