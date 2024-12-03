import React from "react";

const jobs = [
  {
    title:
      "Đánh giá Intel Core Ultra 5 245K: Lựa chọn cân bằng giữa hiệu năng và giá thành",
    description:
      "Intel Core Ultra 5 245K mang sứ mệnh cân bằng giữa hiệu năng và giá thành, trở thành lựa chọn lý tưởng cho game thủ",

    location: "Bình Dương, VN",
  },
  {
    title: " PC Orion siêu nhỏ mà cấu hình cực mạnh với Ryzen 9",
    description:
      "Có thể nói, dòng PC Orion này chính là Mac Mini của thế giới Windows, thậm chí còn vượt trội về kích thước và khả năng nâng cấp, tùy biến phần cứng.",

    location: "Bình Dương, VN",
  },
  {
    title: "Intel Core Ultra 200V series chính thức ra mắt",
    description:
      "Core Ultra 200V chính là sản phẩm mà Intel làm ra để loại bỏ những điểm yếu từ thế hệ trước và bổ sung hàng loạt tính năng nhằm khẳng định lại vị thế của mình trên thị trường.",

    location: "Bình Dương, VN",
  },
];

const Blog = () => {
  return (
    <div className=" flex p-8 flex-col md:flex-row justify-between items-start md:p-20">
      <div className="md:w-1/2 space-y-4 pr-10">
        <a href="https://genk.vn/danh-gia-nhanh-gigabyte-x870-aorus-elite-wifi7-san-sang-di-tat-don-dau-ve-cong-nghe-20241120194319347.chn">
          <h1 className="text-3xl font-bold">
            Đánh giá nhanh Gigabyte X870 AORUS Elite WiFi7: sẵn sàng đi tắt đón
            đầu về công nghệ.
          </h1>
        </a>
        <p className="text-gray-600">
          Tập trung vào hiệu năng, Gigabyte X870 AORUS Elite Wifi7 hướng tới
          người dùng quan tâm đến hiệu năng hơn là các tính năng màu mè
          “gimmick”.
        </p>
        <img
          src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1733130762/nejo3kt52l2gu47frypq.jpg"
          alt="Office"
          className="rounded-lg shadow-lg w-full h-[70vh]"
        />
      </div>

      <div className="md:w-1/2 space-y-8 mt-8 md:mt-0 ">
        {jobs.map((job) => (
          <div className="border-b py-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <div className="mt-2 flex items-center space-x-4">
              <a
                href="https://genk.vn/may-tinh.html"
                className="text-indigo-600 font-medium"
              >
                Read more →
              </a>
              <span className="text-gray-500">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
