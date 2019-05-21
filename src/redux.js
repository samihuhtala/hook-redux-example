import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const SWIPE_RIGHT = 'SWIPE_RIGHT';
const FETCH_SUCCES = 'FETCH_SUCCESS';
const SWIPE_LEFT = 'SWIPE_LEFT';
const FETCH_START = 'FETCH_START';


export const fetchRandomUser = () => (dispatch) => {
    dispatch({type: FETCH_START});
  
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((randomUser) => {
          dispatch({type: FETCH_SUCCES, payload: randomUser.results[0]})
          console.log('data fetched', randomUser);
      })
      .catch((error) => console.error(error));
  }

export const swipeRight = () => ({
    type: SWIPE_RIGHT
})
export const swipeLeft = () => ({
    type:SWIPE_LEFT
})

const reducer = (state, action) => {
    switch(action.type) {
        case SWIPE_RIGHT:
            return {...state, swipeStatus: 'RIGHT'};
        case SWIPE_LEFT:
            return {...state, swipeStatus: 'LEFT'};
        case FETCH_START:
            return {...state, loading: true}
        case FETCH_SUCCES:
            return {...state, swipeStatus: 'CENTER', loading: false, response: action.payload}
        default:
            return state;
    }  
}

// Create redux store.
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export default createStore(
    reducer, 
    {loading: false, response: null, swipeStatus: 'INITIAL'}, 
    composeEnhancers(applyMiddleware(thunk)));