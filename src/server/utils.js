import _ from 'lodash';

export function validateOptions(options, props){
    let notFound = [];
    if(_.isArray(props)){
        props.forEach( item => {
            if( _.isUndefined(options[item]) || _.isNull(options[item])){
                notFound.push(item);
            }
        });
    } else if(_.isString(props)){
        if( _.isUndefined(options[props]) || _.isNull(options[props]) ){
            notFound.push(props);
        }
    }
    if(notFound.length === 1){
        throw Error('Option is not available or null: ' + _(notFound).toString());
    } else if(notFound.length > 1) {
        throw Error('Options is not available or null: ' + _(notFound).toString());
    }
}

export function hashString(str){
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
    }
    return hash;
}

export function getFromCache(cache, str, timestampDelta = 3600000){
    let result = undefined;
    if(cache && _.isObject(cache)){
        const hashKey = hashString(str);
        const cacheEntry = cache[hashKey];
        if(cacheEntry && cacheEntry.timestamp){
            const currentTimestamp = new Date().getTime();
            if((currentTimestamp - cacheEntry.timestamp) <= timestampDelta ){
                result = cacheEntry.value;
            }
        }
    }
    return result;
}

export function putIntoCache(cache, str, value){
    if(cache && _.isObject(cache)){
        const hashKey = hashString(str);
        const currentTimestamp = new Date().getTime();
        cache[hashKey] = {
            timestamp: currentTimestamp,
            value: value
        };
    }
}
