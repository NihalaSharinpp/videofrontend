import { BASE_URL } from "./baseurl";
import { commomRequest } from "./commonrequest";




// Add video


export const addVideo = async (body) => {

    return await commomRequest("POST", `${BASE_URL}/videos`, body)


}

// get video

export const getVideo = async () => {

    return await commomRequest("GET", `${BASE_URL}/videos`, "")

}

// delete

export const deleteVideo = async (id) => {

    return await commomRequest("DELETE", `${BASE_URL}/videos/${id}`, {})

}

// Add Categories

export const addCategory = async (body) => {

    return await commomRequest("POST", `${BASE_URL}/categories`, body)
}


// get all categories

export const getallCategories = async () => {

    return await commomRequest("GET", `${BASE_URL}/categories`, "")

}

// delete category

export const deleteCategory = async (id) => {

return await   commomRequest("DELETE", `${BASE_URL}/categories/${id}`, {})

}



// get history


  export const gethistory=async()=>{

    return await   commomRequest("GET", `${BASE_URL}/watch_history`,"" )


}

// add history


export const Addhistory=async(body)=>{

    return await   commomRequest("POST", `${BASE_URL}/watch_history`, body)
}


// get single card details


export const getVideos = async (id) => {

    return await commomRequest("GET", `${BASE_URL}/videos/${id}`, "")

}

// to update card details in category section

export const updateCategory=async(id,body)=>{
    return await commomRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}