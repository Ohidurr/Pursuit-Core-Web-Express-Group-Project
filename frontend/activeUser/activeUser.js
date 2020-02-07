document.addEventListener("DOMContentLoaded", () => {
   getAllAlbums()
   
})

const getAllAlbums = async () => {
   
   try {
      let res = await axios.get(`http://localhost:3000/posts/home`)
      let users = res.data.body

      users.forEach(user => {
         let container = document.querySelector("#container")
         let picFrame = document.createElement("div")
         picFrame.className = "responsive";
         let album = document.createElement("div");
         album.className = "gallery"
         let img = document.createElement("img");
         let h3 = document.createElement("h3");
         h3.className = "username"
         let caption = document.createElement("div");
         caption.className = "desc"
         let p2 = document.createElement("p");

         img.src = user.array_agg[0]
         h3.innerText = user.username
         p2.innerText = user.body
         album.appendChild(img)
         picFrame.append(h3)
         caption.appendChild(p2)
         picFrame.append(album, caption)
         container.appendChild(picFrame)
      })
      getAlbum(username)
   } catch (err) {
        console.log(err)
   }
}
