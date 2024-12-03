import React from "react";
import iphoneimg from "../../src/assest/products/Phụ Kiện/pexels-joshsorenson-7899236.jpg";
const AboutUs = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              Chào mừng đến với TNA ! Nơi cung cấp các giải pháp công nghệ hiện
              đại cho mọi nhu cầu của bạn.
            </p>
            <p className="text-gray-600 mb-4">
              Chúng tôi tự hào là một cửa hàng trực tuyến chuyên cung cấp các
              sản phẩm PC, linh kiện và phụ kiện chất lượng cao, từ những thương
              hiệu hàng đầu trên thế giới.
            </p>
            <p className="text-gray-600 mb-4">
              Với mục tiêu mang lại trải nghiệm mua sắm dễ dàng và đáng tin cậy,
              chúng tôi luôn nỗ lực để cung cấp dịch vụ tốt nhất đến từng khách
              hàng.
            </p>
            <p className="text-gray-600 mb-4">
              Đội ngũ của chúng tôi không chỉ có đam mê về công nghệ mà còn cam
              kết mang đến những sản phẩm phù hợp nhất, kèm theo các giải pháp
              tối ưu để nâng cao hiệu suất làm việc và giải trí của bạn. Hãy
              đồng hành cùng chúng tôi trên hành trình khám phá thế giới công
              nghệ đầy thú vị!
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end space-y-4 mt-10 lg:mt-0">
            <div className="text-right">
              <h3 className="text-4xl font-bold text-center">10</h3>
              <p className="text-gray-500">Cửa hàng trên toàn quốc</p>
            </div>
            <div className="text-right">
              <h3 className="text-4xl font-bold text-center">100</h3>
              <p className="text-gray-500">Nhân viên đang làm việc</p>
            </div>
            <div className="text-right">
              <h3 className="text-4xl font-bold text-center">10 000</h3>
              <p className="text-gray-500">Khách hàng mới mỗi năm </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto">
          <img
            src={iphoneimg}
            alt="Group of People"
            className="w-full rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
