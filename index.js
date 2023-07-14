const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())

const cards = {
    'card1':{
        'name': 'The Hanged',
        'number': 1,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471518/kwdbedagpgnqhwhhycw1.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471486/agxk2bay6dae2vyqxggy.jpg',
        'title':'home',
        'meaning': 'all safe Ex commodo tempor mollit ex ullamco sunt nostrud irure reprehenderit irure Lorem consectetur proident do. Proident aliquip dolore proident elit quis nostrud laborum dolor elit. Dolore proident ex adipisicing ut tempor nulla amet et ex. Officia pariatur magna enim quis in nisi. Aliqua sint nostrud ad aliquip magna ea commodo. Labore id irure ullamco aliquip. Tempor minim amet ullamco do proident.' 

    },
    'card1Reversed':{
        'name': 'The Hanged (Reversed)',
        'name2': 'sky & splatter (Reversed)',
        'number': '1R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531629/nfigp4ly8xuxpa0n4air.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531547/fubbbtxpcb9swnupew8i.jpg',
        'title':'home',
        'meaning': 'all safe Laboris eiusmod ut proident amet magna enim qui non deserunt est reprehenderit. Pariatur quis laboris ut Lorem ea voluptate laboris aliquip sint aliquip eiusmod dolore. Nulla voluptate sunt ea sit qui quis excepteur veniam deserunt ad. Consectetur deserunt labore tempor eiusmod occaecat minim veniam in aliqua minim elit laboris sunt eu. Enim anim pariatur pariatur cupidatat eiusmod minim ad nulla id pariatur consequat.'
    },
    'card2':{
        'name': 'The Tower',
        'name2': 'blue ovary',
        'number': 2,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469658/b1nj8iutqtvzckklsznh.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471502/higniaa5iqap2xnmnrpx.jpg',
        'title':'home',
        'meaning': 'all safe Nisi id culpa qui quis reprehenderit voluptate cillum velit do excepteur labore magna voluptate adipisicing. Sint ipsum nulla tempor velit sunt cillum ipsum tempor est nostrud laborum. Adipisicing tempor laborum eiusmod mollit id voluptate. Ad voluptate aliqua incididunt elit nisi nisi adipisicing. Id exercitation sint nostrud laborum dolor amet aute ad consequat pariatur. Quis adipisicing cillum ex irure ad pariatur dolore sint.'
    },
    'card2Reversed':{
        'name': 'The Tower (Reversed)',
        'name2': 'blue ovary (Reversed)',
        'number': '2R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531350/yufbdu1wcjiaoyfxyxzr.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531593/woy2nrkgkxojopc42jxg.jpg',
        'title':'home',
        'meaning': 'all safe In laboris eiusmod mollit dolor amet anim. Ut minim non ut ex ipsum tempor qui fugiat. Non fugiat do sit officia cillum. Exercitation proident esse consequat incididunt excepteur est consectetur ad consectetur dolore mollit Lorem consequat consequat.'
    },
    'card3':{
        'name': 'Thorns',
        'number': 3,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471408/hzucfodscqnqueeh1tg9.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card3Reversed':{
        'name': 'Thorns (Reversed)',
        'number': '3R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531490/ygdml22nldmys1kuxd3z.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card4':{
        'name': 'Blood',
        'number': 4,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471498/szlgctlamgekjpw5ugiw.jpg',
        'title':'home',
        'meaning': 'all safe Deserunt adipisicing pariatur Lorem deserunt voluptate proident enim ad sunt ipsum cillum. Incididunt sunt anim eu deserunt exercitation sit magna cillum magna voluptate duis in. Nostrud aute commodo sunt sit est consequat irure ea incididunt exercitation irure. Duis excepteur cupidatat cupidatat qui ad incididunt in. Laborum elit do non laboris velit in ipsum esse enim anim aliquip sit reprehenderit. Magna commodo incididunt incididunt anim aliquip adipisicing minim.'
    },
    'card4Reversed':{
        'name': 'Blood (Reversed)',
        'number': '4R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531556/hlpp43fygjpoyincc5rc.jpg',
        'title':'home',
        'meaning': 'all safe Exercitation labore deserunt et ullamco eiusmod do nulla tempor ipsum excepteur ex esse. Sit ea ad ad ut quis fugiat. Lorem cupidatat nulla anim ullamco enim irure id duis est amet. Officia voluptate sint anim occaecat ullamco ea sint eu nisi in.'
    },
    'card5':{
        'name': 'Masquerade',
        'number': 5,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471401/vmdoqn4fszpv04xuqr9n.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card5Reversed':{
        'name': 'Masquerade (Reversed)',
        'number': '5R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531468/g2sewtw3ggkjqcm9pnjl.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card6':{
        'name': 'Re-emergence',
        'number': 6,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471349/mhjvzrlaivppylnpqxsy.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card6Reversed':{
        'name': 'Re-emergence (Reversed)',
        'number': '6R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card7':{
        'name': 'Growth from Ashes',
        'number': 7,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471423/mq2qmoom7haykuppt9me.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card7Reversed':{
        'name': 'Growth from Ashes (Reversed)',
        'number': '7R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531521/ixew28p41piautvay9jx.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card8':{
        'name': 'Nature Helpers',
        'number': 8,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471500/vxhp5ckfztzhzkokxehf.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card8Reversed':{
        'name': 'Nature Helpers (Reversed)',
        'number': '8R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531584/dqf0sx3dwoxqvgsme2lm.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card9':{
        'name': 'Nurture the Seeds',
        'number': 9,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471508/w33dyf7mluxx35jdf3ha.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card9Reversed':{
        'name': 'Nurture the Seeds (Reversed)',
        'number': '9R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531602/kzfar5jgw6elxpxcjcuw.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card10':{
        'name': 'Sovereign',
        'number': 10,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471332/lj8jcxsgtzjbefpzzcow.jpg',
        'title':'home',
        'meaning': 'all safe Non irure cupidatat est aliqua nulla laborum id non sunt sit cupidatat ullamco voluptate. Cillum cupidatat eu ullamco reprehenderit cillum sit mollit voluptate minim occaecat eu. Commodo do adipisicing sit elit culpa culpa amet voluptate veniam est nostrud. Amet ea elit elit et incididunt pariatur est sunt amet labore aliquip consectetur et.'
    },
    'card10Reversed':{
        'name': 'Sovereign (Reversed)',
        'number': '10R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531434/qg3njy8cq7qgcx8dm5cd.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card11':{
        'name': 'Soul Treasures',
        'number': 11,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471502/higniaa5iqap2xnmnrpx.jpg',
        'title':'home',
        'meaning': 'all safe Nisi id culpa qui quis reprehenderit voluptate cillum velit do excepteur labore magna voluptate adipisicing. Sint ipsum nulla tempor velit sunt cillum ipsum tempor est nostrud laborum. Adipisicing tempor laborum eiusmod mollit id voluptate. Ad voluptate aliqua incididunt elit nisi nisi adipisicing. Id exercitation sint nostrud laborum dolor amet aute ad consequat pariatur. Quis adipisicing cillum ex irure ad pariatur dolore sint.'
    },
    'card11Reversed':{
        'name': 'Soul Treasures (Reversed)',
        'number': '11R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531593/woy2nrkgkxojopc42jxg.jpg',
        'title':'home',
        'meaning': 'all safe In laboris eiusmod mollit dolor amet anim. Ut minim non ut ex ipsum tempor qui fugiat. Non fugiat do sit officia cillum. Exercitation proident esse consequat incididunt excepteur est consectetur ad consectetur dolore mollit Lorem consequat consequat.'
    },
    'card12':{
        'name': 'Enchanted Forest',
        'number': 12,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471412/m2w7qo11vfq6o7mp7gft.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card12Reversed':{
        'name': 'Enchanted Forest (Reversed)',
        'number': '12R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531507/ktnjl31o01x7hkbgjuxb.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card13':{
        'name': 'Safe',
        'number': 13,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471526/quaunhtavltuvbzncltg.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card13Reversed':{
        'name': 'Safe (Reversed)',
        'number': '13R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531653/pqmq6h7yyinn2recgyja.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card14':{
        'name': 'Vision',
        'number': 14,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471494/mcclnq3mslwcasw74oqk.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card14Reversed':{
        'name': 'Vision (Reversed)',
        'number': '14R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531576/auqjhic5i18xnuo6fspc.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card15':{
        'name': 'Dream Life',
        'number': 15,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471503/bv1gjgpabivimrcie3ip.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card15Reversed':{
        'name': 'Dream Life (Reversed)',
        'number': '15R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531567/t6f1zrrbm77f1ldu5dzj.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card16':{
        'name': 'As Above So Below',
        'number': 16,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471405/swzuysd09vdfshqpm6u7.jpg',
        'title':'home',
        'meaning': 'all safe Ad dolor nulla eu enim esse aliqua commodo laboris ad. Minim sint nulla ex deserunt nostrud officia magna proident irure adipisicing. Esse exercitation do sunt est officia eu aliquip occaecat incididunt magna consequat. Adipisicing veniam dolor nisi sunt enim Lorem est occaecat irure voluptate excepteur laborum voluptate. Proident qui esse amet consequat commodo culpa sit velit qui aliqua sit labore. Aute eiusmod ullamco anim occaecat qui sint culpa tempor anim velit cillum.'
    },
    'card16Reversed':{
        'name': 'As Above So Below (Reversed)',
        'number': '16R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531480/na8nvmw1zb5g0dr4cv1z.jpg',
        'title':'home',
        'meaning': 'all safe Do ut do duis elit nostrud incididunt consequat quis eiusmod ipsum nisi et. Nostrud fugiat quis consectetur irure laborum id aliquip ea nostrud sunt mollit ea. Consectetur non amet cillum amet ipsum enim sit quis qui. Mollit aliqua proident exercitation proident mollit dolore sit adipisicing irure. Mollit ea aliquip enim incididunt sint voluptate ullamco proident. Adipisicing esse non voluptate duis ullamco eiusmod ex nisi.'
    },
    'card17':{
        'name': 'You Are a Force',
        'number': 17,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469696/ic9jjgyri9bvbqgjuij2.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card17Reversed':{
        'name': 'You Are a Force (Reversed)',
        'number': '17R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531321/dughupjg3luzwsjjewzl.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card18':{
        'name': 'Cyclone',
        'number': 18,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471435/dzcfnrumd7j8xosiqjj5.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card18Reversed':{
        'name': 'Cyclone (Reversed)',
        'number': '18R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card19':{
        'name': 'Healing',
        'number': 19,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471486/agxk2bay6dae2vyqxggy.jpg',
        'title':'home',
        'meaning': 'all safe Ex commodo tempor mollit ex ullamco sunt nostrud irure reprehenderit irure Lorem consectetur proident do. Proident aliquip dolore proident elit quis nostrud laborum dolor elit. Dolore proident ex adipisicing ut tempor nulla amet et ex. Officia pariatur magna enim quis in nisi. Aliqua sint nostrud ad aliquip magna ea commodo. Labore id irure ullamco aliquip. Tempor minim amet ullamco do proident.' 

    },
    'card19Reversed':{
        'name': 'Healing (Reversed)',
        'number': '19R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531547/fubbbtxpcb9swnupew8i.jpg',
        'title':'home',
        'meaning': 'all safe Laboris eiusmod ut proident amet magna enim qui non deserunt est reprehenderit. Pariatur quis laboris ut Lorem ea voluptate laboris aliquip sint aliquip eiusmod dolore. Nulla voluptate sunt ea sit qui quis excepteur veniam deserunt ad. Consectetur deserunt labore tempor eiusmod occaecat minim veniam in aliqua minim elit laboris sunt eu. Enim anim pariatur pariatur cupidatat eiusmod minim ad nulla id pariatur consequat.'
    },
    'card20':{
        'name': 'Your Gold',
        'number': 20,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469723/kokuiuqk9fi99p9w5own.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card20Reversed':{
        'name': 'Your Gold (Reversed)',
        'number': '20R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531284/g1uyocbyrzpn1etfeuib.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card21':{
        'name': 'Snake',
        'number': 21,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471509/odcdqhwbgcwcxuoqwdoj.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card21Reversed':{
        'name': 'Snake (Reversed)',
        'number': '21R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531612/bg3nzvonwkyckmivq8ah.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card22':{
        'name': 'Tree',
        'number': 22,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471305/hnusmhuijjdkezs4ab4l.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card22Reversed':{
        'name': 'Tree (Reversed)',
        'number': '22R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531413/okn9npb8dmh9b1zoo9pn.jpg',
        'title':'home',
        'meaning': 'all safe'
    },
    'card23':{
        'name': 'Your Beauty Blossoms',
        'number': 23,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469681/firuopkccw1amjveyzuc.jpg',
        'title':'home',
        'meaning': 'all safe Et ad sit nisi commodo do. Ipsum deserunt minim cillum ea enim elit ullamco incididunt quis magna voluptate aliqua laboris cupidatat. Exercitation nulla enim culpa elit. Nulla velit in adipisicing enim tempor. Id tempor excepteur nostrud cillum esse irure.'
    },
    'card23Reversed':{
        'name': 'Your Beauty Blossoms (Reversed)',
        'number': '23R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531338/puitzkyinsboirq6kpzi.jpg',
        'title':'home',
        'meaning': 'all safe Nisi minim aliqua ad sit et incididunt exercitation consectetur dolor duis cillum. Enim aliquip et laboris anim enim. Lorem consequat qui minim elit ea officia anim. Veniam deserunt cillum consectetur cillum adipisicing sint. Incididunt aliqua ad do aute mollit enim cillum mollit veniam reprehenderit sint amet id nulla. Tempor ex ex aliqua do exercitation amet reprehenderit officia veniam nostrud pariatur officia officia.'
    },
    'card24':{
        'name': 'Free',
        'number': 24,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471512/jdr4dghytkkeoaggtjnx.jpg',
        'title':'home',
        'meaning': 'all safe Pariatur laboris nisi do ut voluptate et. Exercitation quis ea non ipsum exercitation id cillum. Qui laborum adipisicing quis veniam voluptate in est officia in mollit sit eiusmod ipsum reprehenderit. Fugiat excepteur adipisicing laborum incididunt culpa labore cupidatat deserunt proident veniam. Sunt sunt mollit Lorem cillum cillum minim laborum. Tempor non aliqua magna elit eiusmod laborum non amet do officia anim eiusmod sunt ea.'
    },
    'card24Reversed':{
        'name': 'Free (Reversed)',
        'number': '24R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531620/hrkxc0dndpxndzp6blam.jpg',
        'title':'home',
        'meaning': 'all safe Incididunt aliquip id reprehenderit ex cillum pariatur aliquip. Tempor sint enim do ex ea ullamco deserunt irure quis ea. Irure nostrud enim labore enim culpa eu. Occaecat sint enim dolore ullamco eu do exercitation dolor cillum excepteur ipsum laborum aute. Pariatur nostrud esse sint consectetur cupidatat exercitation.'
    },
    // 'card3':{
    //     'name': 'Thorns'
    //     'name2': 'bird & cage',
    //     'number': 3,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471512/jdr4dghytkkeoaggtjnx.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Pariatur laboris nisi do ut voluptate et. Exercitation quis ea non ipsum exercitation id cillum. Qui laborum adipisicing quis veniam voluptate in est officia in mollit sit eiusmod ipsum reprehenderit. Fugiat excepteur adipisicing laborum incididunt culpa labore cupidatat deserunt proident veniam. Sunt sunt mollit Lorem cillum cillum minim laborum. Tempor non aliqua magna elit eiusmod laborum non amet do officia anim eiusmod sunt ea.'
    // },
    // 'card3Reversed':{
    //     'name2': 'bird & cage (Reversed)',
    //     'number': '3R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531620/hrkxc0dndpxndzp6blam.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Incididunt aliquip id reprehenderit ex cillum pariatur aliquip. Tempor sint enim do ex ea ullamco deserunt irure quis ea. Irure nostrud enim labore enim culpa eu. Occaecat sint enim dolore ullamco eu do exercitation dolor cillum excepteur ipsum laborum aute. Pariatur nostrud esse sint consectetur cupidatat exercitation.'
    // },
    // 'card4':{
    //     'name': 'flower',
    //     'number': 4,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469681/firuopkccw1amjveyzuc.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Et ad sit nisi commodo do. Ipsum deserunt minim cillum ea enim elit ullamco incididunt quis magna voluptate aliqua laboris cupidatat. Exercitation nulla enim culpa elit. Nulla velit in adipisicing enim tempor. Id tempor excepteur nostrud cillum esse irure.'
    // },
    // 'card4Reversed':{
    //     'name': 'flower (Reversed)',
    //     'number': '4R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531338/puitzkyinsboirq6kpzi.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Nisi minim aliqua ad sit et incididunt exercitation consectetur dolor duis cillum. Enim aliquip et laboris anim enim. Lorem consequat qui minim elit ea officia anim. Veniam deserunt cillum consectetur cillum adipisicing sint. Incididunt aliqua ad do aute mollit enim cillum mollit veniam reprehenderit sint amet id nulla. Tempor ex ex aliqua do exercitation amet reprehenderit officia veniam nostrud pariatur officia officia.'
    // },
    // 'card5':{
    //     'name': 'red splatter',
    //     'number': 5,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471498/szlgctlamgekjpw5ugiw.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Deserunt adipisicing pariatur Lorem deserunt voluptate proident enim ad sunt ipsum cillum. Incididunt sunt anim eu deserunt exercitation sit magna cillum magna voluptate duis in. Nostrud aute commodo sunt sit est consequat irure ea incididunt exercitation irure. Duis excepteur cupidatat cupidatat qui ad incididunt in. Laborum elit do non laboris velit in ipsum esse enim anim aliquip sit reprehenderit. Magna commodo incididunt incididunt anim aliquip adipisicing minim.'
    // },
    // 'card5Reversed':{
    //     'name': 'red splatter (Reversed)',
    //     'number': '5R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531556/hlpp43fygjpoyincc5rc.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Exercitation labore deserunt et ullamco eiusmod do nulla tempor ipsum excepteur ex esse. Sit ea ad ad ut quis fugiat. Lorem cupidatat nulla anim ullamco enim irure id duis est amet. Officia voluptate sint anim occaecat ullamco ea sint eu nisi in.'
    // },
    // 'card6':{
    //     'name': 'blue lines',
    //     'number': 6,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471405/swzuysd09vdfshqpm6u7.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Ad dolor nulla eu enim esse aliqua commodo laboris ad. Minim sint nulla ex deserunt nostrud officia magna proident irure adipisicing. Esse exercitation do sunt est officia eu aliquip occaecat incididunt magna consequat. Adipisicing veniam dolor nisi sunt enim Lorem est occaecat irure voluptate excepteur laborum voluptate. Proident qui esse amet consequat commodo culpa sit velit qui aliqua sit labore. Aute eiusmod ullamco anim occaecat qui sint culpa tempor anim velit cillum.'
    // },
    // 'card6Reversed':{
    //     'name': 'blue lines (Reversed)',
    //     'number': '6R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531480/na8nvmw1zb5g0dr4cv1z.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Do ut do duis elit nostrud incididunt consequat quis eiusmod ipsum nisi et. Nostrud fugiat quis consectetur irure laborum id aliquip ea nostrud sunt mollit ea. Consectetur non amet cillum amet ipsum enim sit quis qui. Mollit aliqua proident exercitation proident mollit dolore sit adipisicing irure. Mollit ea aliquip enim incididunt sint voluptate ullamco proident. Adipisicing esse non voluptate duis ullamco eiusmod ex nisi.'
    // },
    // 'card7':{
    //     'name': 'red & yellow',
    //     'number': 7,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471332/lj8jcxsgtzjbefpzzcow.jpg',
    //     'title':'home',
    //     'meaning': 'all safe Non irure cupidatat est aliqua nulla laborum id non sunt sit cupidatat ullamco voluptate. Cillum cupidatat eu ullamco reprehenderit cillum sit mollit voluptate minim occaecat eu. Commodo do adipisicing sit elit culpa culpa amet voluptate veniam est nostrud. Amet ea elit elit et incididunt pariatur est sunt amet labore aliquip consectetur et.'
    // },
    // 'card7Reversed':{
    //     'name': 'red & yellow (Reversed)',
    //     'number': '7R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531434/qg3njy8cq7qgcx8dm5cd.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card8':{
    //     'name': 'firefly',
    //     'number': 8,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469696/ic9jjgyri9bvbqgjuij2.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card8Reversed':{
    //     'name': 'firefly (Reversed)',
    //     'number': '8R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531321/dughupjg3luzwsjjewzl.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card9':{
    //     'name': 'moon',
    //     'number': 9,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469723/kokuiuqk9fi99p9w5own.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card9Reversed':{
    //     'name': 'moon (Reversed)',
    //     'number': '9R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531284/g1uyocbyrzpn1etfeuib.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card10':{
    //     'name': 'hut',
    //     'number': 10,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471526/quaunhtavltuvbzncltg.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card10Reversed':{
    //     'name': 'hut (Reversed)',
    //     'number': '10R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531653/pqmq6h7yyinn2recgyja.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card11':{
    //     'name2': 'hanged person',
    //     'number': 11,
    //     'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471518/kwdbedagpgnqhwhhycw1.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card11Reversed':{
    //     'name2': 'hanged person (Reversed)',
    //     'number': '11R',
    //     'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531629/nfigp4ly8xuxpa0n4air.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card12':{
    //     'name': 'green trumpet',
    //     'number': 12,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471508/w33dyf7mluxx35jdf3ha.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card12Reversed':{
    //     'name': 'green trumpet (Reversed)',
    //     'number': '12R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531602/kzfar5jgw6elxpxcjcuw.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card13':{
    //     'name': 'green bird',
    //     'number': 13,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471500/vxhp5ckfztzhzkokxehf.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card13Reversed':{
    //     'name': 'green bird (Reversed)',
    //     'number': '13R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531584/dqf0sx3dwoxqvgsme2lm.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card14':{
    //     'name': 'horizon',
    //     'number': 14,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471494/mcclnq3mslwcasw74oqk.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card14Reversed':{
    //     'name': 'horizon (Reversed)',
    //     'number': '14R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531576/auqjhic5i18xnuo6fspc.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card15':{
    //     'name2': 'birdhouse',
    //     'number': 15,
    //     'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469658/b1nj8iutqtvzckklsznh.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card15Reversed':{
    //     'name2': 'birdhouse (Reversed)',
    //     'number': '15R',
    //     'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531350/yufbdu1wcjiaoyfxyxzr.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card16':{
    //     'name': 'blue & yellow',
    //     'number': 16,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471503/bv1gjgpabivimrcie3ip.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card16Reversed':{
    //     'name': 'blue & yellow (Reversed)',
    //     'number': '16R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531567/t6f1zrrbm77f1ldu5dzj.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card17':{
    //     'name': 'quarter',
    //     'number': 17,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471349/mhjvzrlaivppylnpqxsy.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card17Reversed':{
    //     'name': 'quarter (Reversed)',
    //     'number': '17R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card18':{
    //     'name': 'landscape',
    //     'number': 18,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471412/m2w7qo11vfq6o7mp7gft.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card18Reversed':{
    //     'name': 'landscape (Reversed)',
    //     'number': '18R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531507/ktnjl31o01x7hkbgjuxb.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card19':{
    //     'name': 'head face',
    //     'number': 19,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471401/vmdoqn4fszpv04xuqr9n.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card19Reversed':{
    //     'name': 'head face (Reversed)',
    //     'number': '19R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531468/g2sewtw3ggkjqcm9pnjl.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card20':{
    //     'name': 'black tree',
    //     'number': 20,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471305/hnusmhuijjdkezs4ab4l.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card20Reversed':{
    //     'name': 'black tree (Reversed)',
    //     'number': '20R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531413/okn9npb8dmh9b1zoo9pn.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card21':{
    //     'name': 'weeds',
    //     'number': 21,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471423/mq2qmoom7haykuppt9me.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card21Reversed':{
    //     'name': 'weeds (Reversed)',
    //     'number': '21R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531521/ixew28p41piautvay9jx.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card22':{
    //     'name': 'blue arch',
    //     'number': 22,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471435/dzcfnrumd7j8xosiqjj5.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card22Reversed':{
    //     'name': 'blue arch (Reversed)',
    //     'number': '22R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card23':{
    //     'name': 'black eye',
    //     'number': 23,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471408/hzucfodscqnqueeh1tg9.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card23Reversed':{
    //     'name': 'black eye (Reversed)',
    //     'number': '23R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531490/ygdml22nldmys1kuxd3z.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card24':{
    //     'name': 'green swirl',
    //     'number': 24,
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471509/odcdqhwbgcwcxuoqwdoj.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // },
    // 'card24Reversed':{
    //     'name': 'green swirl (Reversed)',
    //     'number': '24R',
    //     'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531612/bg3nzvonwkyckmivq8ah.jpg',
    //     'title':'home',
    //     'meaning': 'all safe'
    // }
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