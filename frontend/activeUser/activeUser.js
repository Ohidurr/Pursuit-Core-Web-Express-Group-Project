document.addEventListener("DOMContentLoaded", () => {
   getAllAlbums()
   // getAlbum()
   
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
         caption.className = "desc";

         let p2 = document.createElement("p");

         pics = user.array_agg
         
         // img.addEventListener("click", ()=>{
            pics.forEach(pic => {
               let ul = document.createElement("ul")
               let li = document.createElement("li")
               img.src = pic
            })
      
         // })
         
         h3.innerText = user.username
         p2.innerText = user.body
         album.appendChild(img)
         picFrame.append(h3)
         caption.appendChild(p2)
         picFrame.append(album, caption)
         container.appendChild(picFrame)
      })
   } catch (err) {
        console.log(err)
   }
}

// const getAlbum = () => {
//    console.log("hey")
// }