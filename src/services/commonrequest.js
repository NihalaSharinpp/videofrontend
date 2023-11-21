import axios from "axios";

// function definition commomrequest

 export const commomRequest=async(method,url,body)=>{

// request configuration

    let reqConfig={

        url,
        method,
        data:body,
        headers:{
            "content-type":"application/json"

            // multipart form data
        }


    }

    // api call using axios library

    return  await axios(reqConfig).then((response)=>{
            return response


    }).catch((err)=>{
        return err
    })

}