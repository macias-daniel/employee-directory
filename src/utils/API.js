import axios from "axios"
const BASEURL = "https://randomuser.me/api/"
const EMPLOYEE_AMOUNT = "?results=10"

export default {
  getEmployees: function () {
    return axios.get(BASEURL + EMPLOYEE_AMOUNT)
  }
}