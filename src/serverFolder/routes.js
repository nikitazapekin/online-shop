// authRoutes.js
import express from 'express';
//import { encrypt, decrypt } from './crypto';
import Post from './post';
import validator from 'validator';
import { encrypt, decrypt } from './cryptAndEncrypt';
//import authRoutes from './authRoutes';

const router = express.Router();

router.post('/register', async (req, res) => {
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

router.post('/login', async (req, res) => {
  // Обработчик входа
});

router.post('/userId', async (req, res) => {
  // Обработчик получения данных пользователя
});

export default router;
