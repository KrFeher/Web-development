import {
  GET_ALL_OPINION_SUCCESS,
  ADD_OPINIONS_SUCCESS,
  DELETE_OPINION_SUCCESS,
  UPDATE_OPINION_SUCCESS,
} from './constants.js';

const baseUrl = 'http://localhost:3001/retro/improvements';

export const getAllOpinionSuccess = (data) => ({
  type: GET_ALL_OPINION_SUCCESS,
  payload: data,
})

export const getAllOpinion = () => {
  return (dispatch) => {
    return fetch(`${baseUrl}?sortby=fullname`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(getAllOpinionSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

export const addOpinionsSuccess = (opinion) => ({
  type: ADD_OPINIONS_SUCCESS,
  payload: opinion,
})

export const addOpinions = (opinions) => {
  debugger;
  return (dispatch) => {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(opinions),
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(addOpinionsSuccess(data));
      })
      .catch(err => console.log(err));
  };
}

export const updateOpinionSuccess = (opinion) => ({
  type: UPDATE_OPINION_SUCCESS,
  payload: opinion,
})

export const updateOpinion = (opinion) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/${opinion.id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(opinion),
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(updateOpinionSuccess(data));
      })
      .catch(err => console.log(err));
  };
}

export const deleteOpinionSuccess = (id) => ({
  type: DELETE_OPINION_SUCCESS,
  payload: id,
})

export const deleteOpinion = (id) => {
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
        dispatch(deleteOpinionSuccess(id));
      })
      .catch(err => console.log(err));
  };
}