
let userData = {
  users: [ {  First: "Kevin",
  Last: "Ritz",
  emailAddress: "kevin@email.com",
  password: "Triathlons",
  },
{
  First: "Keith",
  Last: "Branch",
  emailAddress: "branch@email.com",
  password: "UniversalPassword123",
}]
}

const userDataKeys = Object.keys(userData.users);
console.log(userDataKeys);

for (let i = 0; i < userDataKeys.length; i++) {
  console.log(userData.users[userDataKeys[i]]);
  for (const key in userData.users) {
    console.log(userData.users[userDataKeys[i]]);
  }
}
//Adding and removing users
userData.users.push({  First: "Brandon",
Last: "Stevens",
emailAddress: "steveb@email.com",
password: "FunnyPassword",})
console.log(userData.users);
userData.users.pop()
console.log(userData.users);

userData.users.push({  First: "Brandon",
Last: "Stevens",
emailAddress: "steveb@email.com",
password: "FunnyPassword",})
console.log(userData.users);


const UserList = document.getElementById("UserList");

// function addUserData() {
//   userData.Object.keys();
// }

// function addUser(FormData) {
//   () => document.getElementById("UserList");
//   const listElement = document.createElement("li");
//   listElement.innerText = FormData.value;
//   UserList.appendChild(users);
//   console.log(listElement);
//   return false;
// }
const users = [];

document.getElementById("removeUserList").addEventListener("click", () => {
  users.pop();
  console.log(users);
  const e = document.querySelector("li:last-child");
  e.remove();
  const s = document.querySelector("hr");
  s.remove();
  return false;
});

function addUser(FormData) {
  users.push(FormData.value);
  console.log(users);
  addUserList();
  addhr();
  return false;
}
function addUserList() {
  users.forEach((user) => {
    const listElement = document.createElement("li");
    listElement.innerText = user;
    UserList.appendChild(listElement);
  });
}

function addhr() {
  var elem = document.createElement("hr");
  elem.setAttribute("width", "100%");
  document.body.appendChild(elem);
}
