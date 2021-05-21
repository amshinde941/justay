import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../components/shared/baseUrl';


export const fetchHostels = () => (dispatch) => {
    dispatch(hostelsLoading(true));

    return fetch(baseUrl + 'hostels')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(hostels => dispatch(addHostels(hostels)))
        .catch(error => dispatch(hostelsFailed(error.message)));

}

export const hostelsLoading = () => ({
    type: ActionTypes.HOSTELS_LOADING
});

export const hostelsFailed = (errmess) => ({
    type: ActionTypes.HOSTELS_FAILED,
    payload: errmess
});

export const addHostels = (hostel) => ({
    type: ActionTypes.ADD_HOSTELS,
    payload: hostel
});


export const postFeedback = (feedback) => (dispatch) => {
    const newFeedback = {
        feedback:feedback
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(feedback.concat(response)))
        .catch(error => {
            console.log('New posted feedback ', error.message);
            alert('Your feedback can not be saved\nError : ' + error.message)
        })
};