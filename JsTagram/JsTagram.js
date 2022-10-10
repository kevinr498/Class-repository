const UserData = {
  name: "Kevin Ritz",
  age: "24",
  hobby: "Triathlons",
};

const userDataKeys = Object.keys(UserData);
console.log(userDataKeys);

for (let i = 0; i < UserData.length; i++) {
  console.log(UserData[UserDataKey[i]]);
}

const users = ["Ryan", "Kolton", "Kody"]; // Add more names to grow Loop City!

/////////////////////// DON'T ALTER THIS CODE //////////////////////////
const UserList = document.getElementById("UserList");
////////////////////////////////////////////////////////////////////////

// HINT!!! Looks like the way to get the amount of names is citizens.length
// Maybe that could be used in our loop.....just a thought

/*
  CODE TO PUT INSIDE OF LOOP BLOCK
  const listElement = document.createElement('li');
  listElement.innerText = citizens[i];
  citizenList.appendChild(listElement);
*/
document.getElementById("addUserButton").addEventListener("click", () =>
  users.forEach((users) => {
    const listElement = document.createElement("li");
    listElement.innerText = users;
    UserList.appendChild(listElement);
  })
);
