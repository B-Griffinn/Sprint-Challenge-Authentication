// Imports needed - express.Ruter() - users.model
const router = require('express').Router();
const Users = require('./users.model.js');

// Require Resricted MW
const restrictedMW = require('../auth/authenticate-middleware.js');

// GET all users IF restrictedMW passes
router.get('/', restrictedMW, (req, res) => {
    Users.find()
        .then(users => {
            if(users) {
                users.map(u => {
                    const { id, username } = u;
                    res.status(200).json({ id, username })
                })
            } else {
                res.status(401).json({ message: "You shall not pass." })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "There was a server error." })
        })
});

module.exports = router;
