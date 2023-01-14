const socket =io()
const userForm = document.getElementById("userForm");
const messageForm =document.getElementById("messageForm");
const buttonUser = document.getElementById("userSave");
let currentUser;
let currentMessage;
const getUserData = () => {
  const user = document.querySelectorAll("#userForm >input");
  return (currentUser = {
    [user[0].name]: user[0].value,
    [user[1].name]: user[1].value,
    [user[2].name]: user[2].value,
    [user[3].name]: user[3].value,
    [user[4].name]: user[4].value,
    [user[5].name]: user[5].value,
  });
};
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getUserData();
//   e.target.classList.toggle('invisible')
});
messageForm.addEventListener('submit',e=>{
    e.preventDefault();
    currentMessage=document.getElementById("messageBox").value
    if(currentUser!==undefined &&currentMessage!==undefined) 
        socket.emit('clientMessage',JSON.stringify({...currentUser,text:currentMessage}))
    else 
        alert("Failed to send message either user is not logged or message is undefined")
})
