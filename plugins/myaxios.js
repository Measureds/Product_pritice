import * as axios from 'axios'
 
let options = {}
// The server-side needs a full url to works
if (process.server) {
	options.baseURL =`https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists`
  //options.baseURL = `http://${process.env.HOST || 'jsonplaceholder.typicode.com/'}:${process.env.PORT || 3000}`
}
 
export default axios.create(options)