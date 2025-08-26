import express from 'express'
import dbConnection from './db/db.mjs'
import cors from 'cors'

import { createArticle, deleteArticle, getArticle, getArticles, updateArticle } from './controllers/ArticleController.mjs'
const app = express()
const port = 5000

dbConnection.on('connected', () => console.log('Connected to DB'))
dbConnection.on('error', () => console.log('Connected DB error'))

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/articles', getArticles)
app.get('/articles/:id', getArticle)
app.post('/articles', createArticle)
app.put('/articles/:id', updateArticle)
app.delete('/articles/:id', deleteArticle)


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})