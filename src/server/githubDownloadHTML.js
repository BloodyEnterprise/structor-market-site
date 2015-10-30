import request from 'request';
import { validateOptions, getFromCache, putIntoCache } from './utils.js';

let cache = {};

export default function githubDownloadHTML(options) {
    return new Promise( (resolve, reject) => {
        try {
            validateOptions(options, 'query');

            const url = options.query;
            const cacheValue = getFromCache(cache, url);
            if(!cacheValue){
                //console.log('Cache value is absent for url: ' + url);
                let requestOptions = {
                    uri: url,
                    method: 'GET',
                    strictSSL: false,
                    headers: {
                        'Accept': 'application/vnd.github.VERSION.html',
                        'User-Agent': 'request'
                    },
                    encoding: null
                };
                request(
                    requestOptions,
                    (error, response, body) => {
                        if (response) {
                            if (response.statusCode !== 200) {
                                if (response.statusCode === 401) {
                                    reject('User is not authenticated');
                                } else {
                                    reject('Got error code ' + response.statusCode + ' processing request to ' + url);
                                }
                            } else if (error) {
                                reject('Error connection to ' + url);
                            } else {
                                putIntoCache(cache, url, body);
                                resolve(body);
                            }
                        } else {
                            reject('Error connection to ' + url);
                        }
                    }
                )
            } else {
                //console.log('Cache value was found for url: ' + url);
                resolve(cacheValue);
            }

        } catch (e) {
            reject('Error: ' + e.message);
        }
    });
}