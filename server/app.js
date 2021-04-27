
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const models = require('./models')
const book = require('./models/book')
const { Op } = require('sequelize')
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { response } = require('express')


app.use(cors())

app.post('/register', (req, res) => {
    let userName = req.body.userName
    let password = req.body.password

    models.User.findAll({
        where: {
            userName: {
                [Op.regexp]: userName
            }
        }
    }).then((user) => {
        console.log(user)
        console.log(user.length)
        if (user.length == 0) {
            bcrypt.genSalt(10, function (error, salt) {
                bcrypt.hash(password, salt, function (error, hash) {
                    if (!error) {
                        let newUser = models.User.build({
                            userName: userName,
                            password: hash
                        })
                        newUser.save().then(saved => {
                            res.json({ success: true })
                        })
                    }
                })
            })
        } else {
            res.json({ success: false })
        }
    })

})

app.post('/login', (req, res) => {
    console.log(req.body)
    const userName = req.body.userName
    const password = req.body.password


    models.User.findOne({
        where: {
            userName: {
                [Op.regexp]: userName
            }
        }
    }).then((user) => {
        bcrypt.compare(password, user.password, function (error, result) {
            if (result) {
                var token = jwt.sign({ username: userName }, 'SECRETS')
                res.json({ success: true, UserId: user.id, token: token })
            } else {
                res.json({ success: false, message: 'Password Not Correct' })
            }
        })
    }).catch((error) => {
        res.json({ success: false, message: 'User Not Found' })
    })

})

app.get('/profile', (req, res) => {
    let headers = req.headers['authorization']
    if (headers) {
        const token = headers.split(' ')[1]
        const decode = jwt.verify(token, 'SECRETS')
        if (decode) {
            const username = decode.username
            models.User.findOne({
                where: {
                    userName: {
                        [Op.regexp]: username
                    }
                }
            })
                .then((user) => {
                    res.json(user)
                })

        }
    }
})

app.post('/profile', (req, res) => {
    let email = req.headers['email']
    console.log(email)
    let headers = req.headers['authorization']
    if (headers) {
        const token = headers.split(' ')[1]
        const decode = jwt.verify(token, 'SECRETS')
        if (decode) {
            const username = decode.username
            models.User.findOne({
                where: {
                    userName: {
                        [Op.regexp]: username
                    }
                }
            })
                .then((user) => {
                    models.User.update({
                        email: email
                    }, {
                        where: {
                            userName: username
                        }
                    }) .then((response) => {
                        res.json({success:true})
                    })

                })

        }
    }
})


app.get('/books', (req, res) => {
    models.Book.findAll({})
        .then(books => {
            res.json(books)
        })
})

app.get('/books/:BookId', (req, res) => {
    let bId = req.params.BookId

    models.Book.findAll({
        where: {
            id: bId
        }
    }).then(book => {
        res.json(book[0])
    })
})

app.get('/my-books/:userId', (req, res) => {
    let userId = req.params.userId
    let headers = req.headers['authorization']
    if (headers) {
        const token = headers.split(' ')[1]
        const decode = jwt.verify(token, 'SECRETS')
        if (decode) {
            const username = decode.username
            models.User.findOne({
                where: {
                    userName: {
                        [Op.regexp]: username
                    }
                }
            })
                .then((user) => {
                    if (user) {
                        models.Book.findAll({
                            where: {
                                userId: userId
                            }
                        }).then(book => {
                            res.json(book)
                        })
                    }
                })

        }
    }
})

app.post('/bookupdate/:BookId', (req, res) => {
    let bId = req.params.BookId
    let id = req.body.id
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL
    console.log(id)
    console.log(title)

    models.Book.update({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    }, {
        where: {
            id: id
        }
    }).then(book => {
        console.log('UPDATED')
        res.json({ success: true, message: book })

    })

})

app.post('/books', (req, res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL

    let newbook = models.Book.build({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    })

    newbook.save().then((savedBook) => {
        res.json({
            success: true, message: savedBook
        })
    })

})

let location = []

app.post('/location', (req, res) => {
    let lng = req.body.lng
    let lat = req.body.lat

    let newLocation = { lat: lat, lng: lng }
    location.push(newLocation)

    res.json({ success: true })
})

app.get('/location', (req, res) => {
    res.json(location)
})


app.listen(8000, () => {
    console.log('Hi')
})