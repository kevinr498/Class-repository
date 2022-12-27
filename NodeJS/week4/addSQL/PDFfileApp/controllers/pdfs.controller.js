const PdfsServices = require("../services/pdfs.service");
const path = require("path");

class PdfsController {
  constructor() {
    this.pdfsServices = new PdfsServices();
  }
  async getPDFs(req, res) {
    try {
      const pdfs = await this.pdfsServices.getPDFs();
      res.send(pdfs);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! unable to get pdfs");
    }
  }
  async createPDF(req, res) {
    try {
      const files = req.body;
      console.log(files, "Hello controller");
      const pdfs = await this.pdfsServices.createPdfs(files);
      res.send(pdfs);
      return res.json({
        status: "Success",
        message: files,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: "error", message: e });
    }
  }

  async getPdf(req, res) {
    try {
      const { id } = req.params;
      const pdf = await this.pdfsServices.getPdf(id);
      res.send(pdf);
      res.status(200).send("Pdf found");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! unable to get pdf");
    }
  }
  async deletePdf(req, res) {
    try {
      const { id } = req.params;
      const pdf = await this.pdfsServices.deletePdf(id);
      res.send(pdf);
      res.status(200).send("Pdf deleted");
    } catch {
      console.log(e);
      res.status(500).send("ERROR! unable to delete pdf");
    }
  }
}

module.exports = PdfsController;
