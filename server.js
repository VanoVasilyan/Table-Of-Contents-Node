import express from 'express'
import cors from 'cors';
import data from './data.js';

const app = express()
app.use(cors())

app.get('/accounts', (req, res) => {
    res.send(data)
})

app.listen(3001)
