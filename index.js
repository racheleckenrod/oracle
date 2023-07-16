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
        'meaning': 'Ex commodo tempor mollit ex ullamco sunt nostrud irure reprehenderit irure Lorem consectetur proident do. Proident aliquip dolore proident elit quis nostrud laborum dolor elit. Dolore proident ex adipisicing ut tempor nulla amet et ex. Officia pariatur magna enim quis in nisi. Aliqua sint nostrud ad aliquip magna ea commodo. Labore id irure ullamco aliquip. Tempor minim amet ullamco do proident.' 

    },
    'card1Reversed':{
        'name': 'The Hanged (Reversed)',
        'number': '1R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531629/nfigp4ly8xuxpa0n4air.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531547/fubbbtxpcb9swnupew8i.jpg',
        'title':'home',
        'meaning': 'Laboris eiusmod ut proident amet magna enim qui non deserunt est reprehenderit. Pariatur quis laboris ut Lorem ea voluptate laboris aliquip sint aliquip eiusmod dolore. Nulla voluptate sunt ea sit qui quis excepteur veniam deserunt ad. Consectetur deserunt labore tempor eiusmod occaecat minim veniam in aliqua minim elit laboris sunt eu. Enim anim pariatur pariatur cupidatat eiusmod minim ad nulla id pariatur consequat.'
    },
    'card2':{
        'name': 'The Tower',
        'number': 2,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469658/b1nj8iutqtvzckklsznh.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471502/higniaa5iqap2xnmnrpx.jpg',
        'title':'home',
        'meaning': 'Nisi id culpa qui quis reprehenderit voluptate cillum velit do excepteur labore magna voluptate adipisicing. Sint ipsum nulla tempor velit sunt cillum ipsum tempor est nostrud laborum. Adipisicing tempor laborum eiusmod mollit id voluptate. Ad voluptate aliqua incididunt elit nisi nisi adipisicing. Id exercitation sint nostrud laborum dolor amet aute ad consequat pariatur. Quis adipisicing cillum ex irure ad pariatur dolore sint.'
    },
    'card2Reversed':{
        'name': 'The Tower (Reversed)',
        'number': '2R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531350/yufbdu1wcjiaoyfxyxzr.jpg',
        'img2': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531593/woy2nrkgkxojopc42jxg.jpg',
        'title':'home',
        'meaning': 'In laboris eiusmod mollit dolor amet anim. Ut minim non ut ex ipsum tempor qui fugiat. Non fugiat do sit officia cillum. Exercitation proident esse consequat incididunt excepteur est consectetur ad consectetur dolore mollit Lorem consequat consequat.'
    },
    'card3':{
        'name': 'Thorns',
        'number': 3,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471408/hzucfodscqnqueeh1tg9.jpg',
        'title':'home',
        'meaning': 'Minim consectetur tempor aliqua dolor. Fugiat id tempor cupidatat mollit non occaecat sint adipisicing nulla est nulla eu. Amet esse elit qui quis. Elit labore anim consequat amet ipsum nisi amet.'
    },
    'card3Reversed':{
        'name': 'Thorns (Reversed)',
        'number': '3R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531490/ygdml22nldmys1kuxd3z.jpg',
        'title':'home',
        'meaning': 'Amet non cillum sit anim qui irure id exercitation consectetur. Ex labore fugiat do proident adipisicing magna dolor exercitation sunt enim irure excepteur cupidatat. Enim do eu pariatur minim consequat velit cillum magna do. Labore mollit reprehenderit deserunt aliqua. Esse eiusmod commodo mollit cupidatat adipisicing et adipisicing pariatur sit duis.'
    },
    'card4':{
        'name': 'Blood',
        'number': 4,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471498/szlgctlamgekjpw5ugiw.jpg',
        'title':'home',
        'meaning': 'Deserunt adipisicing pariatur Lorem deserunt voluptate proident enim ad sunt ipsum cillum. Incididunt sunt anim eu deserunt exercitation sit magna cillum magna voluptate duis in. Nostrud aute commodo sunt sit est consequat irure ea incididunt exercitation irure. Duis excepteur cupidatat cupidatat qui ad incididunt in. Laborum elit do non laboris velit in ipsum esse enim anim aliquip sit reprehenderit. Magna commodo incididunt incididunt anim aliquip adipisicing minim.'
    },
    'card4Reversed':{
        'name': 'Blood (Reversed)',
        'number': '4R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531556/hlpp43fygjpoyincc5rc.jpg',
        'title':'home',
        'meaning': 'Exercitation labore deserunt et ullamco eiusmod do nulla tempor ipsum excepteur ex esse. Sit ea ad ad ut quis fugiat. Lorem cupidatat nulla anim ullamco enim irure id duis est amet. Officia voluptate sint anim occaecat ullamco ea sint eu nisi in.'
    },
    'card5':{
        'name': 'Masquerade',
        'number': 5,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471401/vmdoqn4fszpv04xuqr9n.jpg',
        'title':'home',
        'meaning': 'Eu sit sunt consectetur ullamco consectetur exercitation nostrud dolor mollit occaecat. Excepteur culpa et et incididunt nulla cupidatat do. Cillum occaecat laboris id ex duis anim sunt est elit tempor aliquip sint. Minim reprehenderit tempor nulla non cupidatat exercitation occaecat ullamco dolore tempor. Ex qui culpa cillum excepteur deserunt labore. Aliqua et cillum non aliquip est.'
    },
    'card5Reversed':{
        'name': 'Masquerade (Reversed)',
        'number': '5R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531468/g2sewtw3ggkjqcm9pnjl.jpg',
        'title':'home',
        'meaning': 'Aute tempor exercitation ex laborum. Laborum culpa ipsum anim irure culpa veniam sunt cillum cillum ipsum amet. Nulla anim elit aliquip culpa enim pariatur excepteur. Lorem mollit sit mollit dolore nostrud.'
    },
    'card6':{
        'name': 'Re-emergence',
        'number': 6,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471349/mhjvzrlaivppylnpqxsy.jpg',
        'title':'home',
        'meaning': 'Dolore nulla mollit consequat eu Lorem ex ipsum veniam. Eu aliqua occaecat ipsum in incididunt excepteur Lorem. Quis Lorem sit occaecat ex id deserunt labore adipisicing.'
    },
    'card6Reversed':{
        'name': 'Re-emergence (Reversed)',
        'number': '6R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
        'title':'home',
        'meaning': 'Deserunt velit culpa exercitation ullamco. Duis exercitation eu magna enim ea culpa enim veniam culpa commodo. Ea esse consequat qui adipisicing elit. Ipsum nulla amet ipsum excepteur ipsum cupidatat aliquip.'
    },
    'card7':{
        'name': 'Growth from Ashes',
        'number': 7,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471423/mq2qmoom7haykuppt9me.jpg',
        'title':'home',
        'meaning': 'Ad nisi culpa occaecat consectetur cupidatat eu ipsum exercitation. Pariatur consectetur est duis ad magna in Lorem. Elit velit minim do quis nostrud non proident. Eu sint sunt qui nostrud mollit sit irure aute excepteur eu. Ad do est veniam ex proident.'
    },
    'card7Reversed':{
        'name': 'Growth from Ashes (Reversed)',
        'number': '7R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531521/ixew28p41piautvay9jx.jpg',
        'title':'home',
        'meaning': 'Magna excepteur exercitation voluptate sit cillum do quis ea sit reprehenderit. Occaecat culpa laboris enim dolor consequat enim nisi ipsum dolore quis. Irure ullamco magna aliquip consectetur. Occaecat sit labore non minim irure ut. Pariatur et est minim fugiat aute ipsum nostrud non laborum ad irure minim adipisicing.'
    },
    'card8':{
        'name': 'Nature Helpers',
        'number': 8,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471500/vxhp5ckfztzhzkokxehf.jpg',
        'title':'home',
        'meaning': 'Ut laboris excepteur deserunt ipsum adipisicing enim tempor nulla aliquip dolore. Deserunt eu culpa ad exercitation eu laboris. Pariatur laboris quis sint consectetur quis et duis velit.'
    },
    'card8Reversed':{
        'name': 'Nature Helpers (Reversed)',
        'number': '8R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531584/dqf0sx3dwoxqvgsme2lm.jpg',
        'title':'home',
        'meaning': 'Sunt sint tempor consectetur irure occaecat elit. Nisi magna adipisicing voluptate aliquip est ipsum Lorem officia cillum eiusmod consectetur ex quis ad. Lorem et ea cillum consequat ut elit. Cupidatat sint voluptate adipisicing do esse adipisicing. Duis anim exercitation proident culpa occaecat Lorem non consequat irure nostrud laboris excepteur commodo qui.'
    },
    'card9':{
        'name': 'Nurture the Seeds',
        'number': 9,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471508/w33dyf7mluxx35jdf3ha.jpg',
        'title':'home',
        'meaning': 'Ad cupidatat eiusmod laborum officia mollit occaecat. Voluptate consequat magna aliquip eiusmod reprehenderit sint dolor reprehenderit eiusmod irure amet voluptate sunt. Cillum quis et incididunt qui eu exercitation commodo magna.'
    },
    'card9Reversed':{
        'name': 'Nurture the Seeds (Reversed)',
        'number': '9R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531602/kzfar5jgw6elxpxcjcuw.jpg',
        'title':'home',
        'meaning': 'Eu ut ut laborum culpa exercitation dolore cillum magna ea. Laborum eiusmod pariatur sunt laborum sit sint nostrud laborum Lorem ad. Elit et tempor culpa aute aliqua minim aliqua id. Esse excepteur tempor irure proident veniam consequat enim reprehenderit est laboris aliqua aliquip laborum sint. Quis reprehenderit labore exercitation cillum proident nostrud sint ut duis in sunt.'
    },
    'card10':{
        'name': 'Sovereign',
        'number': 10,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471332/lj8jcxsgtzjbefpzzcow.jpg',
        'title':'home',
        'meaning': 'Non irure cupidatat est aliqua nulla laborum id non sunt sit cupidatat ullamco voluptate. Cillum cupidatat eu ullamco reprehenderit cillum sit mollit voluptate minim occaecat eu. Commodo do adipisicing sit elit culpa culpa amet voluptate veniam est nostrud. Amet ea elit elit et incididunt pariatur est sunt amet labore aliquip consectetur et.'
    },
    'card10Reversed':{
        'name': 'Sovereign (Reversed)',
        'number': '10R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531434/qg3njy8cq7qgcx8dm5cd.jpg',
        'title':'home',
        'meaning': 'Labore mollit excepteur pariatur est sit ad aliqua quis fugiat velit duis. Esse amet fugiat velit mollit dolor esse Lorem dolor exercitation amet. Enim pariatur officia consequat anim ad nostrud excepteur id eu qui enim aliqua.'
    },
    'card11':{
        'name': 'Soul Treasures',
        'number': 11,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471502/higniaa5iqap2xnmnrpx.jpg',
        'title':'home',
        'meaning': 'Nisi id culpa qui quis reprehenderit voluptate cillum velit do excepteur labore magna voluptate adipisicing. Sint ipsum nulla tempor velit sunt cillum ipsum tempor est nostrud laborum. Adipisicing tempor laborum eiusmod mollit id voluptate. Ad voluptate aliqua incididunt elit nisi nisi adipisicing. Id exercitation sint nostrud laborum dolor amet aute ad consequat pariatur. Quis adipisicing cillum ex irure ad pariatur dolore sint.'
    },
    'card11Reversed':{
        'name': 'Soul Treasures (Reversed)',
        'number': '11R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531593/woy2nrkgkxojopc42jxg.jpg',
        'title':'home',
        'meaning': 'In laboris eiusmod mollit dolor amet anim. Ut minim non ut ex ipsum tempor qui fugiat. Non fugiat do sit officia cillum. Exercitation proident esse consequat incididunt excepteur est consectetur ad consectetur dolore mollit Lorem consequat consequat.'
    },
    'card12':{
        'name': 'Enchanted Forest',
        'number': 12,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471412/m2w7qo11vfq6o7mp7gft.jpg',
        'title':'home',
        'meaning': 'Amet deserunt aliqua nostrud elit commodo commodo dolore commodo occaecat qui minim. Laboris irure cupidatat officia duis. Duis exercitation voluptate aute voluptate nostrud cillum duis mollit cillum.'
    },
    'card12Reversed':{
        'name': 'Enchanted Forest (Reversed)',
        'number': '12R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531507/ktnjl31o01x7hkbgjuxb.jpg',
        'title':'home',
        'meaning': 'Magna ex aute minim incididunt sit. Et do labore proident non ullamco reprehenderit quis eu ex voluptate fugiat excepteur sunt. Adipisicing et consectetur deserunt quis dolore veniam dolore elit occaecat nisi anim sunt. Ullamco eu laboris culpa pariatur nulla nostrud quis non fugiat cillum velit veniam ut.'
    },
    'card13':{
        'name': 'Safe',
        'number': 13,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471526/quaunhtavltuvbzncltg.jpg',
        'title':'home',
        'meaning': 'Exercitation magna minim id consequat adipisicing exercitation magna anim anim officia nostrud ullamco. Ipsum labore ex culpa consequat minim. Ullamco voluptate exercitation aliquip enim.'
    },
    'card13Reversed':{
        'name': 'Safe (Reversed)',
        'number': '13R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531653/pqmq6h7yyinn2recgyja.jpg',
        'title':'home',
        'meaning': 'Exercitation nulla voluptate nostrud incididunt. Adipisicing cillum culpa incididunt cupidatat officia eiusmod cillum in reprehenderit exercitation cupidatat. Elit do voluptate cupidatat tempor laborum sunt deserunt in occaecat culpa.'
    },
    'card14':{
        'name': 'Vision',
        'number': 14,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471494/mcclnq3mslwcasw74oqk.jpg',
        'title':'home',
        'meaning': 'Esse Lorem amet mollit irure id. Nostrud labore sunt non culpa incididunt tempor dolore sit nostrud dolor. Elit do nostrud magna ipsum exercitation cupidatat consectetur.'
    },
    'card14Reversed':{
        'name': 'Vision (Reversed)',
        'number': '14R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531576/auqjhic5i18xnuo6fspc.jpg',
        'title':'home',
        'meaning': 'Ut et officia ipsum cillum aute occaecat reprehenderit labore do commodo exercitation ipsum cupidatat cupidatat. Qui cillum sint qui ut culpa do et elit nulla consequat ullamco occaecat quis. Consectetur nostrud aliqua adipisicing mollit anim do reprehenderit reprehenderit labore quis eu.'
    },
    'card15':{
        'name': 'Dream Life',
        'number': 15,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471503/bv1gjgpabivimrcie3ip.jpg',
        'title':'home',
        'meaning': 'Eiusmod dolore exercitation non quis quis. Velit dolore est tempor commodo magna est deserunt. Adipisicing ut et ea labore eu non in et proident ad nisi ea veniam. Proident enim labore cupidatat laboris. Consequat ad consequat dolore laborum excepteur occaecat duis nostrud tempor ex duis elit. Irure eu dolore mollit non.'
    },
    'card15Reversed':{
        'name': 'Dream Life (Reversed)',
        'number': '15R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531567/t6f1zrrbm77f1ldu5dzj.jpg',
        'title':'home',
        'meaning': 'Nisi culpa sint non veniam quis. Eiusmod commodo eiusmod enim dolor amet ex sint cupidatat est. In enim Lorem minim fugiat mollit velit tempor excepteur tempor fugiat nisi culpa. Elit incididunt aliquip do commodo voluptate est aliqua officia tempor.'
    },
    'card16':{
        'name': 'As Above So Below',
        'number': 16,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471405/swzuysd09vdfshqpm6u7.jpg',
        'title':'home',
        'meaning': 'Ad dolor nulla eu enim esse aliqua commodo laboris ad. Minim sint nulla ex deserunt nostrud officia magna proident irure adipisicing. Esse exercitation do sunt est officia eu aliquip occaecat incididunt magna consequat. Adipisicing veniam dolor nisi sunt enim Lorem est occaecat irure voluptate excepteur laborum voluptate. Proident qui esse amet consequat commodo culpa sit velit qui aliqua sit labore. Aute eiusmod ullamco anim occaecat qui sint culpa tempor anim velit cillum.'
    },
    'card16Reversed':{
        'name': 'As Above So Below (Reversed)',
        'number': '16R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531480/na8nvmw1zb5g0dr4cv1z.jpg',
        'title':'home',
        'meaning': 'Do ut do duis elit nostrud incididunt consequat quis eiusmod ipsum nisi et. Nostrud fugiat quis consectetur irure laborum id aliquip ea nostrud sunt mollit ea. Consectetur non amet cillum amet ipsum enim sit quis qui. Mollit aliqua proident exercitation proident mollit dolore sit adipisicing irure. Mollit ea aliquip enim incididunt sint voluptate ullamco proident. Adipisicing esse non voluptate duis ullamco eiusmod ex nisi.'
    },
    'card17':{
        'name': 'You Are a Force',
        'number': 17,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469696/ic9jjgyri9bvbqgjuij2.jpg',
        'title':'home',
        'meaning': 'Fugiat enim commodo nostrud proident. Dolor sit esse Lorem voluptate duis ad do ipsum sunt est irure. Deserunt qui deserunt pariatur duis eu. Tempor excepteur enim ullamco nisi deserunt magna minim consequat Lorem eu Lorem dolor. Pariatur voluptate sunt magna nulla ut aliquip exercitation officia laboris sit Lorem Lorem cillum. Cillum excepteur ut eiusmod nulla fugiat do laborum reprehenderit occaecat ea culpa nisi pariatur irure.'
    },
    'card17Reversed':{
        'name': 'You Are a Force (Reversed)',
        'number': '17R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531321/dughupjg3luzwsjjewzl.jpg',
        'title':'home',
        'meaning': 'Mollit deserunt quis ea nulla occaecat aliquip duis aute duis. Ullamco nostrud nostrud exercitation incididunt excepteur culpa cillum commodo quis qui esse labore do. Incididunt occaecat mollit Lorem laborum officia ex elit. Exercitation occaecat nulla id enim officia et aute labore reprehenderit deserunt eiusmod enim sit voluptate.'
    },
    'card18':{
        'name': 'Cyclone',
        'number': 18,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471435/dzcfnrumd7j8xosiqjj5.jpg',
        'title':'home',
        'meaning': 'Aute anim cillum ullamco culpa quis voluptate excepteur mollit. Nisi deserunt ea ut deserunt proident laborum sint nulla. Aliqua et minim est deserunt nisi do in culpa nisi ea consequat sit sit velit. Aliquip sit adipisicing pariatur eu reprehenderit consequat laboris. Enim nostrud elit commodo sunt anim non cupidatat pariatur cillum veniam veniam non aute enim.'
    },
    'card18Reversed':{
        'name': 'Cyclone (Reversed)',
        'number': '18R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531531/vjk0dbn7b4uocdq4uitz.jpg',
        'title':'home',
        'meaning': 'Aliqua sint duis dolore aliquip officia est. Cillum dolor eiusmod quis enim consectetur laborum laboris. Aute est occaecat proident et magna voluptate non cupidatat. Amet velit duis quis exercitation amet anim eiusmod mollit.'
    },
    'card19':{
        'name': 'Healing',
        'number': 19,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471486/agxk2bay6dae2vyqxggy.jpg',
        'title':'home',
        'meaning': 'Ex commodo tempor mollit ex ullamco sunt nostrud irure reprehenderit irure Lorem consectetur proident do. Proident aliquip dolore proident elit quis nostrud laborum dolor elit. Dolore proident ex adipisicing ut tempor nulla amet et ex. Officia pariatur magna enim quis in nisi. Aliqua sint nostrud ad aliquip magna ea commodo. Labore id irure ullamco aliquip. Tempor minim amet ullamco do proident.' 

    },
    'card19Reversed':{
        'name': 'Healing (Reversed)',
        'number': '19R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531547/fubbbtxpcb9swnupew8i.jpg',
        'title':'home',
        'meaning': 'Laboris eiusmod ut proident amet magna enim qui non deserunt est reprehenderit. Pariatur quis laboris ut Lorem ea voluptate laboris aliquip sint aliquip eiusmod dolore. Nulla voluptate sunt ea sit qui quis excepteur veniam deserunt ad. Consectetur deserunt labore tempor eiusmod occaecat minim veniam in aliqua minim elit laboris sunt eu. Enim anim pariatur pariatur cupidatat eiusmod minim ad nulla id pariatur consequat.'
    },
    'card20':{
        'name': 'Your Gold',
        'number': 20,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469723/kokuiuqk9fi99p9w5own.jpg',
        'title':'home',
        'meaning': 'Dolore ea voluptate magna aliquip Lorem ea quis magna enim. Amet mollit consequat eiusmod reprehenderit deserunt irure mollit et quis pariatur sit deserunt aute. Lorem in minim do nisi laborum nostrud consectetur laboris tempor elit ad sunt. Aute fugiat mollit cillum ea. Duis veniam labore consequat sit officia excepteur proident enim mollit velit reprehenderit duis consequat anim. Esse incididunt dolor magna magna consectetur ut ad amet eiusmod tempor deserunt culpa non Lorem.'
    },
    'card20Reversed':{
        'name': 'Your Gold (Reversed)',
        'number': '20R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531284/g1uyocbyrzpn1etfeuib.jpg',
        'title':'home',
        'meaning': 'Laboris veniam exercitation ipsum sint veniam. Laborum id occaecat elit non in quis consectetur non velit esse deserunt in. Aute labore non incididunt ea veniam esse excepteur voluptate magna dolor sunt cillum. Sint magna irure irure aliqua enim enim voluptate. Sit pariatur aute ut laboris Lorem veniam.'
    },
    'card21':{
        'name': 'Snake',
        'number': 21,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471509/odcdqhwbgcwcxuoqwdoj.jpg',
        'title':'home',
        'meaning': 'Consectetur nostrud duis non labore sint esse minim ea tempor laborum amet. Deserunt dolore do qui tempor officia commodo cupidatat id eu proident in qui. Irure non irure laborum aliqua adipisicing.'
    },
    'card21Reversed':{
        'name': 'Snake (Reversed)',
        'number': '21R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531612/bg3nzvonwkyckmivq8ah.jpg',
        'title':'home',
        'meaning': 'Occaecat amet aliquip proident elit in et officia qui Lorem excepteur. Do laboris consectetur minim esse laboris commodo minim laboris. Reprehenderit sint adipisicing pariatur sit sint reprehenderit fugiat laboris adipisicing aute ex aliqua aliquip. Velit veniam consequat quis magna proident ipsum magna incididunt fugiat Lorem cupidatat nostrud. Do exercitation exercitation elit ea do voluptate incididunt ex reprehenderit fugiat cupidatat. Id reprehenderit consectetur occaecat magna et amet aute. Officia ut anim non nisi esse ad ad consectetur magna in incididunt anim.'
    },
    'card22':{
        'name': 'Tree',
        'number': 22,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471305/hnusmhuijjdkezs4ab4l.jpg',
        'title':'home',
        'meaning': 'Sint nisi voluptate deserunt qui quis. Aliquip ad elit adipisicing elit aliqua proident. Sit aliqua eu id nisi ut sit adipisicing ad mollit proident. Laboris anim sit ex veniam laboris eiusmod cillum. Qui qui aliquip elit ipsum qui mollit pariatur ex officia.'
    },
    'card22Reversed':{
        'name': 'Tree (Reversed)',
        'number': '22R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531413/okn9npb8dmh9b1zoo9pn.jpg',
        'title':'home',
        'meaning': 'Occaecat ea aliquip in ad nostrud irure dolore dolore tempor reprehenderit esse magna. Veniam consequat dolore aute pariatur mollit nulla ad ut tempor cillum culpa adipisicing magna nulla. Et amet est duis quis consequat culpa.'
    },
    'card23':{
        'name': 'Your Beauty Blossoms',
        'number': 23,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687469681/firuopkccw1amjveyzuc.jpg',
        'title':'home',
        'meaning': 'Et ad sit nisi commodo do. Ipsum deserunt minim cillum ea enim elit ullamco incididunt quis magna voluptate aliqua laboris cupidatat. Exercitation nulla enim culpa elit. Nulla velit in adipisicing enim tempor. Id tempor excepteur nostrud cillum esse irure.'
    },
    'card23Reversed':{
        'name': 'Your Beauty Blossoms (Reversed)',
        'number': '23R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531338/puitzkyinsboirq6kpzi.jpg',
        'title':'home',
        'meaning': 'Nisi minim aliqua ad sit et incididunt exercitation consectetur dolor duis cillum. Enim aliquip et laboris anim enim. Lorem consequat qui minim elit ea officia anim. Veniam deserunt cillum consectetur cillum adipisicing sint. Incididunt aliqua ad do aute mollit enim cillum mollit veniam reprehenderit sint amet id nulla. Tempor ex ex aliqua do exercitation amet reprehenderit officia veniam nostrud pariatur officia officia.'
    },
    'card24':{
        'name': 'Free',
        'number': 24,
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687471512/jdr4dghytkkeoaggtjnx.jpg',
        'title':'home',
        'meaning': 'Pariatur laboris nisi do ut voluptate et. Exercitation quis ea non ipsum exercitation id cillum. Qui laborum adipisicing quis veniam voluptate in est officia in mollit sit eiusmod ipsum reprehenderit. Fugiat excepteur adipisicing laborum incididunt culpa labore cupidatat deserunt proident veniam. Sunt sunt mollit Lorem cillum cillum minim laborum. Tempor non aliqua magna elit eiusmod laborum non amet do officia anim eiusmod sunt ea.'
    },
    'card24Reversed':{
        'name': 'Free (Reversed)',
        'number': '24R',
        'img': 'https://res.cloudinary.com/dd9ld7dot/image/upload/v1687531620/hrkxc0dndpxndzp6blam.jpg',
        'title':'home',
        'meaning': 'Incididunt aliquip id reprehenderit ex cillum pariatur aliquip. Tempor sint enim do ex ea ullamco deserunt irure quis ea. Irure nostrud enim labore enim culpa eu. Occaecat sint enim dolore ullamco eu do exercitation dolor cillum excepteur ipsum laborum aute. Pariatur nostrud esse sint consectetur cupidatat exercitation.'
    },
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