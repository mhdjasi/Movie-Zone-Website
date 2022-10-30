import axios from 'axios'


//create method for reusable capacity
const url = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})




export default url