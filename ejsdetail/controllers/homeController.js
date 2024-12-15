const homeController = (req, res) => {

    const data = {
        'name': 'Ram',
        'id': 22,
        'marks': [30, 40, 50, 10]
    }
    res.render('index', data)
}

export { homeController }