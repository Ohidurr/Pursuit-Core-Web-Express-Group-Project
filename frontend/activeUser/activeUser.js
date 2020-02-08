let users = [];
document.addEventListener("DOMContentLoaded", () => {
   getAllAlbums()

})

const getAllAlbums = async () => {

   try {
      let res = await axios.get(`http://localhost:3000/posts/home`)
      users = res.data.body.reverse()

      users.forEach((user, index) => {
         let container = document.querySelector("#container")
         let picFrame = document.createElement("div")
         picFrame.className = "responsive";
         let album = document.createElement("div");
         album.className = "gallery"

         let img = document.createElement("img");
         img.src = user.array_agg[0]
         img.id = index
         img.addEventListener('click', e => getAlbum(e.target.id))
         let h3 = document.createElement("h3");
         h3.className = "username"

         let caption = document.createElement("div");
         caption.className = "desc";

         let p2 = document.createElement("p");

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

const getAlbum = (index) => {

   users[index].array_agg.forEach(pic => {
      let slides = document.querySelector("#mySlides faded")
      let img = document.createElement('img')
      img.src = pic
      slides.appendChild(img)
   })
}
