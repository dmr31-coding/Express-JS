const homeController = (req, res) => {

    const data = {
        'name': 'Ram',
        'id': 22
    }
    res.render('index', data)
}

export { homeController }