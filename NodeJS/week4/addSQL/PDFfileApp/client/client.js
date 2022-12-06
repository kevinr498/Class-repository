const form = document.getElementById("imageForm");

const sendFiles = async () => {
  const myImages = document.getElementById("imageInput").files;
  const formData = new FormData();
  const files = Array.from(myImages);
  console.log(files);

  // single file
  // formData.append(files[0].name, files[0]);

  // multiple files
  files.forEach((file) => {
    formData.append(file.name, file);
  });

  const response = await fetch("http://localhost:3002/images", {
    method: "POST",
    body: formData,
  });

  const json = await response.json();
  files.forEach((json) => {
    addPDFList();
    addImage(json?.name);
  });
  console.log(json);
};

function addImage(name) {
  console.log(name);
  const img = document.createElement("img");
  img.src = `http://localhost:3002/${name}`;
  document.getElementById("image").appendChild(img);
}

function addPDFList() {
  const list = document.createElement(li);
  list = ``;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendFiles();
});
