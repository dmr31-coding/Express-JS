const homeController = (req, res) => {

    const data = {
        'name': 'Ram'
    }
    res.render('index', data)
}

export { homeController }