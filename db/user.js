const db = require('./db')
const jwt = require('jsonwebtoken');

//注册
function register(username, password, level) {
    let sql = `insert into user values('${username}', '${password}','${level}')`
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function login(username, password) {
    let sql = `select * from user where username='${username}' and password='${password}'`
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function selectUserList() {
    let sql = `select * from user where level = 1`
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    });
}

function selectAdminList() {
    let sql = `select * from user where level = 2`
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    });
}
module.exports = {
    register,
    login,
    selectUserList,
    selectAdminList
}