import axios from "~/axios"

export const login=(username,password)=>{
    // return axios({url:'',method:'',data})
    return axios.post("/http://shopapi.2yueclound.com",{username,password})
}