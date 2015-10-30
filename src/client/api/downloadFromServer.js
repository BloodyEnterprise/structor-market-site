import 'isomorphic-fetch';

export default function downloadFromServer(serverMethodName, options = {}) {
    //console.log('Invoke server method name: ' + serverMethodName);
    options.isAuth = true;
    return fetch('/api/invoke', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            methodName: serverMethodName,
            options: options
        })
    })
        .then( response => {
            //console.log('Received response: ' + response);
            //console.log('Received response: ' + response.status);
            //console.log('Received response: ' + response.statusText);
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
        });

}
