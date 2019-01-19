const express = require('express')
const Router = express.Router()

const conn = require('../utils/db')

Router.get('/categories', (req, res, next) => {
  const sql = 'SELECT * FROM categories'
  let obj = {Garrett: 'Richards'}

  conn.query(sql, (error, results, fields) => {
   obj.categories = results.filter(id => 
      id.parent_id === null 
    )

   obj.categories.map(cat => {
    let son = results.filter(id => {
      if(id.parent_id === cat.id) {
        return id
      }
    })
     
    cat.subcats = son 
    
    })
    console.log(results)
    res.json(
      obj
    )
  })
})

module.exports = Router