const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())

const cards = {
    'card1':{
        'name': 'sky & splatter',
        'number': 1,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471486/agxk2bay6dae2vyqxggy.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card2':{
        'name': 'blue ovary',
        'number': 2,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471502/higniaa5iqap2xnmnrpx.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card3':{
        'name': 'bird & cage',
        'number': 3,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471512/jdr4dghytkkeoaggtjnx.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card4':{
        'name': 'flower',
        'number': 4,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469681/firuopkccw1amjveyzuc.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card5':{
        'name': 'red splatter',
        'number': 5,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471498/szlgctlamgekjpw5ugiw.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card6':{
        'name': 'blue lines',
        'number': 6,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471405/swzuysd09vdfshqpm6u7.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card7':{
        'name': 'red & yellow',
        'number': 7,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471332/lj8jcxsgtzjbefpzzcow.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card8':{
        'name': 'firefly',
        'number': 8,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469696/ic9jjgyri9bvbqgjuij2.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card9':{
        'name': 'moon',
        'number': 9,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469723/kokuiuqk9fi99p9w5own.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card10':{
        'name': 'hut',
        'number': 10,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471526/quaunhtavltuvbzncltg.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card11':{
        'name': 'hanged person',
        'number': 11,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471518/kwdbedagpgnqhwhhycw1.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card12':{
        'name': 'green trumpet',
        'number': 12,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471508/w33dyf7mluxx35jdf3ha.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card13':{
        'name': 'green bird',
        'number': 13,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471500/vxhp5ckfztzhzkokxehf.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card14':{
        'name': 'horizon',
        'number': 14,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471494/mcclnq3mslwcasw74oqk.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card15':{
        'name': 'birdhouse',
        'number': 15,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469658/b1nj8iutqtvzckklsznh.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card16':{
        'name': 'blue & yellow',
        'number': 16,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471503/bv1gjgpabivimrcie3ip.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card17':{
        'name': 'quarter',
        'number': 17,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471349/mhjvzrlaivppylnpqxsy.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card18':{
        'name': 'landscape',
        'number': 18,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471412/m2w7qo11vfq6o7mp7gft.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card19':{
        'name': 'head face',
        'number': 19,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471401/vmdoqn4fszpv04xuqr9n.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card20':{
        'name': 'black tree',
        'number': 20,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471305/hnusmhuijjdkezs4ab4l.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card21':{
        'name': 'weeds',
        'number': 21,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471423/mq2qmoom7haykuppt9me.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card22':{
        'name': 'blue arch',
        'number': 22,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471435/dzcfnrumd7j8xosiqjj5.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card23':{
        'name': 'black eye',
        'number': 23,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471408/hzucfodscqnqueeh1tg9.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card24':{
        'name': 'green swirl',
        'number': 24,
        'img':'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471509/odcdqhwbgcwcxuoqwdoj.jpg',
        'title':'home',
        'meaning': 'all safe'
    }
}

// app.use( express.json() )

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})



app.get('/api/random', (req,res) => {
    console.log("Card")
    const card = `card${Math.ceil(Math.random() * 24)}`
    console.log(card)
    if(cards[card]){
        res.json(cards[card])

    }else{
        res.json(cards['card2'])
        console.log("testing")
    }
    // res.json(cards)
})

app.get('/api/:cardNumber', (req,res) => {
    const cardsNum = req.params.cardNumber.toLowerCase()
    if(cards[cardsNum]){
        res.json(cards[cardsNum])

    }else{
        res.json(cards['card1'])
    }
    // res.json(cards)
})

app.listen(
    PORT,
    () => {
        console.log(`it's alive on PORT ${PORT}`)
    }
)