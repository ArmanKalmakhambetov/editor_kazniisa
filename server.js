const fs = require('fs');
const swaggerUi = require("swagger-ui-express")
const path = require("path");
const express=require('express')
const logger=require('morgan') // для логирования кто к нам по какому запросу стучался
const multer=require('multer') // для formdata
const swaggerFile = JSON.parse(fs.readFileSync('./app/swagger/output.json'))
const app=express();
//middleware 1----
cors = require('cors')

app.use(logger('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true })); //сериализация   на уровне экспресса для того чтобы бэк понял пост запрос 
app.use(express.json())

// app.use(express.static(__dirname+'/public/cable'))

app.use(express.static(__dirname));

app.use('/todos', require('./app/editor/routes/routes'));
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.get('*', (req, res) => {
//   res.send('Only /todos and /api-doc endpoints are available.')
// })

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.status || 500
  const message = err.message || 'Something went wrong. Try again later'
  res.status(status).json({ message })
})



// app.get('/',(req,res)=>{
//     res.send('OK!')
// })

// app.post('/api',(req,res)=>{
//     console.log(req.body)
//     res.status(200).send('POST /api works | Success!')
// })

app.use(require('./app/editor/routes/routes'))
// app.use(require('./app/region/routes'))
// app.use(require('./app/skills/routes'))
// app.use(require('./app/employment-type/routes'))
// app.use(require('./app/languages/routes'))
// app.use(require('./app/resume/routes'))
// app.use(require('./app/vacancy/routes'))
// app.use(require('./app/applies/routes'))


app.listen (8000,()=>{
    console.log('Server is listening on port 8000')
})
