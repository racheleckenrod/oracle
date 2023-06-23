const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())

const cards = {
    'card1':{
        'name': 'sky & splatter',
        'number': 1,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471486/agxk2bay6dae2vyqxggy.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card1Reversed':{
        'name': 'sky & splatter (Reversed)',
        'number': '1R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531547/fubbbtxpcb9swnupew8i.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card2':{
        'name': 'blue ovary',
        'number': 2,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471502/higniaa5iqap2xnmnrpx.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card2Reversed':{
        'name': 'blue ovary (Reversed)',
        'number': '2R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531593/woy2nrkgkxojopc42jxg.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card3':{
        'name': 'bird & cage',
        'number': 3,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471512/jdr4dghytkkeoaggtjnx.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card3Reversed':{
        'name': 'bird & cage (Reversed)',
        'number': '3R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531620/hrkxc0dndpxndzp6blam.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card4':{
        'name': 'flower',
        'number': 4,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469681/firuopkccw1amjveyzuc.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card4Reversed':{
        'name': 'flower (Reversed)',
        'number': '4R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531338/puitzkyinsboirq6kpzi.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card5':{
        'name': 'red splatter',
        'number': 5,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471498/szlgctlamgekjpw5ugiw.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card5Reversed':{
        'name': 'red splatter (Reversed)',
        'number': '5R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531556/hlpp43fygjpoyincc5rc.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card6':{
        'name': 'blue lines',
        'number': 6,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471405/swzuysd09vdfshqpm6u7.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card6Reversed':{
        'name': 'blue lines (Reversed)',
        'number': '6R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531480/na8nvmw1zb5g0dr4cv1z.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card7':{
        'name': 'red & yellow',
        'number': 7,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471332/lj8jcxsgtzjbefpzzcow.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card7Reversed':{
        'name': 'red & yellow (Reversed)',
        'number': '7R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531434/qg3njy8cq7qgcx8dm5cd.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card8':{
        'name': 'firefly',
        'number': 8,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469696/ic9jjgyri9bvbqgjuij2.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card8Reversed':{
        'name': 'firefly (Reversed)',
        'number': '8R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531321/dughupjg3luzwsjjewzl.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card9':{
        'name': 'moon',
        'number': 9,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469723/kokuiuqk9fi99p9w5own.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card9Reversed':{
        'name': 'moon (Reversed)',
        'number': '9R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531284/g1uyocbyrzpn1etfeuib.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card10':{
        'name': 'hut',
        'number': 10,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471526/quaunhtavltuvbzncltg.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card10Reversed':{
        'name': 'hut (Reversed)',
        'number': '10R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531653/pqmq6h7yyinn2recgyja.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card11':{
        'name': 'hanged person',
        'number': 11,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471518/kwdbedagpgnqhwhhycw1.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card11Reversed':{
        'name': 'hanged person (Reversed)',
        'number': '11R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531629/nfigp4ly8xuxpa0n4air.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card12':{
        'name': 'green trumpet',
        'number': 12,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471508/w33dyf7mluxx35jdf3ha.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card12Reversed':{
        'name': 'green trumpet (Reversed)',
        'number': '12R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531602/kzfar5jgw6elxpxcjcuw.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card13':{
        'name': 'green bird',
        'number': 13,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471500/vxhp5ckfztzhzkokxehf.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card13Reversed':{
        'name': 'green bird (Reversed)',
        'number': '13R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531584/dqf0sx3dwoxqvgsme2lm.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card14':{
        'name': 'horizon',
        'number': 14,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471494/mcclnq3mslwcasw74oqk.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card14Reversed':{
        'name': 'horizon (Reversed)',
        'number': '14R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531576/auqjhic5i18xnuo6fspc.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card15':{
        'name': 'birdhouse',
        'number': 15,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469658/b1nj8iutqtvzckklsznh.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card15Reversed':{
        'name': 'birdhouse (Reversed)',
        'number': '15R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531350/yufbdu1wcjiaoyfxyxzr.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card16':{
        'name': 'blue & yellow',
        'number': 16,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471503/bv1gjgpabivimrcie3ip.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card16Reversed':{
        'name': 'blue & yellow (Reversed)',
        'number': '16R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531567/t6f1zrrbm77f1ldu5dzj.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card17':{
        'name': 'quarter',
        'number': 17,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471349/mhjvzrlaivppylnpqxsy.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card17Reversed':{
        'name': 'quarter (Reversed)',
        'number': '17R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card18':{
        'name': 'landscape',
        'number': 18,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471412/m2w7qo11vfq6o7mp7gft.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card18Reversed':{
        'name': 'landscape (Reversed)',
        'number': '18R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531507/ktnjl31o01x7hkbgjuxb.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card19':{
        'name': 'head face',
        'number': 19,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471401/vmdoqn4fszpv04xuqr9n.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card19Reversed':{
        'name': 'head face (Reversed)',
        'number': '19R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531468/g2sewtw3ggkjqcm9pnjl.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card20':{
        'name': 'black tree',
        'number': 20,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471305/hnusmhuijjdkezs4ab4l.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card20Reversed':{
        'name': 'black tree (Reversed)',
        'number': '20R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531413/okn9npb8dmh9b1zoo9pn.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card21':{
        'name': 'weeds',
        'number': 21,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471423/mq2qmoom7haykuppt9me.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card21Reversed':{
        'name': 'weeds (Reversed)',
        'number': '21R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531521/ixew28p41piautvay9jx.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card22':{
        'name': 'blue arch',
        'number': 22,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471435/dzcfnrumd7j8xosiqjj5.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card22Reversed':{
        'name': 'blue arch (Reversed)',
        'number': '22R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card23':{
        'name': 'black eye',
        'number': 23,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471408/hzucfodscqnqueeh1tg9.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card23Reversed':{
        'name': 'black eye (Reversed)',
        'number': '23R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531490/ygdml22nldmys1kuxd3z.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card24':{
        'name': 'green swirl',
        'number': 24,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471509/odcdqhwbgcwcxuoqwdoj.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card24Reversed':{
        'name': 'green swirl (Reversed)',
        'number': '24R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531612/bg3nzvonwkyckmivq8ah.jpg',
        'title':'home',
        'meaning': 'all safe'
    }
}


// app.use( express.json() )

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})



app.get('/api/random', (req,res) => {
    console.log("Random Card")
    const card = `card${Math.ceil(Math.random() * 24)}`
    const cardReversed = `card${Math.ceil(Math.random() * 24)}Reversed`

    const orient = Math.random() * 10
    if(orient < 5){
        res.json(cards[card])
    }else if(orient > 5){
        res.json(cards[cardReversed])
    }else{
        res.json(cards[card1])
    }
    console.log(card)
    // if(cards[card]){
    //     res.json(cards[card])

    // }else{
    //     res.json(cards['card2'])
    //     console.log("testing")
    // }

    // res.json(cards)
})

app.get('/api/:cardNumber', (req,res) => {
    const cardsNum = req.params.cardNumber
    if(cards[`${cardsNum}`]){
        res.json(cards[`${cardsNum}`])

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