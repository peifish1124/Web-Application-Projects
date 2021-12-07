import express from 'express'
import Post from '../models/post'
import moment from 'moment'

const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)
router.get('/allPosts', async (req, res) => { 
    try {
        const existing = await Post.find({}).sort([['timestamp', -1]]);
        if(existing.length === 0){
            res.status(403).send({ message: 'error',data: null });
        } else {
            res.status(200).send({ message: 'success',data: existing });
        } 
    } catch (e) { 
        res.status(403).send({ message: 'error',data: null });
    }   
})

// TODO 3-(1): create the 2nd API (/api/postDetail)
router.get('/postDetail', async (req, res) => { 
    const pid = req.query.pid;
    try {
        const existing = await Post.findOne({postId:pid});
        if (existing) {
            res.status(200).send({ message: 'success',post: existing });
        }
        else {
            res.status(403).send({ message: 'error',post: null });
        }  
    } catch (e) { 
        res.status(403).send({ message: 'error',post: null });
    }   
})

// TODO 4-(1): create the 3rd API (/api/newPost)
router.post('/newPost', async (req, res) => { 
    const postId = req.body.postId;
    const title = req.body.title;
    const content = req.body.content;
    const timestamp = req.body.timestamp;
    try {
        const newPost = new Post({ postId: postId, title: title, content: content, timestamp: timestamp});
        newPost.save(); 
        res.status(200).send({ message: 'success' });
    } catch (e) { 
        res.status(403).send({ message: 'error', post: null });
    }   
})

// TODO 5-(1): create the 4th API (/api/post)
router.delete('/post', async (req, res) => { 
    const pid = req.query.pid;
    try {
        await Post.deleteOne({postId:pid});
        res.status(200).send({ message: 'success' });
    } catch (e) { 
        res.status(403).send({ message: 'error', post: null });
    }   
})

export default router