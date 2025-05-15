import { utils } from utils.js

function home() {

    const homepageLoad = () => { 
        utils.createAndAppend('#content', 'h1')
    }
    return {homepageLoad}
}

export const home = home();