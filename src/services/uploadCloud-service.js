const cloudinary = require("../config/cloudinary");

exports.uploadCloud = async (path) => {
  const { secure_url } = await cloudinary.uploader.upload(path, {
    use_filename: true,
  });
  return secure_url;
};
