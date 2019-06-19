import {
  GET_ALL_PEOPLE_SUCCESS,
  ADD_PERSON_SUCCESS,
  DELETE_PERSON_SUCCESS,
  GET_HIDDEN_PEOPLE_SUCCESS,
  TOGGLE_PERSON_VISIBILITY_SUCCESS,
  UPDATE_PERSON_SUCCESS,
} from './constants.js';

const initialState = {
  people: [],
  hiddenPeople: [],
}

const peopleReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload
      }

    case ADD_PERSON_SUCCESS:
      return {
        ...state,
        people: [...state.people, action.payload]
      };

    case DELETE_PERSON_SUCCESS:
      return {
        ...state,
        people: state.people.filter(value => value.id !== action.payload)
      }

    case GET_HIDDEN_PEOPLE_SUCCESS:
      return {
        ...state,
        hiddenPeople: action.payload
      }

    case TOGGLE_PERSON_VISIBILITY_SUCCESS:
      return {
        ...state,
        hiddenPeople: action.payload
      }

    case UPDATE_PERSON_SUCCESS : {
      const newPeople = [...state.people]
      let person = newPeople.find(person => person.id === action.payload.id);
      person = action.payload;

      return {
        ...state,
        people: newPeople
      };
    }

    default:
      return state;
  }
}

export default peopleReducers;