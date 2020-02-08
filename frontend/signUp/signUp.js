document.addEventListener("DOMContentLoaded",() =>{

    let firstName = document.querySelector("#firstNameInput").value;
    let lastName = document.querySelector("#lastNameInput").value;
    let userName = document.querySelector("#userNameInput").value;
    let password = document.querySelector("#signUpPasswordInput").value;
    let userAge = document.querySelector("#userAge").value
    // let signUpbtn = document.querySelector("#sigUpBtn")
    let signUpForm = document.querySelector("#signUpForm")
    let genders = document.querySelector("#genders")
    // const createUser = (firstName,lastName,userName,password,userAge) => {
    //     await axios.post('http://localhost:3000/users', {
    //         firstName: firstName,
    //         lastName: lastName,
    //         userName: userName,
    //         password: password,
    //         userAge: userAge

    //     }
    // })

    signUpForm.addEventListener('submit', async(e) => {
        e.preventDefault()
       
   
           let res = await axios.post('http://localhost:3000/users', {
                firstname: firstName,
                lastname: lastName,
                username: userName,
                password: password,
                userage: +userAge
                
            })
                console.log(JSON.stringify(res.data.message));
                debugger
        

        
     
    })
})