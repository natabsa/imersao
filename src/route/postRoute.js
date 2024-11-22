import express from "express";
import {listAllPost, newPost, uploadImg} from "../controller/postController.js";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload=multer({ storage: storage });

const route=(app) => {

  // Middleware to parse JSON request bodies
  app.use(express.json());

  // GET route to handle requests to the '/post' endpoint
  app.get("/post", listAllPost);

  app.post("/post", newPost);

  app.post("/post/upload", upload.single("img"), uploadImg);
};

export default route;