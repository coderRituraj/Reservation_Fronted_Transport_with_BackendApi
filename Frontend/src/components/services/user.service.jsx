import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post('http://localhost:8097/api/auth/signup',user)
    .then((response) => response.data);
};

export const bookTicket = (ticket) =>{
  return myAxios
  .post('http://localhost:8091/orders/bookTicket', ticket)
  .then((response) => response.data);
}

export const loginUser=(loginDetail)=>{
  return myAxios.post('http://localhost:8097/api/auth/signin',loginDetail).then((response)=>response.data)
}

export const getUser = (userId) => {
  return myAxios.get(`/users/${userId}`).then(response => response.data)
}

export const updateUser = (userId) => {
  return myAxios.put(`/users/${userId}`).then(response => response.data)
}
export const getTrain = async (from,to,date)=>{
  return await myAxios.get(`http://localhost:8090/search/${from}/${to}/${date}`).then((response)=>(response.data))

}