import {createClient} from 'contentful';

export default createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master'
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});