const Pdfs = require("../models/pdfs");
const PdfRepo = require("../repos/pdfs.repo");

class PdfsServices {
  constructor() {
    this.pdfRepo = new PdfRepo();
  }

  async createPdfs(name) {
    let createResult;
    try {
      createResult = await this.pdfRepo.createPDFs(name);
    } catch (err) {
      console.log(err);
    }
    return createResult;
  }
  async getPDFs() {
    const data = await this.pdfRepo.getPDFs();
    try {
      data = await this.pdfRepo.getPDFs();
    } catch (err) {
      console.log(err);
    }
    return data.rows;
  }

  async getPdf(pdfId) {
    let pdfRow;
    try {
      pdfRow = await this.pdfRepo.getPdf(pdfId);
    } catch (err) {
      console.log(err);
    }
    return pdfRow;
  }

  async deletePdf(pdfId) {
    let pdfRow;
    try {
      pdfRow = await this.pdfRepo.deletePDF(pdfId);
    } catch (err) {
      console.log(err);
    }
    return pdfRow;
  }
}

module.exports = PdfsServices;
