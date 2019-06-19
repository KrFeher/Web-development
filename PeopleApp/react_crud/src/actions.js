import {
  GET_ALL_PEOPLE_SUCCESS,
  ADD_PERSON_SUCCESS,
  DELETE_PERSON_SUCCESS,
  GET_HIDDEN_PEOPLE_SUCCESS,
  TOGGLE_PERSON_VISIBILITY_SUCCESS,
  UPDATE_PERSON_SUCCESS,
} from './constants.js';

const baseUrl = 'http://localhost:3001/app/people';

export const getAllPeopleSuccess = (data) => ({
  type: GET_ALL_PEOPLE_SUCCESS,
  payload: data,
})

export const getAllPeople = () => {
  return (dispatch) => {
    return fetch(`${baseUrl}?sortby=fullname`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(getAllPeopleSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const addPersonSuccess = (person) => ({
  type: ADD_PERSON_SUCCESS,
  payload: person,
})

export const addPerson = (person) => {
  return (dispatch) => {
    return fetch(baseUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(addPersonSuccess(data));
      })
      .catch(err => console.log(err));
  };
}

export const updatePersonSuccess = (person) => ({
  type: UPDATE_PERSON_SUCCESS,
  payload: person,
})

export const updatePerson = (person) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/${person.id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(updatePersonSuccess(data));
      })
      .catch(err => console.log(err));
  };
}

export const deletePersonSuccess = (id) => ({
  type: DELETE_PERSON_SUCCESS,
  payload: id,
})

export const deletePerson = (id) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        return data.json();
      })
      .then(id => {
        dispatch(deletePersonSuccess(id));
      })
      .catch(err => console.log(err));
  };
}

export const getHiddenPeopleSuccess = (data) => ({
  type: GET_HIDDEN_PEOPLE_SUCCESS,
  payload: data,
})

export const getHiddenPeople = () => {
  return (dispatch) => {
    return fetch(`${baseUrl}/hidden`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(getHiddenPeopleSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const togglePersonVisibilitySuccess = (person) => ({
  type: TOGGLE_PERSON_VISIBILITY_SUCCESS,
  payload: person,
})

export const togglePersonVisibility = (id) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/toggleHide/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        return data.json();
      })
      .then(person => {
        dispatch(togglePersonVisibilitySuccess(person));
      })
      .catch(err => console.log(err));
  };
}