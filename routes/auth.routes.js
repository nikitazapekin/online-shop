const {Router} = require('express')
const config = require('config')
const router = Router()




router.post('/login', async (req, res) => {
    let { email,  password} = req.body;
    email=encrypt(email)
    password=encrypt(password)
    let sizeOdDatas=0
    try{
  let isRegistered =false
      const posts = await Post.find({}, 'email username password id');
  posts.forEach(item=> {
  
   if(item.email==email && item.password==password){
    res.json({id: item.id, name: item.username})
    isRegistered=true
   }
  
  })
  if(!isRegistered){
      res.json("is non registered")
  }
    } catch(err){
      console.error(err);
      res.status(500).json({ error: 'Failed to create a new postt.' , err});
    }
  })

  module.exports = router