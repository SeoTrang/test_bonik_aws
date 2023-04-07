import React, { useEffect, useState } from 'react';
import MyModal from '../../../../modal/ClosableModal/Modal';
// import ListColor from '../../../../../common/listColor/ListColor';

//FormLaptopPC
// import UnClosableModal from '../../../../modal/unClosableModal/UnClosableModal';
import FormCommon from '../Common/FormCommon';
import FormImages from '../Common/FormImages';
import FormImagesList from '../Common/FormImagesList';
import SelectCommon from '../Common/SelectCommon';
import FormArticle from '../Common/FormArticle';

import styles from './FormMobilePhone.module.scss'


const FormMobilePhone = ({productID}) => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);
    // const [colors, setColors] = useState([]);

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleFilesInputChange = (selectedFiles) => {
        setFiles([...files, ...selectedFiles]);
      };

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
                            <FormCommon title="Mã sản phẩm" id="touchScreen" name="touchScreen" placeholder="Mã sản phẩm" type="Text" pattern='' />
                        </section>
                        
                        
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Nhà sản xuất" placeholder={"Nhà sản xuất"}/>
                        </section>
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Tên sản phẩm" placeholder={"Tên sản phẩm"} />
                        </section>
                        
                    </div>
                    
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon title="Mã màu" id="colorCode" name="colorCode" placeholder="Mã phiên bản" type="Text" pattern='' />
                        </section>
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Màu" placeholder={"Màu"} />
                        </section>
                        
                       
                    </div>
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Mã phiên bản" id="touchScreen" name="touchScreen" placeholder="Mã phiên bản" type="Text" pattern='' />
                        </section>
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Phiên bản" placeholder={"Phiên bản"} />
                        </section>
                        
                       
                    </div>

                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Giá nhập" value={'smartwatch'} placeholder="Giá nhập" />
                        </section>
                        
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Hàng tồn kho" value={'smartwatch'} placeholder="Giá nhập" />
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
                    <div className="form_df_2item mt1_5em">
                        <section className='form_left'>
                            <FormCommon disabled={true} title="Tương đương" id="price" name="price" placeholder="Giá bán..." type="number" pattern="^\d*$" />
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
                                        <SelectCommon title="Công nghệ màn hình" />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Độ phân giải (Pixels)" id="screenResolution" name="screenResolution" placeholder="vd : 2796 x 1290" type="Text" pattern='[0-9xX]+' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Màn hình rộng" id="screenWidth" name="screenWidth" placeholder="vd : 6.7'" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Độ sáng tối đa" id="maxBrightness" name="maxBrightness" placeholder="vd : 2000 nits" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Mặt kính cảm ứng" id="touchScreen" name="touchScreen" placeholder="vd : Kính cường lực Ceramic Shield" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tầng số quét màn hình" id="scanFrequency" name="scanFrequency" placeholder="vd : 120 Hz" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rearCamera}>
                            <div className={styles.title}>
                                <span>Camera sau</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Độ phân giải (MP)" id="rearCameraResolution" name="rearCameraResolution" placeholder="vd : Chính 48 MP & Phụ 12 MP, 12 MP" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Quay phim" id="rearCameraRecordVideo" name="rearCameraRecordVideo" placeholder="vd : FullHD 1080p@60fps, FullHD 1080p@30fps .." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Đèn Flash" id="flashLight" name="flashLight" placeholder="vd : có" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tính năng" id="rearCameraFeature" name="rearCameraFeature" placeholder="vd : Quay video 4K, Cinematic, Trôi nhanh thời gian (Time Lapse) ..." type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>

                        <div className={styles.frontCamera}>
                            <div className={styles.title}>
                                <span>Camera trước</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Độ phân giải (MP)" id="frontCameraResolution" name="frontCameraResolution" placeholder="vd : 12 MP" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Quay phim" id="frontCameraRecordVideo" name="frontCameraRecordVideo" placeholder="vd : FullHD 1080p@60fps, FullHD 1080p@30fps .." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Loại thiết kế" id="frontCameraType" name="frontCameraType" placeholder="vd : Tai thỏ, giọt nước.." type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tính năng" id="frontCameraFeature" name="frontCameraFeature" placeholder="vd : Quay video 4K, Cinematic, Trôi nhanh thời gian (Time Lapse) ..." type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>


                        <div className={styles.OsCpuGpu}>
                            <div className={styles.title}>
                                <span>Hệ điều hành & CPU & GPU</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Hệ điều hành" id="os" name="os" placeholder="vd : iOS 16, Adroid 11" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Chip xử lý (CPU)" id="cpu" name="cpu" placeholder="vd : Apple A16 Bionic 6 nhân" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Tốc độ CPU" id="processorSpeedCPU" name="processorSpeedCPU" placeholder="vd : 3.46 GHz" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Chip đồ họa (GPU)" id="graphicsCardGPU" name="graphicsCardGPU" placeholder="vd : Apple GPU 5 nhân" type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>



                        <div className={styles.memoryStorage}>
                            <div className={styles.title}>
                                <span>Bộ nhớ & Lưu trữ</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="RAM" id="ram" name="ram" placeholder="vd : 6 GB" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Dung lượng lưu trữ" id="storage" name="storage" placeholder="vd : 128 GB" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Khả dụng" id="storageFree" name="storageFree" placeholder="vd : 113 GB" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Danh bạ" id="contacts" name="contacts" placeholder="vd : Không giới hạn" type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>

                        <div className={styles.connection}>
                            <div className={styles.title}>
                                <span>Kết nối</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Mạng di động" id="mobileNetwork" name="mobileNetwork" placeholder="vd : Hỗ trợ 5G" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="SIM" id="sim" name="sim" placeholder="vd : 1 Nano SIM & 1 eSIM" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Wifi" id="wifi" name="wifi" placeholder="vd : Wi-Fi hotspot, Wi-Fi MIMO .." type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="GPS" id="gps" name="gps" placeholder="vd : GLONASS, GPS .." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Bluetooth" id="bluetooth" name="bluetooth" placeholder="vd : Có" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Cổng kết nối/sạc" id="chargingPort" name="chargingPort" placeholder="vd : Lightning" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Jack tai nghe" id="headphoneJack" name="headphoneJack" placeholder="vd : Lightning" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Kết nối khác" id="moreConnection" name="moreConnection" placeholder="vd : NFC" type="Text" pattern='' />
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
                                        <FormCommon title="Dung lượng pin" id="batteryCapacity" name="batteryCapacity" placeholder="vd : 4323 mAh" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Loại pin" id="batteryType" name="batteryType" placeholder="vd : Li-Ion" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Hỗ trợ sạc tối đa" id="maxCharging" name="maxCharging" placeholder="vd : 20 W" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Công nghệ pin" id="batteryTechnology" name="batteryTechnology" placeholder="vd : Sạc pin nhanh, Sạc không dây ..." type="Text" pattern='' />
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
                                        <FormCommon title="Bảo mật nâng cao" id="securityAdvanced" name="securityAdvanced" placeholder="vd : Mở khoá khuôn mặt Face ID" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tính năng đặt biệt" id="specialFeature" name="specialFeature" placeholder="vd : Phát hiện va chạm (Crash Detection), Loa kép .." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Kháng nước kháng bụi" id="WaterDustResistant" name="WaterDustResistant" placeholder="vd : IP68" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Ghi âm" id="AudioRecorder" name="AudioRecorder" placeholder="vd : AAC, MP3 ..." type="Text" pattern='' />
                                    </section>
                                </div>

                               
                            </div>

                            
                        </div>

                        <div className={styles.generalInformation}>
                            <div className={styles.title}>
                                <span>Thông tin chung</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Thiết kế" id="design" name="design" placeholder="vd : Nguyên khối" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Chất liệu" id="material" name="material" placeholder="vd : Khung thép không gỉ & Mặt lưng kính cường lực .." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="size" id="size" name="size" placeholder="vd : Dài 160.7 mm - Ngang 77.6 mm - Dày 7.85 mm" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Khối lượng" id="weight" name="weight" placeholder="vd : Nặng 240 g" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Thời điểm ra mắt" id="releaseDate" name="releaseDate" placeholder="vd : 09/2022" type="Text" pattern='' />
                                    </section>
                                    {/* <section className='form_left'>
                                        <FormCommon title="Màu sắc (Mỗi màu sắc cách nhau 1 dấu phẩy)" id="colors" name="colors" placeholder="ví dụ : Trắng, Đen..." type="Text" pattern='' />
                                    </section> */}
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

export default FormMobilePhone;