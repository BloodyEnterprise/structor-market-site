const initialState = {
    github: {
        apiEndpoints: {
            fetching: {
                status: 'done',
                errorText: '',
                error: false
            },
            urls: {}
        },
        addRepoForm: {
            fetching: {
                status: 'done',
                errorText: '',
                error: false
            }
        },
        indexFile: {
            fetching: {
                status: 'done',
                errorText: '',
                error: false
            },
            data: {
                list:[]
            }
        },
        projects: {
        },
        modalScreenshot: {
            show: false,
            screenshotUrl: null
        },
        readmeFile: {
            fetching: {
                status: 'done',
                errorText: '',
                error: false
            },
            content: null,
            projectFullName: null
        }
    }
};

export default initialState;
