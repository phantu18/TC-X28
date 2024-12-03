// controllers/productController.js
const productModel = require("../../models/productModel");

const deleteProduct = async (req, res) => {
  const { id } = req.params; // Lấy id từ params

  try {
    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Sản phẩm không tìm thấy" });
    }

    res.json({ success: true, message: "Sản phẩm đã được xóa thành công" });
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm:", error);
    res.status(500).json({ success: false, message: "Lỗi máy chủ" });
  }
};

module.exports = deleteProduct;
