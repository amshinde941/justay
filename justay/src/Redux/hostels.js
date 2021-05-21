import * as ActionTypes from './ActionTypes';

export const Hostels = ( state = {
         isLoading:true,
         errmess:null,
         hostels:[]
    } , action ) => {
    switch (action.type) {
        case ActionTypes.ADD_HOSTELS:
            return {...state, isLoading: false, errmess: null, hostels: action.payload}

        case ActionTypes.HOSTELS_LOADING:
            return {...state, isLoading: true, errmess: null, hostels: []}

        case ActionTypes.HOSTELS_FAILED:
            return {...state, isLoading: false, errmess: action.payload, hostels: []}

        default:
            return state;
    }
}