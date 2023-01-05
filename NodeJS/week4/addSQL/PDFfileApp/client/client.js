const form = document.getElementById("pdfUploader");

const sendFiles = async () => {
  const myPDFs = document.getElementById("pdfInput").files;
  const formData = new FormData();
  const files = Array.from(myPDFs);
  const n = [files.length] - 1;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const bodyText = [files[n].name];
  const body = bodyText;
  let result;

  files.forEach((file) => {
    formData.append(file.name, file);
  });

  try {
    result = await fetch("/createPdf", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.log(e);
    // return res.status(500).json({ status: "error", message: error });
  }

  files.forEach((file) => {
    addPDF(file.name);
  });
};



document.getElementById("getFiles").addEventListener("click", (e) => {
  e.preventDefault();
  getPDFS();
  addPDF();

});

function getPDFS() {
  console.log('gottem')
  try {
    result = await fetch("/getPdfs", {
      method: "GET",
      headers: myHeaders,
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.log(e);
  }
}

function addPDF(json) {
  const pdf = document.createElement("p");
  pdf.innerText = json;
  document.getElementById("pdf").appendChild(pdf);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendFiles();
});
