


import express from 'express';
import crypto from "crypto"
import mongoose from 'mongoose';
import cookie_parser from "cookie-parser"
//let cookie_parser=require('cookie-parser')
const PORT = 5000;
const app = express();
const DB_url ="mongodb+srv://nikita:nikita@cluster0.vsujhaf.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json({ limit: '10mb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}); 
/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}); */
/*
const secretKey = 'secret';
function encrypt(text) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
} */


const postSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  id: String,
  date: String,
  logo: String
});

const Post = mongoose.model('Post', postSchema);
//запросы регистрации


app.post('/register', async (req, res) => {
  let { username, email, password, date } = req.body;
  let sizeOfDatas = 0;

  try {
    let isRegistered = false;
    const posts = await Post.find({}, 'email username password id date');
    posts.forEach((item) => {
      sizeOfDatas++;
      if (item.email == email) {
        isRegistered = true;
        res.json("is registered");
      }
    });

    if (!isRegistered) {
      let id = sizeOfDatas;
      let logo="https://gomelculture.by/wp-content/uploads/2023/01/Male-scaled.jpg"
      const post = await Post.create({ username, id, password, email, date, logo});
      res.json({id: id});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
});


mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  res.status(500).json({ error: 'Ошибка подключения к базе данных' });
});




app.post('/login', async (req, res) => {
  let { email,  password} = req.body;
  let sizeOdDatas=0
  try{
let isRegistered =false
    const posts = await Post.find({}, 'email username password id');
posts.forEach(item=> {
 // sizeOdDatas++;
 console.log(item)
 console.log(item.email+":"+email)
 console.log(item.password+":"+password)
 if(item.email==email && item.password==password){
  res.json({id: item.id})
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


//==================================================
//Запрос id

app.post('/userId', async (req, res) => {
  let { id} = req.body;
  let sizeOdDatas=0
  try{
let isRegistered =false
    const posts = await Post.find({}, 'email username password id date logo');
posts.forEach(item=> {

 console.log(item)

 if(item.id==id ){
  res.json({id: item.id, username: item.username, email: item.email, date: item.date, logo: item.logo})
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








app.use('/userImage', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.post('/userImage', async (req, res) => {
  let { id, logo} = req.body;
  let sizeOdDatas=0
  try{
    console.log("THISSSSSSSSSSSSSSSS"+logo)
let isRegistered =false
    const posts = await Post.find({}, 'email username password id date logo');
posts.forEach(item=> {

 //console.log(item)

 if(item.id==id ){
  item.logo=logo
  res.json({id: item.id, username: item.username, email: item.email, date: item.date, logo: item.logo})
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




//==========================================================
//запросы товаров
const postSchema1 = new mongoose.Schema({
  type: String,
  id: Number,
  sale: Boolean,
  price: Number,
  country: String, 
 title: String,
 logo: String,
 describtion: String,
 rate: Number,
 neww: Boolean
 });
 const Post1 = mongoose.model('Shop', postSchema1);
app.post('/add', async (req, res) => {
  const {type, id, sale, price, country, title, logo, describtion, rate, neww } = req.body;
 
  try {
//  res(1)
const post = await Post1.create({type, id, sale, price, country, title, logo, describtion, rate, neww});
console.log(post);
res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new post.' });
  }
});


app.get('/tovars', async (req, res) => {
  try {
    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww');
   
    res.json(posts);
    console.log(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});





app.post('/id', async (req, res) => {
  
 let { id } = req.body;
  try {
    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww');
   
   const filteredPosts=posts.filter((item)=> {
//return item.type==id
console.log(item.type+":"+id)
if(item.type==id){
  return item
}
   })
    console.log(filteredPosts)
    res.json(filteredPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
});






app.post('/item', async (req, res) => {
  
  let { id } = req.body;
   try {
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww');
    
    const filteredPosts=posts.filter((item)=> {
 //return item.type==id
 console.log(item.type+":"+id)
 if(item.id==id){
   return item
 }
    })
     console.log(filteredPosts)
     res.json(filteredPosts);
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Failed to create a new postt.' });
   }
 });
 

async function startApp() {
  try {
    await mongoose.connect(DB_url, { useUnifiedTopology: true, useNewUrlParser: true })
   
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT: ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }

}

startApp();  

