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

Router.get('/listings/:slug', (req, res, next) => {
  const getSql ='SELECT id FROM categories WHERE slug = ?'

    conn.query(getSql, [req.params.slug], (error0, results0, fields0) => {
      const sql = `SELECT listings.img, listings.listing_name, listings.id, listings.description 
                   FROM listings 
                   LEFT JOIN categories ON listings.category_id = categories.id 
                   WHERE listings.category_id = ?`
      conn.query(sql, [results0[0].id, results0[0].id], (error, results, fields) => {
        res.json(results)
    })
  })
})


Router.post('/listings', (req, res, next) => {
  const getSql ='SELECT id FROM categories WHERE slug = ?'

    conn.query(getSql, [req.body.slug], (error0, results0, fields0) => {
      const sql = `INSERT INTO listings (img, listing_name, description, category_id) VALUES (?, ?, ?, ?)`
      const values = [req.body.image, req.body.listingName, req.body.description, results0[0].id]
 
      conn.query(sql, values, (err, results, fields) => {
        console.log(results)
        res.json({message: "Listing Added"})
      })
    })
 })

Router.get('/listing/:id', (req, res, next) => {
  const sql = `SELECT * FROM listings WHERE id = ?`
  const id =req.params.id

    conn.query(sql, [id], (err, results, fields) => {
      console.log(results)
      res.json(results)
    })
})

module.exports = Router