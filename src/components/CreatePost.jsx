import { ThreeDots } from 'react-loader-spinner'
// import { getAllPosts } from '../api'
import { useState } from 'react'
import { createPost } from '../api'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const {mutateAsync, isLoading} = useMutation(createPost)
  
const navigate = useNavigate()
    const [values, setValues] = useState({
        title: '',
        date: '',
        reminder: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prevValue) => ({ ...prevValue, [name]: value }));
    }
    const handleCheck = (e) => {
        const {name, checked} = e.target;
        setValues((prevValue) => ({ ...prevValue, [name]: checked }));
    }

    const submitForm = async (e) => {
        e.preventDefault() 
        await mutateAsync(values) // post data to server
        navigate('/')
    }
    
    return (
        <div className="mx-auto  mt-60 max-w-lg">
           
<form onSubmit={submitForm}>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Text</label>
    <input onChange={handleChange} name="title" value={values.title} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter title" required=""/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
    <input onChange={handleChange} name="date" value={values.date} type="date" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" onChange={handleCheck}  name="reminder" value={values.reminder} type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remind me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {isLoading ? <ThreeDots 
height="35" 
width="35" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />: 'Submit' } 
  </button>
</form>

    </div>
    )
}

export default CreatePost