// const http = require('http')
// const path = require("path");
// const fs = require("fs");

// ՀԳ էս հին կոդս ա որի վրա հիմնականում փոփոխություն եմ արել, որ ընթացքումչէր աշխատում
// const server = http.createServer(function(req, res){
//     // let a = global.Path2D;
//     fs.readfile("./index.html", null, null)
//     // res.write(global.location.pathname)
//     res.end()
// })
// server.listen(2000);

// էս էն կոդն ա որ նայել եմ վիդեոյից
const http = require("http") //սահմանել ենք htto-ին
const fs = require("fs") //սահմանել ենք file system-ը, որ կարենանք այլ ֆայլեր կցենք մեր app.js-ին

let server = http.createServer(function(req, res){ //ստեղծել ենք սերվեր, որը ստանում ա 2 արժեք request & response
    res.writeHead(200, {"Content-Type": "text/html"}); // ավելացրել ենք հիդրներ, հայտ ուղարկել որ ամեն ինչ օկա, ու ասում ենք որ կցում ենք html ֆայլ
    let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8") // կցել ենք էն հղումը որտեղ գտնվում ա տվյալ ֆայլը, հետո ֆայլի անունը, ու utf8 որ հասկանա ինչա գրած ֆայլում
    myReadStream.pipe(res) // սրանով կանչում ենք վերևի ֆունկցիան, որը միշտ աշխատելու ա
    //ու չենք դնում res.end()-ը որ թարմացումները տեսնենք
})

server.listen(2000) // կանչում ենք սերվերը 2000 պորտով