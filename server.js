const express = require('express');
const server = express();

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