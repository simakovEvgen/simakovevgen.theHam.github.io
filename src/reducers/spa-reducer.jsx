const initialState = {
    news: []
};

const spaReducer = (state = initialState, action) => {

    // обработка actions
    switch(action.type) {

        case 'GET_NEWS': {
            console.log(action.payload)
            return action.payload;
            break;
        }

        case 'FETCH_USERS_START': {
            return {
                ...state,
                fetching: true,
                news: []
            };
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, news: []};
            break;
        }
        case 'RECEIVE_USERS': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                news: action.payload
            }
            break;
        }

        default: {
            return state;
        }
    }
};

export default spaReducer;