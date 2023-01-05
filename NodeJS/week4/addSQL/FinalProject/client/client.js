const form = document.getElementById("pdfUploader");

const sendFiles = async (req, res) => {
  const myPDFs = document.getElementById("pdfInput").files;
  const formData = new FormData();
  const files = Array.from(myPDFs);
  const n = [files.length] - 1;

  files.forEach((file) => {
    formData.append(file.name, file);
  });
  try {
    const bodyText = [files[n].name];
    res = await fetch("/createPdf", {
      method: "POST",
      body: JSON.stringify({ name: bodyText.toString() }),
    });
    res.send(res.body);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: "error", message: error });
  }

  files.forEach((file) => {
    addPDF(file.name);
    // addPDFList(myPDFs);
  });
};

function addPDF(json) {
  console.log(json);
  const pdf = document.createElement("p");
  pdf.innerText = json;
  document.getElementById("pdf").appendChild(pdf);
}

// function addPDFList(listElements) {
//   const list = document.createElement("li");
//   list = listElements;
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendFiles();
});
