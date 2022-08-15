import {useMutation, useQueryClient} from 'react-query'
import { deletePost } from '../api'
import {ThreeDots} from 'react-loader-spinner'

const Post = ({data}) => {
    const queryClient = useQueryClient()
    const {mutateAsync, isLoading} = useMutation(deletePost) //delete data from server
    const deletePostById = async () => {
       await mutateAsync(data.id)
        queryClient.invalidateQueries('posts') // invalidate cache and fetch new data
    }
    return (
        <div key={data.title + 'dfdf'} className="p-6 mb-3 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </a>
        <a href={`/update-post/${data.id}`} className="inline-flex items-center text-blue-600 hover:underline">
            Edit
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
        <button onClick={() => deletePostById(data.id)} className="inline-flex items-center text-blue-600 hover:underline">
            {isLoading ? <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />: 'Remove'}
        </button>
                         </div>
    )
}

export default Post