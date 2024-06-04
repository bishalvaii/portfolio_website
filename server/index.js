const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const path = require('path')
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
const projectsData = require('./projects.json')

app.get('/api/projects', (req, res) => {
    res.json(projectsData)
})

app.listen(port, () => {
    console.log(`Server is running on  ${port}`)
})