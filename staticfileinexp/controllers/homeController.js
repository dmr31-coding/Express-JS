import { join } from 'path'

const homeController = (req, res) => {

    console.log(join(process.cwd(), 'views', 'index.html'))
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
}

export { homeController }
