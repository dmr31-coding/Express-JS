const aboutController = (req, res) => {
    // res.send('This is home page')
    res.render('about', { 'name': 'shyam'} )
}

export { aboutController }