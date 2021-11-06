import { config as configEnv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './router'
configEnv()

const port = process.env.PORT || 4000

export const createApp = async () => {
  // pre create app scripts

  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.use('/', router)

  // error handling middleware
  app.use((e, req, res, next) => {
    res.status(400).json({ error: e })
  })

  return app
}

// start the Express server
if (process.env.NODE_ENV !== 'test') {
  createApp().then((app) => {
    app.listen(port, () => {
      console.log(`API started at http://localhost:${port}`)
    })
  })
}
