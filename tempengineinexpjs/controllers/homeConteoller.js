const homeController = (req, res) => {
    // res.send('This is home page')
    res.render('index', { 'name': 'Ram'} )
}

export { homeController }