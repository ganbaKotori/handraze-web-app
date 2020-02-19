const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "\GitHub\handraze-web-app\client\src\img",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single("myImage");
const router = express.Router();
router.post("/upload", {
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);
        if(!err)
         return res.send(200).end();
    });
};);