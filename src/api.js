export const getAllPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/posts`);
    const data = await response.json();

   
    return data
}

export const getSinglePosts = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/posts/${id}`);
    const data = await response.json();

   
    return data
}

export const createPost = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(response.json().message)
    }
    return response.json()
}
export const updatePost = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/posts/${id}`, {
        method: 'PUT'
    });
    if (!response.ok) {
        throw new Error(response.json().message)
    }
    return response.json()

}
export const deletePost = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/posts/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(response.json().message)
    }
    return true

}