import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { usePosts } from '../context/postContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function PostForm() {

    const { createPost, getPost, updatePost } = usePosts()

    const navigate = useNavigate()

    const params = useParams()

    const [post, setPost] = useState({
        title: '',
        description: '',
        // image: null
    })
    
    useEffect(() => {
        (async() => {
            if(params.id) {
                const post = await getPost(params.id)
                setPost(post)
            }
        })()
    }, [params.id])

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
                    if(params.id) {
                        await updatePost(params.id, values)
                    }
                    else {
                        await createPost(values)
                    }

                    actions.setSubmitting(false)
                    navigate('/')
                }}
                enableReinitialize
            >
                {({ handleSubmit, setFieldValue, isSubmitting}) => (
                    <Form onSubmit={handleSubmit}>
                        <h1 className='text-white text-4xl mb-8 justify-center flex'>Creating a New Post</h1>
                        <label 
                            htmlFor= 'title' 
                            className='text-sm block font-bold text-gray-400'
                        >
                            Title
                        </label>

                        <ErrorMessage component='p' className='text-red-400 text-sm' name='title' />

                        <Field name='title' placeholder='title' 
                            className='px-3 py-2 focus:outline-none rounded bg-gray-700 text-white w-full mb-7'
                        />
                        
                        <label 
                            htmlFor= 'description' 
                            className='text-sm block font-bold text-gray-400'
                        >
                            Description
                        </label>

                        <ErrorMessage component='p' className='text-red-400 text-sm' name='description'/>

                        <Field 
                            component='textarea'
                            name='description' placeholder='description' 
                            className='px-3 py-2 focus:outline-none rounded bg-gray-700 text-white w-full mb-7'
                        />
                        
                        <label 
                            htmlFor= 'image' 
                            className='text-sm block font-bold text-gray-400'
                        >
                            Image
                        </label>

                        <input type='file' name='image' className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-7'
                            onChange={(e) => setFieldValue('image', e.target.files[0])}
                        />

                        <button type='submit' className='bg-teal-500 px-2 py-1 rounded-md text-lg' 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <AiOutlineLoading3Quarters className='animate-spin w-7 h-7'/>
                            ) : 'Save'}
                        </button>
                        <Link to="/" className='bg-teal-500 px-2 py-1.5 rounded-md text-lg ml-10'>See All Posts</Link>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
    )
}