var express = require('express');
var router = express.Router();

let messages = [
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
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 2'
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
        text: 'ha ha ha 4'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 5'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 6'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 7'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 8'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 9'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 10'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 11'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 12'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 13'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 14'
    },
    {
        name: 'Abubakar Mughal',
        email: 'abu8632632@gmail.com',
        subject: 'some',
        phone: '03335166620',
        text: 'ha ha ha 15'
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
