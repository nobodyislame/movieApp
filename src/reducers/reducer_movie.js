import { FETCH_MOVIE } from '../actions/index';

export default(state=null, action) =>{
  switch(action.type){
    case FETCH_MOVIE:{
      return action.payload.data
    }
  }
  return state;
}
