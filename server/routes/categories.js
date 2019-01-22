const express = require('express')
const Router = express.Router()

const conn = require('../utils/db')

Router.get('/categories', (req, res, next) => {
  const sql = `SELECT * FROM categories`
  let obj = {Garrett: 'Richards'}

  conn.query(sql, (err, results, fields) => {
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
    res.json(obj)
  })
})

Router.get('/listings/:category_id', (req, res, next) => {
  const sql = `SELECT * FROM listings WHERE category_id = ? `
  const value = [req.query.categoryId]
  
  conn.query(sql, value, (err, results, fields) => {
    if(value === categoryId){
      return value
    }

    console.log(results)
    res.json(results)
  })
})

Router.post('/listings', (req, res, next) => {
  const sql = `INSERT INTO listings (img, category_id, listing_name) VALUES (?, ?, ?)`
  const values = [req.body.img, req.body.categoryId, req.body.listingName]

  conn.query(sql, values, (err, results, fields) => {
    console.log(results)
    res.json({message: "Listing Added"})
  })

})

module.exports = Router