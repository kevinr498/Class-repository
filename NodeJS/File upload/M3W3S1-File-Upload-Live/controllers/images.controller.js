const path = require("path");

class ImagesController {
  constructor() {}

  async createImage(req, res) {
    try {
      const files = req.files;
      console.log(files);

      Object.keys(files).forEach((key) => {
        const filePath = path.join(__dirname, "../images/", files[key].name);
        files[key].mv(filePath, (err) => {
          if (err)
            return res.status(500).json({ status: "error", message: err });
        });
      });
      return res.json({
        status: "Success",
        message: Object.keys(files).toString(),
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: "error", message: e });
    }
  }
}

module.exports = ImagesController;
