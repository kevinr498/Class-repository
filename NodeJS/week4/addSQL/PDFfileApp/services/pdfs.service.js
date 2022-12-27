const Pdfs = require("../models/pdfs");
const PdfRepo = require("../repos/pdfs.repo");

class PdfsServices {
  constructor() {
    this.pdfRepo = new PdfRepo();
  }

  async createPdfs(name) {
    console.log(name, "hello services");
    return await this.pdfRepo.createPDFs({ name: name });
  }
  async getPDFs() {
    const data = await this.pdfRepo.getPDFs();
    return data.rows;
  }

  async getPdf(pdfId) {
    const pdfRow = await this.usersRepo.getPdf(pdfId);
    return pdfRow;
  }

  async deletePdf(pdfId) {
    const pdfRow = await this.usersRepo.deletePdf(pdfId);
    return pdfRow;
  }
}

module.exports = PdfsServices;
