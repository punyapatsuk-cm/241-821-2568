const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000

app.use(bodyParser.json());

let users = []
let counter = 1;

let conn = null;
const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

//path = GET /users สำหรับเก็บข้อมูล user ทั้งหมดที่มีในระบบ
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})


// path = POST /user
app.post('/users', async    (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user);
    res.json({
        message: 'User created successfully',
        data: results[0]
    });
});

// path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    //หา uesr จาก id 
    let selectedIndex = users.findIndex(user => user.id == id);

    // update ข้อมูล user
    if (updateUser.name) {
        users[selectedIndex].name = updateUser.name;
    }
    if (updateUser.email) {
        users[selectedIndex].email = updateUser.email;
    }

    // เอาข้อมูลที่ update ส่ง response กลับไป 
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    });
});

// path = DELETE /user/:id       
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;

    // user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // ลบ user ออกจาก array
    users.splice(selectedIndex, 1);
    res.json({
        message: 'User deleted successfully',
        indexDeleted: selectedIndex
    });
});

app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});