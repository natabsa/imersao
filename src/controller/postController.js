import { getAllPost, createPost, putDBPost } from "../model/postModel.js";
import genDesc from "../service/geminiService.js"
import fs from "fs";
export async function listAllPost(req, res) {
  // Retrieve all posts and send with 200 OK
  res.status(200).json(await getAllPost());
}

export async function newPost(req, res) {
  try {
    res.status(200).json(await createPost(req.body));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Fail on create post" });
  }
}

export async function uploadImg(req, res){

  try {
    res.status(200).json(await createPost({desc: "", title: "", imgurl: req.file.originalname}));
  } catch(error) {
    console.error(error.toString());
    res.status(500).json({ Error: "Fail on upload image" });
  }
}  
  
  
  export async function putPost(req, res){
    try{
      
      res.status(200).json(await putDBPost(req.params.id, {desc: await genDesc(fs.readFile(`upload/${req.params.id}.jpg`)), title: req.body.title, imgurl: `http://localhost:3000/${req.params.id}.jpg`}));
    }catch(error){
      console.error(error.message);
      res.status(500).json({ Error: "Fail on update post" });
    }
  }