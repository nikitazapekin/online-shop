


import express from 'express';
import crypto from "crypto"
import mongoose from 'mongoose';
import cookie_parser from "cookie-parser"
import cors from 'cors';
import bodyParser from 'body-parser';
import validator from 'validator'
import { encrypt, decrypt } from './src/serverFolder/cryptAndEncrypt.js';
const PORT = 5000;
const app = express();
const DB_url ="mongodb+srv://nikita:nikita@cluster0.vsujhaf.mongodb.net/?retryWrites=true&w=majority"
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});   
app.use(cookie_parser('1234'))
const postSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  id: String,
  date: String,
  logo: String,
  favourite: Array,
  bought: Array
});

//app.use('/auth', authRoutes);
const Post = mongoose.model('Post', postSchema);
app.post('/register', async (req, res) => {
  let { username, email, password, date } = req.body;
  let sizeOfDatas = 0;
  let emaill=email
password=encrypt(password)
email=encrypt(email)
if (!validator.isEmail(emaill)) {
  res.json("is invalid")
} else {
  console.log('Email is invalid.');
//}
  try {
    let isRegistered = false;
    const posts = await Post.find({}, 'email username password id date');
    posts.forEach((item) => {
      sizeOfDatas++;
      if ((item.email) ==(email)) {
        isRegistered = true;
        res.json("is registered");
      }
    });

    if (!isRegistered) {
      let id = sizeOfDatas;
      let logo="https://gomelculture.by/wp-content/uploads/2023/01/Male-scaled.jpg"
      const favourite=[]
      const bought=[]
    
      const post = await Post.create({ username, id, password, email, date, logo, favourite, bought});
      if (!post.favourite || !Array.isArray(post.favourite)) {
        post.favourite = [];
      }
      if (!post.bought || !Array.isArray(post.bought)) {
        post.bought = [];
      }
      post.save()
      res.json({id: id});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
}
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  res.status(500).json({ error: 'Ошибка подключения к базе данных' });
});


app.post('/login', async (req, res) => {
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
app.post('/userId', async (req, res) => {
  let dataa=req.body
 let id=dataa.id
  let sizeOdDatas=0
  try{
let isRegistered =false
    const posts = await Post.find({}, 'email username password id date logo');
posts.forEach(item=> {
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
  try{
let isRegistered =false
    const posts = await Post.find({}, 'email username password id date logo');
posts.forEach(item=> {
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
 neww: Boolean,
 comments: Array
 });
 const Post1 = mongoose.model('Shop', postSchema1);
app.post('/add', async (req, res) => {
  const {type, id, sale, price, country, title, logo, describtion, rate, neww} = req.body;
 
  try {
const post = await Post1.create({type, id, sale, price, country, title, logo, describtion, rate, neww,
 comments: []

});
res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new post.' });
  }
});


app.get('/tovars', async (req, res) => {
  try {
    const { _limit, _page } = req.query;
    const limit = parseInt(_limit) || 20;
    const page = parseInt(_page) || 1;
    const totalCount = await Post1.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);

    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww')
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      data: posts,
      total_pages: totalPages,
      current_page: page,
      total_count: totalCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});

app.get('/tovarss', async (req, res) => {
  try {
    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww')
    res.json({
      data: posts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});
app.get('/tovarss', async (req, res) => {
  try {
    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww')
    res.json(
   posts
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});

app.post('/id', async (req, res) => {
  
 let { id } = req.body;
  try {
    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
   
   const filteredPosts=posts.filter((item)=> {
if(item.type==id){
  return item
}
   })
    res.json(filteredPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
});
app.post('/item', async (req, res) => {
  
  let { id } = req.body;
   try {
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    
    const filteredPosts=posts.filter((item)=> {
 if(item.id==id){
   return item
 }
    })
     res.json(filteredPosts);
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Failed to create a new postt.' });
   }
 });
 app.post('/addComment', async (req, res) => {
  
  let { form, id, date, username, textComment } = req.body;
   try {
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
     const post = await Post1.findOne({ id });
     if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
   if (!post.comments || !Array.isArray(post.comments)) {
    post.comments = []; // Если свойства нет или не является массивом, создаем пустой массив
  }
  const newComment={
    "text": textComment,
      "author": username,
      "id": post.comments.length,
      "date": date,
      "rate": form.rate
    }

  post.comments.push(newComment);
    await post.save(); // Сохранить измxdенеxния в базе данных
    res.json(post)
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Failed to create a new postt.' });
   }
 });
 app.post('/removeComment', async (req, res) => {
  
  let { author, text, id, number } = req.body;
   try {
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
     const post = await Post1.findOne({ id });
    const newComments = post.comments.filter((item,index) => {
      if(number!=index){
        return true
      }
      else {
        return false
      }
    });
   
    post.comments.splice(0, post.comments.length);
    post.comments.push(newComments);
    await post.save(); 
   res.json("sss")
   
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Failed to create a new postt.' });
   }
 });

app.post('/addToFav', async (req, res) => {
  let sendValue = req.body;
  try {
    const name = sendValue.obj.user;
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    let post;
    const postsPurchases = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    posts.forEach(item => {
      if (item.username == sendValue.obj.user) {
        post = item;
      }
    });
      const purchaseItems = postsPurchases.filter(item => item.id == sendValue.idd);
    post.favourite.push(...purchaseItems);
    await post.save();
    res.json("is added")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
 
});
app.post('/favv', async (req, res) => {
  try {
   
    const { name } = req.body;
   if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Invalid name provided.' });
    }
 
   
    const post = await Post.findOne({ username: name }, 'email username password id date logo favourite bought');
    if (!post) {
      return res.status(404).json({ error: 'User not found.' });
    } 
    const { favourite, bought } = post;
    res.json({ fav: favourite, bough: bought });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve data from the database.', err });
  }
});
app.post('/removeFavv', async (req, res) => {
  let { id, name } = req.body;
  try {
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    let post;
    posts.forEach(async (item) => {
      if (item.username === name) {
        post = item;
        const newPost = post.favourite.filter((item) => item.id !== id);
        item.favourite = newPost;
        await item.save(); 
      }
    });
    posts.forEach(item=> {
      if (item.username === name) {
        res.json(item.favourite);
      }
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.', err });
  }
});
app.post('/removeAllFavv', async (req, res) => {
  let {data, name } = req.body;
  try {
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    posts.forEach(async (item) => {
      if (item.username === name) {
        post = item;
        const prevFav=item.favourite
let newBought=item.bought.concat(prevFav)
item.bought=newBought
item.favourite=[]
        await item.save(); 
      }
    });
    posts.forEach(item=> {
      if (item.username === name) {
        res.json(item.favourite);
      }
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.', err });
  }
});
app.post('/bought', async (req, res) => {
  const { name } = req.body;
  console.log(name);
  
  try {
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    
    const post = posts.find(item => item.username === name);

    if (post) {
      res.json(post.bought);
    } else {
      res.json([]); 
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve data.', err });
  }
});
app.post('/buy', async (req, res) => {
  try {
    const { tovId, name, userId } = req.body; 

    const postBought = await Post1.findOne({ id: tovId }); 

    if (!postBought) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const userPost = await Post.findOne({ username: name }); 
    if (!userPost) {
      return res.status(404).json({ error: 'User not found' });
    }

    userPost.bought.push(postBought);
    await userPost.save();
    res.json(userPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process the request' });
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

