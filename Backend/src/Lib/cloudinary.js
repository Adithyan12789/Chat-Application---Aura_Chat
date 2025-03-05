import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dgnigyanq",
  api_key: process.env.CLOUDINARY_API_KEY || "225211263612465",
  api_secret: process.env.CLOUDINARY_API_SECRET || "6rLli55ti2dPg9Y9pBjFf50GD4g",
});

export default cloudinary;