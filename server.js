


import express from 'express';
import crypto from "crypto"
import mongoose from 'mongoose';
import cookie_parser from "cookie-parser"
import cors from 'cors';
import bodyParser from 'body-parser';
//const validator = require('validator');
import validator from 'validator'
//import { cpSync } from 'fs';
//let cookie_parser=require('cookie-parser')
const PORT = 5000;
const app = express();
const DB_url ="mongodb+srv://nikita:nikita@cluster0.vsujhaf.mongodb.net/?retryWrites=true&w=majority"
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

//app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
//app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});   


app.use(cookie_parser('1234'))


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
  date: String,
  logo: String,
  favourite: Array,
  bought: Array
});

const Post = mongoose.model('Post', postSchema);
//запросы регистрации


app.post('/register', async (req, res) => {
  let { username, email, password, date } = req.body;
  let sizeOfDatas = 0;
  let emaill=email
password=encrypt(password)
email=encrypt(email)
if (!validator.isEmail(emaill)) {
  res.json("is invalid")
  //console.log('Email is valid.');
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
  console.log("EM "+email, "Pas "+password)
  let sizeOdDatas=0
  try{
let isRegistered =false
    const posts = await Post.find({}, 'email username password id');
posts.forEach(item=> {
 console.log(item)
 console.log(item.email+":"+email)
 console.log(item.password+":"+password)
 if(item.email==email && item.password==password){
  console.log("find "+item.id)
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


//==================================================c
//Запрос id

app.post('/userId', async (req, res) => {
  //let { id} = req.body;
  let dataa=req.body
 console.log((dataa.id))
 let id=dataa.id
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
 neww: Boolean,
 //comments: Object
 comments: Array
 });
 const Post1 = mongoose.model('Shop', postSchema1);
app.post('/add', async (req, res) => {
  const {type, id, sale, price, country, title, logo, describtion, rate, neww} = req.body;
 
  try {
//  res(1)
//let comments={}
const post = await Post1.create({type, id, sale, price, country, title, logo, describtion, rate, neww,
 // comments: {}
 comments: []

});
console.log(post);
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
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    
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

// Ваш исправленный код на серверной стороне
/*
app.post('/item', async (req, res) => {
  try {
    const { id } = req.body; // Извлекаем 'id' из объекта req.body

    const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');

    const filteredPosts = posts.filter((item) => {
      return item.id === id; // Сравниваем 'id' с извлеченным значением
    });

    console.log(filteredPosts);
    res.json(filteredPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
});
*/




 app.post('/addComment', async (req, res) => {
  
  let { form, id, date, username, textComment } = req.body;
   try {
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
     const post = await Post1.findOne({ id });
    // console.log("this post1"+post)
     if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
  


   if (!post.comments || !Array.isArray(post.comments)) {
    post.comments = []; // Если свойства нет или не является массивом, создаем пустой массив
  }
  
  // Добавляем новый комментарий в массиzв commentsse
  const newComment={
    //  "text": form.comment,
    "text": textComment,
      "author": username,
      "id": post.comments.length,
      "date": date,
      "rate": form.rate
    }
 
   console.log(post)

  post.comments.push(newComment);
  
  // Результат с добавленным комментарием
  console.log(post);
    await post.save(); // Сохранить измxdенеxния в базе данных

    res.json(post)
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Failed to create a new postt.' });
   }
 });
 






 

 app.post('/removeComment', async (req, res) => {
  
  let { author, text, id, number } = req.body;
  console.log(number)
   try {
     const posts = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
     const post = await Post1.findOne({ id });
    const newComments = post.comments.filter((item,index) => {
      console.log(item.text+":"+text+":"+item.author+":"+author)
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
 
//=========================================




app.post('/addToFav', async (req, res) => {
  let sendValue = req.body;
  console.log("send"+JSON.stringify(sendValue));


  try {
    const name = sendValue.obj.user;
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
   // console.log("POOOOOOOOOOoo" +posts)j
    let post;
    const postsPurchases = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    posts.forEach(item => {
      console.log(item.username+":"+sendValue.obj.user)
      if (item.username == sendValue.obj.user) {
        post = item;
        console.log("yeeesss")
        console.log("ppost"+post)
      }
    });
      const purchaseItems = postsPurchases.filter(item => item.id == sendValue.idd);
      console.log("PURCHASED"+purchaseItems)
  
  console.log("POST"+post)
    post.favourite.push(...purchaseItems);
    await post.save();
    res.json("is added")
  //  console.log(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  }
 /* try {
    const name = sendValue.name;
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
   // console.log("POOOOOOOOOOoo" +posts)j
    let post;
    const postsPurchases = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    posts.forEach(item => {
      console.log(item.username+":"+sendValue.name)
      if (item.username == sendValue.name) {
        post = item;
        console.log("ppost"+post)
      }
    });

    const purchaseItems = postsPurchases.filter(item => item.id == sendValue.id);
//console.log("pur"+purchaseItems)
console.log("ppost"+post)
    post.favourite.push(...purchaseItems);
    await post.save();
    console.log(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.' });
  } */
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
    console.log("TGIIIIIIIIIS"+favourite)
    res.json({ fav: favourite, bough: bought });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve data from the database.', err });
  }
});


app.post('/removeFavv', async (req, res) => {
  let { id, name } = req.body;
  console.log("IDDD", id, name)
  try {
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    let post;
    const postsPurchases = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
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
  console.log("THISSS"+data, name)
  try {
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    let post;
    const postsPurchases = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    posts.forEach(async (item) => {
      if (item.username === name) {
        post = item;
       
        const prevPurchases=item.bought
        const prevFav=item.favourite
let newBought=item.bought.concat(prevFav)
item.bought=newBought
item.favourite=[]
//console.log("prev"+prevFav)
//console.log("new"+newBought)
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
      res.json([]); // Return an empty array or appropriate response if no matching post is found
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve data.', err });
  }
});











/*

app.post('/buy', async (req, res) => {
  let { tovId, name, userId } = req.body;
console.log("BUUUUY")
console.log(tovId, name, userId)
  try {
    const posts = await Post.find({}, 'email username password id date logo favourite bought');
    let post;
    const postsPurchases = await Post1.find({}, 'type id sale price country title logo describtion rate neww comments');
    let postBought;

    postsPurchases.forEach(item => {
      if (item.id == tovId) {
        postBought = item;
      }
    });

    posts.forEach(async (item) => {
      if (item.username === name) {
        post = item;
        post.bought.push(postBought);
        console.log("BOUGHT" + JSON.stringify(post.bought));
        await post.save();
        res.json(post); // Send the response here
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a new postt.', err });
  }
});
*/




app.post('/buy', async (req, res) => {
  try {
    const { tovId, name, userId } = req.body; // Destructure variables correctly

    const postBought = await Post1.findOne({ id: tovId }); // Find the bought post

    if (!postBought) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const userPost = await Post.findOne({ username: name }); // Find the user's post

    if (!userPost) {
      return res.status(404).json({ error: 'User not found' });
    }

    userPost.bought.push(postBought);
    await userPost.save();

    res.json(userPost); // Send the updated user post back
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

//npm install cors
