const homeController = (req, res) => {
    res.render('index', { 'title': 'HOme' })
}

export { homeController }