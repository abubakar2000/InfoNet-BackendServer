var express = require('express');
var router = express.Router();

let messages = [
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 3'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 0'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 1'
    },
]

// {
//     name: 'Abubakar Mughal',
//     email: 'abu8632632@gmail.com',
//     subject: 'some',
//     phone: '03335166620',
//     text: 'ha ha ha'
// }

router.post('/', function (req, res, next) {
    if (messages.findIndex(r => (r.email === req.body.email || r.phone === req.body.phone)
        && r.text === req.body.text
    ) === -1) {
        messages.push(req.body);
        console.log("UNIQUE");
        res.sendStatus(200);
    } else {
        console.log("DUP");
        res.sendStatus(201);
    }
    console.log(messages);
});

router.get('/getMessages', function (req, res, next) {
    res.send(messages);
});



module.exports = router;
