
const serverUrl = 'https://api.tiledesk.com/v1/';
export const environment = {
    production: true,
    t2y12PruGU9wUtEGzBJfolMIgK: 'uTdBCRvGAEhJ01cT3uBLg8oFJx',
    VERSION: require('../../package.json').version,
    widgetUrl: 'https://widget.tiledesk.com/v3/launch.js',
    remoteConfig: false, // for performance don't load settings from remote
    firebase: {
        apiKey: 'CHANGEIT',
        authDomain: 'CHANGEIT',
        databaseURL: 'CHANGEIT',
        projectId: 'CHANGEIT',
        storageBucket: 'CHANGEIT',
        messagingSenderId: 'CHANGEIT',
        chat21ApiUrl: 'CHANGEIT'
    },
    mongoDbConfig: {
        BASE_URL: `${serverUrl}`,
        PROJECTS_BASE_URL: `${serverUrl}projects/`,
        SIGNUP_BASE_URL: `${serverUrl}auth/signup`,
        SIGNIN_BASE_URL: `${serverUrl}auth/signin`,
        FIREBASE_SIGNIN_BASE_URL: `${serverUrl}firebase/auth/signin`,
        VERIFY_EMAIL_BASE_URL: `${serverUrl}auth/verifyemail/`,
        REQUEST_RESET_PSW: `${serverUrl}auth/requestresetpsw`,
        RESET_PSW: `${serverUrl}auth/resetpsw/`,
        CHECK_PSW_RESET_KEY: `${serverUrl}auth/checkpswresetkey/`,
        UPDATE_USER_LASTNAME_FIRSTNAME: `${serverUrl}users/updateuser/`,
        CHANGE_PSW: `${serverUrl}users/changepsw/`,
        RESEND_VERIFY_EMAIL: `${serverUrl}users/resendverifyemail/`,
    },
    chat: {
        CHAT_BASE_URL: 'https://support.tiledesk.com/chat/',
    },
    testsite: {
        testsiteBaseUrl: 'https://widget.tiledesk.com/v3/assets/twp/index.html'
    }
};
