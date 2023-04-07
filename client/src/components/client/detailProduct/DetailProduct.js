import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import Reviews from "../reviews/Reviews";
import styles from "./DetailProduct.module.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import FlashSale from "../flashSale/FlashSale";
import TopProducts from "../topProducts/TopProducts";
import Comment from "../comments/Comment";

const DetailProduct = () => {


    let voucher = true;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="contentApp">
            <div className={styles.detail + " detail"}> 
            
            <div className='route'>
                    <i class="fa-solid fa-house"></i>
                    <span>Trang chủ / Điện thoại iPhone 14 pro max</span>
            </div>

            <div className="containerContent">
                <div className={styles.description}>
                    <div className={styles.img}>
                    


                        <div className={styles.productName}>
                            <div className={styles.name}>
                                <h3>Điện thoại iPhone 14 Pro Max 128GB</h3>
                            </div>
                            <div className={styles.interact}>
                            <div className={styles.star}>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            </div>

                            <div className={styles.like}>
                            <i class="fa-solid fa-heart"></i>
                            <span>12k</span>
                            </div>
                            </div>
                        </div>

                        <div className={styles.imgSlide}>
                            <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={styles.imgLarge}
                            >
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-vang-1-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-3-1.jpg" />
                            </SwiperSlide>
                            
                            </Swiper>
                            <Swiper
                            
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={styles.imgSmall}
                            >
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-vang-1-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-3-1.jpg" />
                            </SwiperSlide>
                            
                            </Swiper>
                        </div>


                        <div className={styles.imgMain}>

                            <div className={styles.imgMainTitle}>
                                <i class="fa-solid fa-folder-tree"></i> 
                                <h4>Chi tiết hình ảnh</h4>
                            </div>
                            <img src="https://cdn.tgdd.vn/Products/Images/42/247508/Kit/iphone-14-pro-note.jpg" alt="" />
                        </div>

                    </div>

                    <div className={styles.shortDescription}>
                        <div className={styles.price}>
                            <div className={styles.curentPrice}>
                                <span>29.490.000₫</span>
                            </div>

                            <div className={styles.oldPrice}>
                                <span>34.490.000₫</span>
                            </div>
                        </div>
                        <div className={styles.types}>
                            <div className={styles.type + " "+styles.typeActive}>
                                <div className={styles.typeName}>
                                    <i class="fa-regular fa-circle-dot"></i>
                                    <span>128GB</span>

                                </div>
                                <div className={styles.typePrice}>
                                    <span>29.490.000₫</span>
                                </div>
                            </div>

                            <div className={styles.type}>
                                <div className={styles.typeName}>
                                    <i class="fa-regular fa-circle-dot"></i>
                                    <span>256GB</span>

                                </div>
                                <div className={styles.typePrice}>
                                    <span>29.490.000₫</span>
                                </div>
                            </div>

                            <div className={styles.type}>
                                <div className={styles.typeName}>
                                    <i class="fa-regular fa-circle-dot"></i>
                                    <span>512GB</span>

                                </div>
                                <div className={styles.typePrice}>
                                    <span>29.490.000₫</span>
                                </div>
                            </div>

                        </div>

                        <div className={styles.colors}>
                            <div className={styles.titleShortDe}>
                                <span>Màu sắc : </span>
                            </div>

                            <div className={styles.listColors}>
                                <div className={styles.colorActive+" "+styles.color}>Bạc</div>
                                <div className={styles.color}>Vàng</div>
                                <div className={styles.color}>Tím</div>
                                <div className={styles.color}>Đen</div>
                            </div>
                        </div>  
                        
                        {voucher && 
                        <div className={styles.vouchers}>
                            <div className={styles.voucherTitle}>
                                <img src="https://bizweb.dktcdn.net/thumb/icon/100/459/533/themes/868331/assets/gift.gif?1676652384879" alt="" />
                                <span>Code Ưu Đãi</span>
                            </div>

                            <div className={styles.listVoucher}>
                                <div className={styles.voucher}>
                                    <div className="voucherDescription">
                                        Nhập mã Bonik2023 để được giảm ngay 120k (áp dụng cho các đơn hàng trên 500k)
                                    </div>
                                    <button className={styles.btnGetVoucher}>
                                        Lấy mã
                                    </button>
                                </div>

                                <div className={styles.voucher}>
                                    <div className="voucherDescription">
                                        Nhập mã Bonik2023 để được giảm ngay 120k (áp dụng cho các đơn hàng trên 500k)
                                    </div>
                                    <button className={styles.btnGetVoucher }>
                                        Lấy mã
                                    </button>
                                </div>

                                <div className={styles.voucher}>
                                    <div className="voucherDescription">
                                        Nhập mã Bonik2023 để được giảm ngay 120k (áp dụng cho các đơn hàng trên 500k)
                                    </div>
                                    <button className={styles.btnGetVoucher + " "+styles.btnGotVoucher}>
                                        Lấy mã
                                    </button>
                                </div>

                            </div>
                        </div>
                        }

                        <div className={styles.quantity}>
                            <div className={styles.quantityTitle}>
                                <span>Số lượng</span>
                            </div>

                            <div className={styles.quantityAction}>
                                 <button className={styles.btnMinus}>
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                

                                <input type="number" min={1} defaultValue={1} />

                               <button className={styles.btnPlus}>
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>

                        <div className={styles.userAction}>
                            <div className={styles.btnAction}>
                                <button className={styles.buyNow}>
                                    Mua ngay
                                </button>
                                <button className={styles.addCart}>
                                    Thêm vào giỏ hàng

                         
                                </button>
                            </div>

                            <div className={styles.userLike}>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>

                        <div className={styles.boxSpecifications}>
                            <div className={styles.specificationsTitle}>
                                <h4>Thông số kỹ thuật</h4>
                            </div>
                            <div className={styles.specifications}>
                                <ul>
                                    <li className={styles.specification}>
                                       <p>
                                            Màn hình:
                                        </p> 

                                        <span>
                                            OLED6.7"Super Retina XDR
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            Hệ điều hành:
                                        </p> 

                                        <span>
                                            iOS 16
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            Camera sau:
                                        </p> 

                                        <span>
                                            Chính 48 MP & Phụ 12 MP, 12 MP
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            Camera trước:
                                        </p> 

                                        <span>
                                            12 MP
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            Chip:
                                        </p> 

                                        <span>
                                            Apple A16 Bionic
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            RAM:
                                        </p> 

                                        <span>
                                            6GB
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            Dung lượng lưu trữ:
                                        </p> 

                                        <span>
                                            512GB
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            SIM:
                                        </p> 

                                        <span>
                                            1 Nano SIM & 1 eSIM, Hỗ trợ 5G
                                        </span>
                                    </li>
                                    <li className={styles.specification}>
                                       <p>
                                            Pin, Sạc:
                                        </p> 

                                        <span>
                                            4323 mAh, 20W
                                        </span>
                                    </li>
                                </ul>

                                <button className={styles.btnSpecification}>
                                    <span>Xem thêm cấu hình chi tiết</span>

                                    <i class="fa-solid fa-caret-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='accompanying'>
                    <FlashSale data = {{title : "Sản phẩm kèm theo"}}/>
                </div>

                <div className={styles.productArticle}>
                    <div className={styles.productArticleTitle}>
                        <h2>Bài viết đánh giá iPhone 14 pro max</h2>
                    </div>
                    <div className={styles.articleContent}>
                        <span>
                        Sau bao nhiêu ngày chờ đợi thì Apple đã chính thức tung ra mẫu điện thoại iPhone 14 Pro Max 512GB khi sở hữu một con chip với hiệu năng mạnh mẽ, màn hình đẹp mắt và cụm camera vô cùng chất lượng.

Ngoại hình cao cấp
Điện thoại iPhone mang trong mình vẻ ngoài hào nhoáng với kiểu tạo hình vuông vắn, đây là lối thiết kế rất trend hiện nay và vô cùng thành công đối với thế hệ trước khi đã định hình kiểu dáng cho những smartphone.

Thiết kế hiện đại - iPhone 14 Pro Max 512GB

Apple đã sử dụng chất liệu thép không gỉ để tạo nên khung viền điện thoại mang đến độ chắc chắn và bền bỉ, mặt lưng được làm từ kính tạo nên sự sang trọng thu hút mọi ánh nhìn, chính những điều này giúp máy trở nên đẳng cấp.

Sở hữu màn hình chất lượng
Máy sở hữu tấm nền OLED với kích thước lên đến 6.7 inch cùng với độ phân giải 2796 x 1290 Pixels, mang đến cho bạn không gian hiển thị rộng lớn cho thao tác hằng ngày như đọc báo, chơi game,...

Màn hình hiển thị màu sắc trung thực - iPhone 14 Pro Max 512GB

Một bước tiến về mặt thiết kế của Apple khi đã loại bỏ kiểu thiết kế tai thỏ và thay vào đó là tạo hình viên thuốc vô cùng tinh tế, đem lại vùng hiển thị rộng lớn mà đây cũng là điểm nhấn để nhận diện dễ dàng hơn với iPhone 14.

Thiết kế notch mới lạ - iPhone 14 Pro Max 512GB

Hiệu năng mạnh mẽ bất chấp mọi tựa game
Con chip Apple A16 Bionic siêu mạnh được sản xuất trên quy trình tiên tiến giúp điện thoại iPhone của bạn đạt hiệu năng ấn tượng. Nhờ hiệu năng được cải tiến, người dùng có được những trải nghiệm tốt hơn trên smartphone khi dùng các ứng dụng chỉnh sửa ảnh hay chiến các tựa game đồ họa cao mượt mà.

Hiệu năng hàng đầu - iPhone 14 Pro Max 512GB

Bên cạnh đó thì iPhone 14 Pro Max còn là một chiếc điện thoại RAM 6 GB với khả năng xử lý tác vụ đa nhiệm nhanh chóng và dễ dàng.

Đa nhiệm mượt mà - iPhone 14 Pro Max 512GB

iPhone 14 Pro Max trang bị bộ nhớ trong 512 GB dung lượng lý tưởng cho phép bạn thỏa thích lưu trữ mọi nội dung theo ý muốn mà không lo nhanh đầy bộ nhớ.

Xứng tầm cameraphone chuẩn điện ảnh
Apple đã trang bị bộ 3 camera sau cho iPhone với cảm biến chính 48 MP, cảm biến góc rộng 12 MP và 12 MP cho cảm biến cuối cùng.

Trang bị 3 camera - iPhone 14 Pro Max 512GB

Hãng đã có sự nâng cấp độ phân giải ở cảm biến sau, kèm với đó là khả năng gia tăng thuật toán xử lý hình ảnh giúp điện thoại cho ra những bức ảnh chụp thiếu sáng ấn tượng, giảm tình trạng nhiễu trong quá trình chụp.

Nâng cao chất lượng ảnh chụp - iPhone 14 Pro Max 512GB

Với những nâng cấp và cải tiến mạnh mẽ về hiệu năng, camera đa chức năng, mình nghĩ rằng iPhone 14 Pro Max 512GB sẽ là một chiếc điện thoại cao cấp rất đáng được đầu tư và sử dụng nâng cao trải nghiệm hay phục vụ công việc một cách thuận tiện hơn. Ngoài ra vẫn còn thêm nhiều phiên bản iPhone 14 khác với nhiều tùy chọn hấp dẫn tại Thế Giới Di Động.
                        </span>

                        <div class={styles.bgArticle}></div>
                    </div>
                    
                    <div className={styles.buttonViewMore}>
                        <button className={styles.btnSpecification  + " "+styles.btnViewMore}>
                            Xem thêm
                        </button>
                    </div>
                </div>

                <div className='related'>
                    <TopProducts title={"Sản phẩm có liên quan"}/>
                </div>

                <Reviews/>

                <Comment/>
            </div>

            
        </div>
        </div>
    );
};

export default DetailProduct; 