
import axios from 'axios'
import {FETCH_STORIES_SUCCESS} from './actionTypes'

export function fetchStories() {





//   return dispatch => {
//     try {
//       axios.get('/api/tasks', {
//         headers: { 'Content-Type': 'application/json' }
//     }).then(res => {
//         return res.data
//     })
//     dispatch(fetchStoriesSuccess(items))
//     } catch(e){
//       console.log(e)
//     }
   
// }




  return axios
        .get('/api/tasks', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        }).then(data => {
          console.log("items")
         // console.log(items)
          this.setState(
              {
                  title: '',
                  description: '',
                  items: [...data]
              }
              // ,
              // () => {
                  // console.log(this.props.items)
              // }
          )
      }, )
}

export function fetchStoriesSuccess(items) {
  return {
    type: FETCH_STORIES_SUCCESS,
    items
  }
}

