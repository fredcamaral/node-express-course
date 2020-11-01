const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.listen(8000, function () {
    console.log("server is running")
})

const mockUserData = [{
        name: 'Mark'
    },
    {
        name: 'Jill'
    }
]

server.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

server.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

server.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="fred";
    const mockPassword="12345";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              messagee: 'password and username do not match',
              pass: password,
              user: username
         })
    }
})