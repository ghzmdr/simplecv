const express = require('express')
const path = require('path')
const app = express()

let data;

const lookup = async (md5) => new Promise(res => {
    console.log('[+] Lookup: ', md5);
    res(data);
})

app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', async (req, res) => {
    res.render('./landing.ejs', data)
})

app.get('/make', async (req, res) => {
    res.render('./make.ejs', data)
})

app.get('/cv/:which', async (req, res) => {
    const data = await lookup(req.params.which);
    res.render('./cv.ejs', data)
})

//API

/*

    Submit:
        Save form by email but keep in drafts
        Send an email with a token link
        If link is clicked data is persisted and CV made public

*/

function start(dataFilepath) {
    return new Promise(res =>{
        data = require(dataFilepath);

        app.listen(3030, _ => {
            console.log('[+] Server started on 3030!')
            res()
        })
    })
}

module.exports = start;
