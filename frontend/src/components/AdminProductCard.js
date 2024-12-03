import React, { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleDeleteProduct = async () => {
    const confirmDelete = window.confirm("Xóa sản phẩm ????");
    if (confirmDelete) {
      try {
        const response = await fetch(
          `${SummaryApi.deleteProduct.url}/${data._id}`,
          {
            method: SummaryApi.deleteProduct.method,
            credentials: "include",
          }
        );

        const responseData = await response.json();

        if (responseData.success) {
          toast.success(responseData.message);
          fetchdata(); // Cập nhật danh sách sản phẩm
        } else {
          toast.error(responseData.message);
        }
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        toast.error("Lỗi khi xóa sản phẩm");
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded ">
      <div className="w-40">
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            className="mx-auto object-fill h-full"
            alt={data.productName} // Thêm alt cho ảnh
          />
        </div>
        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>

        <div>
          <p className="font-semibold">${data.price}</p>

          <div
            className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEditOutline />
          </div>

          <div
            className="w-fit ml-auto p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer"
            onClick={handleDeleteProduct}
          >
            <MdDelete />
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
