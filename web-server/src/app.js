const path=require('path')
const express = require('express')
const PORT = process.env.PORT || 3030;
const hbs = require('hbs')
const { title } = require('process')
const { error } = require('console')

const app=express()
// define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handlerbars engine and views loation
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'ExpressApp',
        name:'MyName'
    })
})

app.get('/about' , (req,res) => {
    res.render('about',{
        title:'About Me',
        name:'MyName'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        helpText:'This is some helpful text.',
        title:'Help',
        name:'MyName'
    })
})

app.listen(PORT, () => {
    console.log('server is up on port 3000.')
})

app.get('/ExpressApp',(req,res) => {
    res.send({
        forecast: 'It  is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title:'404',
        name:'MyName',
        errorMessage : 'Help articale not found.'     
    })
} )

app.get('*',(req,res)=> {
    res.render('404',{
        title:'404',
        name:'MyName',
        errorMessage:'page not found.'
    })
})
