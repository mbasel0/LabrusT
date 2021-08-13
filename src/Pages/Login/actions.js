import {  LOGIN , SET_USER } from "./constants";

export function login(values,setErrorStatus) {
  return {
    type: LOGIN,
    values,
    setErrorStatus,
    
  }
}

export function setUser(values){
  return{
    type:SET_USER,
    values,
  }
}

