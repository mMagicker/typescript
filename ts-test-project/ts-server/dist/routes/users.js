"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/userInfo', function (req, res, next) {
    console.log(req);
    res.send('respond with a resource');
});
module.exports = router;
