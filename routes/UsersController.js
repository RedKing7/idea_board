const express = require('express');
const router = express.Router();
const {User} = require('../db/schema');

router.get('/', async (req, res)=>{
   console.log('Hello, world!')
   try{
      const users = await User.find({});
      res.json(users);
   } catch(err){
      res.send(err);
   }
})

module.exports = router;