// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/db.js'
// import './config/instrument.js'
// import { clerkWebhooks } from './controllers/webhooks.js'
// import * as Sentry from "@sentry/node"
// import companyRoutes from './routes/companyRoutes.js'


// //initialize express
// const app = express()

// //connect to database
// await connectDB()

// //middlewares
// app.use(cors())

// app.use(express.json())

// //routes
// app.get('/', (req, res) => {
//     res.send('api working')
// })

// app.get("/debug-sentry", function mainHandler(req, res) {
//   throw new Error("My first Sentry error!");
// });

// app.post('/webhooks',clerkWebhooks)
// app.use('/api/company',companyRoutes)

// //port/host
// const PORT = process.env.PORT || 5000;
// const HOST = '127.0.0.1';

// Sentry.setupExpressErrorHandler(app);

// app.listen(PORT, () => {
//     console.log(`server is running on http://${HOST}:${PORT}`)
// })


import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import './config/instrument.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js'


//initialize express
const app = express()

//connect to database
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('api working')
})

app.get("/debug-sentry", function mainHandler(req, res) {
   throw new Error("My first Sentry error!");
 });

app.post('/webhooks',clerkWebhooks)


//port/host
 const PORT = process.env.PORT || 5000;
 const HOST = '127.0.0.1';

 Sentry.setupExpressErrorHandler(app);

 app.listen(PORT, () => {
     console.log(`server is running on http://${HOST}:${PORT}`)
 })