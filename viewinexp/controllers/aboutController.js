import { join } from 'path'

const aboutController = (req, res) => {
    // res.send('About page')

    console.log(join(process.cwd(), 'views', 'about.html'))
    res.sendFile(join(process.cwd(), 'views', 'about.html'))
}

export { aboutController }