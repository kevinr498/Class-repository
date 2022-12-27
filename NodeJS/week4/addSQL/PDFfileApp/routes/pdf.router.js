const express = require("express");
const fileUpload = require("express-fileupload");
const PdfsController = require("../controllers/pdfs.controller");

const pdfRouter = express.Router();
const pdfsController = new PdfsController();

pdfRouter.post("/createPdf", (req, res) => pdfsController.createPDF(req, res));

pdfRouter.get("/getPdfs", (req, res) => pdfsController.getPDFs(req, res));
pdfRouter.delete("/deletePdf/:id", (req, res) =>
  pdfsController.deletePdf(req, res)
);
pdfRouter.get("/getPdf/:id", (req, res) => pdfsController.getPDF(req, res));

module.exports = pdfRouter;
