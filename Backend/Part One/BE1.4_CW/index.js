const mongoose = require('mongoose')

require('./db')
const User=require('./models/user')


async function addUser(){
  try{
  const newUser=new User({
    email:'xyz@gmail.com',
    password:"xyz123",
    profilePictureUrl:"randomxyz.com",
    username:"xyz",
    nickname:"exwhyzee"
  })
  const userSaved=await newUser.save();
    console.log("User saved successfully ",userSaved);
  }catch(e){
    console.log("Error creating user ",e)
  }
}
// addUser();

async function signup(userDetails){
    try{
  const user=new User(userDetails)
  const userSaved=await user.save();
    console.log("New user created ",userSaved);
  }catch(e){
    console.log("Error creating user ",e)
  }
}

async function login(userEmail,userPassword){
  try{
    const findEmail=await User.findOne({email:userEmail})
    // const findPassword=await User.findOne({password:userPassword});
    // console.log(findEmail.password)
    if(findEmail && findEmail.password===userPassword ){
      console.log("User logged in successfully")
    }else{
      console.log("Invalid Credentials")
    }
  }catch(e){
    throw(e);
  }
}
try{
login("example@example.com","password123");
}catch(e){
  console.log("Login Failed")
}

async function changePassword(email,password,newPassword){
  try{
    const user=await User.findOne({email})
    // console.log(user);
    if(user && user.password===password){
      console.log("Password Matched,Now updating new password ");
      user.password=newPassword;
      const updatedUser=await user.save();
      console.log("Password Changed for the User ",updatedUser);
    }else{
      console.log("Previous password does not matches");
    }
  }catch(e){
    console.log("Error finding user : ",e);
  }
}

//use try catch
// changePassword("example@example.com","xyz123","password123");


async function updateProfileUrl(email,password,newProfilePictureUrl){

  //no need of password validation
  try{
    const user=await User.findOne({email})
    if(user && user.password===password){
      console.log("Password Matched Succesfully,now updating profile pic url")
      user.profilePictureUrl=newProfilePictureUrl;
      const savePicUrl=await user.save();
      console.log("Updated profile pic successfully ",savePicUrl);
    }else{
      console.log("Enter correct password")
    }
  }catch(e){
    console.log("Error updating profile pic url ",e);
  }
}
// updateProfileUrl("example@example.com","password123","https://randomxyz.jpg");

// signup({
//   email: 'example@example.com',
//   password: 'password123',
//   profilePictureUrl: 'https://example.com/profile.jpg',
//   username: 'exampleuser',
//   nickname: 'Example Nick',
// })



// signup({
//     email:'xyz@gmail.com',
//     password:"xyz123",
//     profilePictureUrl:"randomxyz.com",
//     username:"xyz",
//     nickname:"exwhyzee"
// })


async function updateContactDetails(email,newContactNumber){
  try{
    const user=await User.findOne({email});
    if(user){
      console.log("Updating contact number");
      user.phoneNumber=newContactNumber;
      const saveUser=await user.save();
      console.log("Updated Contact Number Successfully ",saveUser);
    }else{
      console.log("User not found")
    }
  }catch(e){
    console.log("Error updating contact details ",e);
  }
}
updateContactDetails("example@example.com",123456789);

async function findUserByPhoneNumber(phoneNumber){
  try{
    const user=await User.findOne({phoneNumber});
    if(user){
      console.log("User found succeffully with username",user.username);
    }else{
      console.log("Sorry,user not found ");
    }
  }catch(e){
    console.log("Error finding phone number ",e)
  }
}
findUserByPhoneNumber(123456789);

async function readAllUsers(){
  try{
    const findUsers=await User.find({});
    console.log("All users ",findUsers)
  }catch(e){
    console.log("Error finding users ",e);
  }
}
readAllUsers()



// async function deleteAllUsers(){
//   try{
//     const deleteUsers=await User.deleteMany({});
//     console.log("Deleted all users successfully ");
//   }catch(e){
//     console.log("Error deleteing users ",e);
//   }
// }
// deleteAllUsers();