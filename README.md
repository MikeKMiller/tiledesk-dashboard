[![npm version](https://badge.fury.io/js/%40tiledesk%2Ftiledesk-dashboard.svg)](https://badge.fury.io/js/%40tiledesk%2Ftiledesk-dashboard)

# Tiledesk-dashboard

<img width="1200" alt="tiledesk-routing" src="https://user-images.githubusercontent.com/32564846/43013863-8b1ed646-8c4a-11e8-8dba-54c1a6b3c8c1.png" width="500">
<img width="1191" alt="tiledesk-hours" src="https://user-images.githubusercontent.com/32564846/43013892-a3864e4e-8c4a-11e8-97d6-1721076f1523.png" width="500">
<img width="1203" alt="tiledesk-widget" src="https://user-images.githubusercontent.com/32564846/43013900-b2fffda2-8c4a-11e8-81ca-38aaaeff6c9a.png" width="500">

Tiledesk.com backoffice application is available on GitHub with the AGPL-3.0 licence.
Follow this instructions to setup the environment.

Consider that Tiledesk.com cloud service makes every module available with the same open source licence.

- Web Widget component
- iOS Widget API (work in progress)
- full iOS App
- full Android App
- Tiledesk Backoffice (this repo)
- All the chat components are available thanks to the Chat21 open source project, also available on GitHub (https://github.com/chat21)

Feel free to ask for support on https://tiledesk.com, using the live chat widget on the the website.

## Features

- Angular 5.0
- Firebase Auth
- Firebase Database CRUD (Firestore & Realtime DB)
- MongoDB CRUD

## Prerequisite

For Firebase Auth and Firebase Database: create an account at https://firebase.google.com/
For MongoDB CRUD: install and running tiledesk-server (https://github.com/Tiledesk/tiledesk-server.git)
                                            

- `git clone https://github.com/Tiledesk/tiledesk-dashboard.git`
- `cd tiledesk-dashboard`
- `npm install`

Edit the environment.*.ts file in `src/environments/`.

#### environment.ts
```typescript
const serverUrl = '/api/';
export const environment = {
 ...
    production: false,
    VERSION: require('../../package.json').version,
    widgetUrl: 'http://localhost:4200/launch.js',
    remoteConfig: true,
    remoteConfigUrl: '/firebase-config.json',
    firebase: {
        apiKey: 'CHANGEIT',
        authDomain: 'CHANGEIT',
        databaseURL: 'CHANGEIT',
        projectId: 'CHANGEIT',
        storageBucket: 'CHANGEIT',
        messagingSenderId: 'CHANGEIT',
        chat21ApiUrl: 'CHANGEIT'
    },
    ...
    chat: {
        CHAT_BASE_URL: '/chat/',
    },
    testsite: {
        testsiteBaseUrl: 'http://localhost:4200/assets/test_widget_page/index.html'
    }
};



```
#### environment.prod.ts
```typescript
const serverUrl = 'https://api.TILEDESKSERVER/';
export const environment = {
    production: true,
    firebaseConfig: {
        // same as above, or use a different firebase project to isolate environments
    }
    ...
    chat: {
        CHAT_BASE_URL: 'https://support.YOURDOMAIN/chat/',
    },
    testsite: {
        testsiteBaseUrl: 'https://widget.YOURDOMAIN/assets/twp/index.html'
    }
},

```

And finally `ng serve`

# Build 
Run `ng build --prod --base-href ./`

# Deploy on AWS CloudFront and AWS S3

```
aws s3 sync ./dist/ s3://tiledesk-dashboard/dashboard
```

```
aws cloudfront create-invalidation --distribution-id E2DTAKWHWQ7C3J --paths "/*
```
