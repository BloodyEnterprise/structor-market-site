import 'isomorphic-fetch';

export default function invokeServer(serverMethodName, options = {}) {
    //console.log('Invoke server method name: ' + serverMethodName);
    return fetch('/api/invoke', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
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
            return response.json();
        })
        .then( jsonData => {
            //console.log('Received jsonData: ' + JSON.stringify(jsonData, null, 4));
            if(jsonData.error === true){
                //console.error('['+ method +'] Received error: ' + JSON.stringify(data.errors));
                throw Error(jsonData.errorText);
            } else {
                return jsonData;
            }
        });

}
