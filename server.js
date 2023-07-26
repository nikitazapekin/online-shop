


import express from 'express';
import crypto from "crypto"
import mongoose from 'mongoose';
const PORT = 5000;
const app = express();
const DB_url ="mongodb+srv://nikita:nikita@cluster0.vsujhaf.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


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
}


const postSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  id: String,
});

const Post = mongoose.model('Post', postSchema);

app.post('/', async (req, res) => {
  //const {username, email, password, id } = req.body;
 let {username, email, password, id } = req.body;
  try {
   // const post = await Post.create({username, email, password, id  });
   email=encrypt(email)
   password=encrypt(password)
   const post = await Post.create({username,email, password, id});
    console.log(post);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
});
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({}, 'email username');
    const decryptedPosts = posts.map(post => ({
      ...post._doc,
      email: decrypt(post.email),
    }));

    res.json(decryptedPosts);
    console.log(decryptedPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});
app.post('/log', async (req, res) => {
  const {email, password } = req.body;
  console.log("body:" +email+":"+password)
  try {
  
    const posts = await Post.find({}, 'email password');

    Object.values(posts).forEach((item, index)=> {

//if(item.email==email && item.password==password){
  if(decrypt(item.email)==email && decrypt(item.password)==password){
  res.json("logged")
}
    })
    res.json("unlogged")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new post.' });
  }
});
//==========================================================

const postSchema1 = new mongoose.Schema({
  type: String,
  id: Number,
  sale: Boolean,
  price: Number,
  country: String, 
 title: String,
 logo: String,
 descrybtion: String,
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





async function startApp() {
  try {
    await mongoose.connect(DB_url, { useUnifiedTopology: true, useNewUrlParser: true })
   // await mongoose.connect(DB_url1, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT: ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }

}

startApp();  

