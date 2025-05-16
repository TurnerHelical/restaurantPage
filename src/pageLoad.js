import { dom } from './utils.js'
import image from './images/download.jpeg'


const utils = dom();

function home() {

    const homeLoad = () => { 
        utils.clearContent('#content');
        utils.createAndAppend('#content', 'div', 'id', 'home');
        const homeHeader = utils.createAndAppend('#home', 'h2');
        homeHeader.innerHTML = 'My Restaurant';
        const mainImg = utils.createAndAppend('#home', 'img');
        mainImg.src = image;
        const comment = utils.createAndAppend('#home', 'p');
        comment.innerHTML = 'Best place to eat ever!!!';
    }

    const menuLoad = () => {
        utils.clearContent('#content');
        utils.createAndAppend('#content', 'div', 'id', 'menu');
        const menuHeader = utils.createAndAppend('#menu', 'h2')
        menuHeader.innerHTML = 'Menu';
        const meals = utils.createAndAppend('#menu', 'p');
        meals.innerHTML = 'Some info here';
    }

    const aboutLoad = () => {
        utils.clearContent('#content');
        utils.createAndAppend('#content', 'div', 'id', 'about');
        const menuHeader = utils.createAndAppend('#about', 'h2')
        menuHeader.innerHTML = 'My Story';
        const meals = utils.createAndAppend('#about', 'p');
        meals.innerHTML = 'sob story here';
    }

    const buttons = () => {
        const homeButton = utils.findElement('#homeButton');
        const menuButton = utils.findElement('#menuButton');
        const aboutButton = utils.findElement('#aboutButton');
        homeButton.addEventListener('click', homeLoad);
        menuButton.addEventListener('click', menuLoad);
        aboutButton.addEventListener('click', aboutLoad);
    }
    return {homeLoad}
}

export {home};