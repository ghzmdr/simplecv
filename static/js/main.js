// function getData() {
//     return fetch('./data.json')
//         .then(r => r.json())
// }

// function stringToElement(s) {
//     const e = document.createElement('div');
//     e.innerHTML = s;
//     return e.children[0];
// }

// function injectFirst(selector, element) {
//     document.querySelector(selector)
//         .insertAdjacentElement(
//             'afterbegin',
//             element
//         );
// }

// function injectFonts(fonts) {
//     const gFontsString = fonts.map(f => f.replace(/\s/g, '+')).join('|')
//     const link = `<link href="https://fonts.googleapis.com/css?family=${gFontsString}" rel="stylesheet">`
//     injectFirst('head', stringToElement(link))
// }

// function getTemplate() {
//     const tpl = document.querySelector('#page-template').textContent;
//     return _.template(tpl)
// }

// function injectPage(html) {
//     injectFirst('body', stringToElement(html))
// }

// async function init() {
//     const data = await getData();

//     injectFonts(data.fonts);

//     const template = getTemplate();
//     injectPage(template(data));

//     document.title = data.owner.name + '| Curriculum';
// }

// init();
