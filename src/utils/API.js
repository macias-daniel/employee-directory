import axios from "axios"


const BASE_URL = "https://rickandmortyapi.com/api/character/?species=human&page="


export default {
  getEmployees: function (pageNum) {
    //AXIOS CALLS ARE PROMISE
    return axios.get(BASE_URL + pageNum)
  }
}