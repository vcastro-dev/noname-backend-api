import path from 'path'
import fs from 'fs'

import dirname from '../utils/path.js'
import userModel from '../models/user.js'

const config = {
    path: path.join(dirname, 'data', 'users.json')
}

export default {
    createUser({email, password} = data, callback = () => {}) {
        let user = userModel(email, password)
        fs.writeFile(config.path, JSON.stringify(user), callback)
    },
    readUser(callback) {
        fs.readFile(config.path, (err, fileContent) => {
            let users = []
            if(!err) {
                users = JSON.parse(fileContent)
            }
            
            callback(JSON.stringify(users))
        })
    },
    updateUser() {

    },
    deleteUser() {

    }
}