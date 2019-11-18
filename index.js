const express = require('express')
const librarianApi = require('librarian-api');
const app = express()
const port = 7000

app.get('/', async (req, res) => {
    const result = await librarianApi.platform('npm', 'librarian-api')
    res.send(`librarian lives at ${result.package_manager_url}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
