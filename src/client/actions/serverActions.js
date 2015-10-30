import 'isomorphic-fetch';

const urlContext = '/rbs';

function transferDataToAction(type, query = null, options = null, data = null){
    return {
        type: type,
        payload: { query: query, options: options, data: data }
    }
}

export function getJSON(query, options, transferActionsBefore = [], transferActionsSuccess = [], transferActionsFailure = []){
    //console.log('GET Query: ' + query);
    return dispatch => {

        transferActionsBefore.forEach( actionType => {
            dispatch(transferDataToAction(actionType, query, options));
        });

        fetch(urlContext + query, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then( response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            })
            .then( response => {
                return response.json();
            })
            .then( data => {
                //console.log('request succeeded with JSON response');
                //console.log(JSON.stringify(data, null, 4));
                if(data.error === true){
                    transferActionsFailure.forEach( actionType => {
                        dispatch(transferDataToAction(actionType, query, options, JSON.stringify(data.errors, null, 4)));
                    });
                } else {
                    transferActionsSuccess.forEach( actionType => {
                        dispatch(transferDataToAction(actionType, query, options, data));
                    });
                }
            }).catch( error => {
                //console.log('request failed', error);
                transferActionsFailure.forEach( actionType => {
                    dispatch(transferDataToAction(actionType, query, options, error));
                });
            })

    }
}

export function getFile(query, options, transferActionsBefore = [], transferActionsSuccess = [], transferActionsFailure = []){
    //console.log('GET File Query: ' + query);
    return dispatch => {

        transferActionsBefore.forEach( actionType => {
            dispatch(transferDataToAction(actionType, query, options));
        });

        fetch(urlContext + query, {
            method: 'get'
        })
            .then( response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            })
            .then( response => {
                return response.text();
            })
            .then( data => {
                //console.log('request succeeded with File response');
                transferActionsSuccess.forEach( actionType => {
                    dispatch(transferDataToAction(actionType, query, options, data));
                });
            }).catch( error => {
                //console.log('request failed', error);
                transferActionsFailure.forEach( actionType => {
                    dispatch(transferDataToAction(actionType, query, options, error));
                });
            })

    }
}
