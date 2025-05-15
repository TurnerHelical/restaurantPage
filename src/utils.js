function dom() {
    const findElement = (selector) => document.querySelector(selector);
    const findAllElements = (selector) => document.querySelectorAll(selector);
    const createAndAppend = (parent, child) => {
        let parentEl = findElement(`${parent}`)
        document.createElement(child);
        parentEl.appendChild(child);
    }
    const toggleClass = function (selector, className) {
        const element = findElement(selector);
        element.classList.toggle(className);
    }
    const toggleClassForAll = (selector, className) => {
        const elements = findAllElements(selector);
        elements.forEach(element => {
            element.classList.toggle(className);
        })
    }
    return { findElement, createAndAppend, toggleClass, findAllElements, toggleClassForAll };
}

export const utils = dom();