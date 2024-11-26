import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("passou")
    const caminhoDestino = path.join(__dirname, "../imgs");
    if (!fs.existsSync(caminhoDestino)) {
        fs.mkdirSync(caminhoDestino, { recursive: true });
    }
    cb(null, caminhoDestino);
  },
  filename: function (req, file, cb) {
    console.log("passou2")
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});