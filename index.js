import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import ejs from 'ejs'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.get('/', (req, res) => res.render('index', {title: 'Main page'}))
app.get('/features', (req, res) => res.render('features'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))
// import test from "ava"

//
// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }
//
// const addWithThree = add(3);
// console.log(addWithThree(5))

// // ДО
// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }
//
// // ПОСЛЕ (ES2015)
// const add2 = x => y => console.log(x + y);
// add2(2)(4)
//
// const split = pattern => str => str.split(pattern);
//
// console.log(split(' ')('JavaScript The Good Parts'))
//
// const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed),arg)

// Замыкание Closure
// function сallCount(fn) {
//   let count = 0
//
//   return (...args) => {
//     console.log(`This function has been called ${++count} times`)
//   }
// }
//
// const add = (x, y) => x + y
// const addCount = сallCount(add)
//
// addCount(2, 4) // This function has been called 1 times
// addCount(2, 4) // This function has been called 1 times

// value !== null && value !== undefined
// value ?? 'default value' // аналогично тому что выше написано