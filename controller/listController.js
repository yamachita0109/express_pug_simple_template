'use strict'
const express = require('express')
const router = express.Router()

const index = (req, res, next) => {
  // TODO ファイルから各項目を取得
  req.view = 'index'
  req.bind = {
    list: ['iOS', 'Android', 'Server']
  }
  next()
}

router.get('/', index)
module.exports = router
