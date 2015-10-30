import path from 'path';
import { validateOptions } from './utils.js';
import { getCurrentWorkingDirPath, readJson, writeJson } from './fileUtils.js';

const githubIndexFilePath = 'data/github-index.json';

export function readGithubIndexFile(){
    return readJson(path.join(getCurrentWorkingDirPath(), githubIndexFilePath));
}

export function writeGithubIndexFile(options){
    return new Promise( (resolve, reject) => {
        try{
            validateOptions(options, 'jsonObj');
            resolve(options.jsonObj);
        } catch(e){
            reject('Error: ' + e.message);
        }
    })
        .then( jsonData => {
            return writeJson(path.join(getCurrentWorkingDirPath(), githubIndexFilePath), jsonData);
        });
}