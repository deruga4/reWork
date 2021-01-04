const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// const uri = config.ATLAS_URI
const uri = 'mongodb+srv://rework-user:srZDjyLKHODjy4yA@cluster0.xibsd.gcp.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(uri, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify: true,
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established")
})

app.get('/', (req, res) => res.send('Hello World!'))

const projectsRouter = require('./routes/projects');
const tasksRouter = require('./routes/tasks');

app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})