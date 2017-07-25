export const requestUsers = (state) => {
    return {
        type: 'FETCH_USERS_START',
        payload: 'loading...'
    }
};

export const fetchError = (state) => {
    return {
        type: 'FETCH_USERS_ERROR',
        payload: 'error'
    }
};

export const receiveUsers = (news) => {
    return {
        type: 'RECEIVE_USERS',
        payload: news
    }
};

export function fetchUsers() {
    return function(dispatch) {
        dispatch(requestUsers());

        // Отправка promise
        return fetch('src/data/data.json')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveUsers(json))
            )
    }
}