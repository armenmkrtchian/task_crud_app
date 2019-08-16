import {FETCH_STORIES_SUCCESS} from '../actions/actionTypes';
const initialState = {
    id: '',
    title: '',
    description: '',
    editDisabled: false,
    items: []
}



export default function storyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      return {
        ...state, items: action.items
      }
    default:
      return state
  }
}