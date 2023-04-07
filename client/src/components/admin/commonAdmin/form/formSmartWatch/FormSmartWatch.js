import React, { useEffect, useState } from 'react';




import MyModal from '../../../../modal/ClosableModal/Modal';
import FormArticle from '../Common/FormArticle';

// import ListColor from '../../../../../common/listColor/ListColor';

//FormSmartWatch
// import UnClosableModal from '../../../../modal/unClosableModal/UnClosableModal';
import FormCommon from '../Common/FormCommon';
import FormImages from '../Common/FormImages';
import FormImagesList from '../Common/FormImagesList';
import SelectCommon from '../Common/SelectCommon';


import styles from './FormSmartWatch.module.scss'


const FormSmartWatch = ({productID}) => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);
    // const [article, setArticle] = useState('');
    
    // const [colors, setColors] = useState([]);

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleFilesInputChange = (selectedFiles) => {
        setFiles([...files, ...selectedFiles]);
      };

    // const handleArticle = (article) =>{
    //     setArticle(article);
    // }

    // useEffect(()=>{
    //     console.log(article);
    // },[article])

    // const handleListColor = (selectedListColor) =>{
    //     setColors([...selectedListColor]);
    //     console.log(selectedListColor);
        
    // }

    // useEffect(()=>{
    //     console.log( "list : ",colors);
    // },[colors])
    
    return (
        <div id='formMobilePhone'  className={styles.formMobilePhone + " mt1em"}>
            {productID && <h1>update</h1>}
            {!productID && (
                <div id='formProductCommon' className='formAddMobilePhone'>
                    <div className='form_df_2item mt1_5em'>
                        <section className='form_left'>
                            <SelectCommon disabled={true} title="Danh mục" value={'smartwatch'} />
                        </section>
                        <section className='form_left'>
                            <SelectCommon title="Nhà sản xuất" />
                        </section>
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <SelectCommon title="Tên sản phẩm" />
                        </section>
                        <section className='form_left'>
                            <SelectCommon disabled={true} title="Giá nhập" value={'smartwatch'} />
                        </section>
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon title="Giá bán" id="price" name="price" placeholder="Giá bán..." type="number" pattern="^\d*$" />
                        </section>
                        <section className='form_left'>
                            <FormCommon title="Giảm giá (%)" id="discount" name="discount" placeholder="Giảm giá..." type="number" pattern='^\d*$' />
                        </section>
                    </div>
                    <div className='form_df_2item mt1_5em'>
                        <div className={styles.avatar +" bdr10"}>
                            <FormImages title="Ảnh đại diện" file={file} onChange={handleFileChange} />
                        </div>
                        <div className={styles.listImg + ' bdr10'}>
                            <FormImagesList files={files} onChange={handleFilesInputChange} />
                        </div>
                    </div>

                    <div className='form_df_2item mt1_5em'>
                        <div className={styles.avatar +" bdr10"}>
                            <FormImages title="Ảnh chi tiết" file={file} onChange={handleFileChange} />
                        </div>
                        
                    </div>

                    <div className={styles.boxDetailSpecifications +" mt1_5em"}>
                        <div className={styles.screen}>
                            <div className={styles.title}>
                                <span>Màn hình</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Công nghệ màn hình" id="screenTechnology" name="screenTechnology" placeholder="vd : Anti-glare LED-backlit" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Độ phân giải (Pixels)" id="screenResolution" name="screenResolution" placeholder="vd : 360 x 360 pixels" type="Text" pattern='[0-9xX]+' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Màn hình rộng" id="screenWidth" name="screenWidth" placeholder="vd : 44.8 mm" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Kích thước màn hình" id="screenSize" name="screenSize" placeholder="vd : 1.3 inch" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                               
                            </div>
                        </div>


                        <div className={styles.design}>
                            <div className={styles.title}>
                                <span>Thiết kế</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Chất liệu mặt" id="screenQuality" name="screenQuality" placeholder="vd : Kính cường lực" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Chất liệu khung viền" id="frameQuality" name="frameQuality" placeholder="vd : Hợp kim kẽm" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Chất liệu dây" id="strapQuality" name="strapQuality" placeholder="vd : Silicone" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Độ rộng dây" id="strapWidth" name="strapWidth" placeholder="vd : 2.2 cm" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Độ dài dây" id="strapLength" name="strapLength" placeholder=" " type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <SelectCommon title="Khả năng thay dây" />    
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Kích thước" id="size" name="size" placeholder="vd : Dài 44.8 mm - Ngang 44.8 mm - Dày 11 mm " type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Khối lượng" id="weight" name="weight" placeholder="vd : Nặng 48.3 g" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                               
                            </div>
                        </div>

                        <div className={styles.util}>
                            <div className={styles.title}>
                                <span>Tiện ích</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    
                                    <section className='form_left'>
                                        <FormCommon title="Tính năng đặt biệt" id="specialFeature" name="specialFeature" placeholder="vd : Màn hình luôn hiển thị" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Sim & nghe gọi" id="simAnhCall" name="simAnhCall" placeholder="vd : Nghe gọi ngay trên đồng hồ" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Kháng nước" id="WaterResistant" name="WaterResistant" placeholder="vd : Kháng nước IP68 (Tắm, đi mưa)" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tiện ích khác " id="otherUtil" name="otherUtil" placeholder="vd : Tìm đồng hồ, Chế độ tiết kiệm năng lượng ..." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Theo dõi sức khỏe" id="healthMonitoring" name="healthMonitoring" placeholder="vd : Đo nồng độ oxy trong máu (SpO2), Đo huyết áp ..." type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Hiển thị thông báo " id="showNotification" name="showNotification" placeholder="vd : Cuộc gọi, Tin nhắn, Zalo..." type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>



                        <div className={styles.batteryCharging}>
                            <div className={styles.title}>
                                <span>Pin & sạc</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Dung lượng pin" id="batteryCapacity" name="batteryCapacity" placeholder="vd : 300 mAh" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Thời gian sử dụng pin" id="batteryLife" name="batteryLife" placeholder="vd : Khoảng 6 ngày, Khoảng 10 ngày (Chế độ chờ)" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Thời gian sạc" id="chargingTimeFull" name="chargingTimeFull" placeholder="vd : Khoảng 2 giờ" type="Text" pattern='' />
                                    </section>

                                    <section className='form_left'>
                                        <FormCommon title="Cổng sạc" id="chargingPort" name="chargingPort" placeholder="vd : Dây sạc nam châm" type="Text" pattern='' />
                                    </section>
                                    
                                </div>

                               
                            </div>

                            
                        </div>


                        <div className={styles.connection}>
                            <div className={styles.title}>
                                <span>Cấu hình & Kết nối</span>
                            </div>

                            <div className={styles.boxform}>
                                

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="CPU" id="cpu" name="cpu" placeholder="vd : Realtek8762DT" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Bộ nhớ trong" id="storage" name="storage" placeholder="vd : 256 KB" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Hệ điều hành" id="os" name="os" placeholder="" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Kết nối được với hệ điều hành" id="canConnectOS" name="canConnectOS" placeholder="vd : Android 4.4 trở lên, iOS 9 trở lên.." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Cảm biến" id="Sensor" name="Sensor" placeholder="Cảm biến nhịp tim quang học, Gia tốc kế" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Ứng dụng quản lí" id="managementApp" name="managementApp" placeholder="vd : FitCloudPro" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Kết nối" id="connect" name="connect" placeholder="Bluetooth, GPS, Wifi" type="Text" pattern='' />
                                    </section>
                                    
                                </div>

                   

                               
                            </div>

                            
                        </div>

                        

                        

                        <div className={styles.moreInformation}>
                            <div className={styles.title}>
                                <span>Thông tin khác</span>
                            </div>

                            <div className={styles.boxform}>
                                

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Xuất xứ" id="origin" name="origin" placeholder="vd : Trung quốc" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Ngôn ngữ" id="language" name="language" placeholder="vd : Tiếng Trung, Tiếng Anh, Tiếng Việt" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Hãng" id="maker" name="maker" placeholder="vd : BeFit" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Thời gian ra mắt" id="releaseDate" name="releaseDate" placeholder="ví dụ : 11/2022" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    
                                    <section className='form_left'>
                                        <FormCommon title="Màu sắc (Mỗi màu sắc cách nhau 1 dấu phẩy)" id="colors" name="colors" placeholder="ví dụ : Trắng, Đen..." type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>



                    </div>

                    <div className='article mt2em'>
                        {/* <Test1/> */}
                        <div className={styles.title}>
                                <h3>Bài viết về sản phẩm</h3>
                            </div>
                        <FormArticle/>
                    </div>
                    

                    <div className={styles.btnAction +" mt2em"}>
                        
                        <MyModal width={"47%"} height={"3em"} color={"#47535e"} heading={"Hủy thêm sản phẩm !"} content = {"Bạn chắc chắn muốn hủy thêm sản phẩm"} btnName = {"Hủy"}/>
                        <button className={styles.save}>
                            Thêm
                        </button>
                        
                    </div>
                </div>
            )}
        </div>
    );
    
};

export default FormSmartWatch;