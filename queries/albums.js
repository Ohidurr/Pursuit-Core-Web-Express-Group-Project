const db = require("../DATABASE/index.js")

const getAlbums = async (req, res, next) => {
    try{
        let albums = await db.any("SELECT * FROM albums");
        res.status(200).json({
            status: "Success",
            message: "Pull all albums",
            body: albums,
        })
    }catch(err){
        next(err)
    }
}

module.exports = {getAlbums}