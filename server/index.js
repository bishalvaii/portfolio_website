const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
const projectsData = require('./projects.json')

app.get('/api/projects', (req, res) => {
    res.json(projectsData)
})

app.listen(port, () => {
    console.log(`Server is running on  ${port}`)
})