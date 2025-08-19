import Article from "../models/Article.mjs"

export const getArticles = async (req, res) => {
    const articles = await Article.find({})
    res.send(articles)
}

export const getArticle = async (req, res) => {
    try {
        const id = req.params.id
        const article = await Article.findById(id)
        res.send(article)
    }
    catch (e) {
        res.status(404).send(e.message)
    }
}

export const createArticle = async (req, res) => {
    try {
        const article = new Article(req.body)
        await article.save()
        res.send(article)
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

export const updateArticle = (req, res) => {
    res.send('Update Article')
}

export const deleteArticle = async (req, res) => {
    try {
        const id = req.params.id
        const article = await Article.findByIdAndDelete(id)
        res.send(article)
    }
    catch (e) {
        res.status(404).send(e.message)
    }
}