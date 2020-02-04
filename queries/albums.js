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

const getAlbum = async(req, res, next) => {
    try{
        let album = await db.one (
            "SELECT * FROM albums WHERE id = 1", req.params.id
        )

        res.status(200).json({
            status: "Success",
            message: "Pull one album",
            body: album
            
        })
    }catch(err) {
        next(err)
    }
}

const createAlbum = async(req, res, next) => {
    try{
        await db.none(`INSERT INTO albums (creator_id, album_title) VALUES ${creator_id}, ${album_title}) RETURNING *`, req.body)
        res.status(200).json({
            status: "Success",
            message:"New Album Created"
        })
    }catch(err) {
        next(err)
    }
}

const deleteAlbum = async (req, res, next) => {
    try{
        await db.none(`DELETE FROM albums WHERE id = $1`, req.params.id)
        res.status(200).json({
            status:"Success",
            message: album + "deleted"
        })
    }catch(err){
        next(err)
    }
}

module.exports = {getAlbums, getAlbum, createAlbum, deleteAlbum}