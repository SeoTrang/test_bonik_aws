import React, { useEffect, useState } from 'react';
import MyModal from '../../../../modal/ClosableModal/Modal';
// import ListColor from '../../../../../common/listColor/ListColor';

//FormSmartWatch
// import UnClosableModal from '../../../../modal/unClosableModal/UnClosableModal';
import FormCommon from '../Common/FormCommon';
import FormImages from '../Common/FormImages';
import FormImagesList from '../Common/FormImagesList';
import SelectCommon from '../Common/SelectCommon';
import FormArticle from '../Common/FormArticle';

import styles from './FormLaptop.module.scss'


const FormLaptop = ({productID}) => {
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
                                        <FormCommon title="Công nghệ màn hình" id="screenTechnology" name="screenTechnology" placeholder="vd : Anti-glare LED-backlit" type="Text" pattern='[0-9xX]+' />
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
                                        <FormCommon title="Loại màn hình" id="screenType" name="screenType" placeholder="vd : LED" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Màn hình cảm ứng" id="touchScreen" name="touchScreen" placeholder="vd : Kính cường lực Ceramic Shield" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tầng số quét màn hình" id="scanFrequency" name="scanFrequency" placeholder="vd : 120 Hz" type="Text" pattern='^[A-Za-z0-9[\]/\-. ]+$' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Tấm nền" id="screenBackground" name="screenBackground" placeholder="vd : IPS" type="Text" pattern='' />
                                    </section>
                                    
                                </div>
                            </div>
                        </div>

                       

                        <div className={styles.frontCamera}>
                            <div className={styles.title}>
                                <span>Camera</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <SelectCommon title="Webcam"  />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Độ phân giải (MP)" id="frontCameraResolution" name="frontCameraResolution" placeholder="vd : 12 MP" type="Text" pattern='' />
                                    </section>
                                    
                                </div>

                                

                               
                            </div>

                            
                        </div>


                        <div className={styles.Cpu}>
                            <div className={styles.title}>
                                <span>Bộ xử lý (CPU)</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Hãng" id="CPUmaker" name="CPUmaker" placeholder="vd : Intel" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Công nghệ CPU" id="cpuTechnology" name="cpuTechnology" placeholder="vd : Core i5" type="Text" pattern='' />
                                    </section>
                                   
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Loại CPU" id="typeCPU" name="typeCPU" placeholder="vd : 11400H" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Tốc độ CPU" id="processorSpeedCPU" name="processorSpeedCPU" placeholder="vd : 3.46 GHz" type="Text" pattern='' />
                                    </section>
                                    
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Tốc độ tối đa" id="maxSpeed" name="maxSpeed" placeholder="vd : 4.50 GHz" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Số nhân" id="kernel" name="kernel" placeholder="vd : 6" type="number" pattern='' />
                                    </section>
                                    
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Số luồng" id="threads" name="threads" placeholder="vd : 12" type="number" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Bộ nhớ đệm" id="Caching" name="Caching" placeholder="vd : 12 MB" type="Text" pattern='' />
                                    </section>
                                    
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Tốc độ BUS" id="BUSspeed" name="BUSspeed" placeholder="vd : 8 GT/s" type="Text" pattern='' />
                                    </section>
                                    
                                    
                                </div>

                               
                            </div>

                            
                        </div>

                        <div className={styles.onboardGpu}>
                            <div className={styles.title}>
                                <span>Đồ họa onboard (GPU)</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    
                                    <section className='form_left'>
                                        <FormCommon title="Hãng" id="GPUmaker" name="GPUmaker" placeholder="vd : NVIDIA" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Công nghệ CPU" id="cpuTechnology" name="cpuTechnology" placeholder="vd : GeForce GTX 1650" type="Text" pattern='' />
                                    </section>
                                   
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    
                                    <section className='form_left'>
                                        <FormCommon title="Bộ nhớ" id="Memory" name="Memory" placeholder="vd : 4 GB GDDR6" type="Text" pattern='' />
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className={styles.discreteGpu}>
                            <div className={styles.title}>
                                <span>Đồ họa rời (GPU)</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    
                                    <section className='form_left'>
                                        <FormCommon title="Hãng" id="GPUmaker" name="GPUmaker" placeholder="vd : NVIDIA" type="Text" pattern='' />
                                    </section>

                                    <section className='form_left'>
                                        <FormCommon title="Công nghệ CPU" id="cpuTechnology" name="cpuTechnology" placeholder="vd : GeForce GTX 1650" type="Text" pattern='' />
                                    </section>
                                    
                                   
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    
                                    <section className='form_left'>
                                        <FormCommon title="Bộ nhớ" id="Memory" name="Memory" placeholder="vd : 4 GB GDDR6" type="Text" pattern='' />
                                    </section>
                                </div>
                            </div>
                        </div>

                        



                        <div className={styles.ram}>
                            <div className={styles.title}>
                                <span>RAM</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="RAM" id="ram" name="ram" placeholder="vd : 8 GB" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Loại RAM" id="typeRAM" name="typeRAM" placeholder="vd : DDR4" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Tốc độ RAM" id="RAMspeed" name="RAMspeed" placeholder="vd : 2933 MHz" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Số khe cắm rời" id="RANslots" name="RANslots" placeholder="vd : 2" type="number" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Số khe RAM còn lại" id="RAMfreeSlots" name="RAMfreeSlots" placeholder="vd : 1" type="number" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Số RAM onboard" id="RANonboard" name="RANonboard" placeholder="vd : 0" type="number" pattern='' />
                                    </section>
                                </div>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Hỗ trợ ram tối đa" id="maxRAM" name="maxRAM" placeholder="vd : 32 GB" type="Text" pattern='' />
                                    </section>
                                    
                                </div>

                               
                            </div>

                            
                        </div>

                        <div className={styles.weightDesign}>
                            <div className={styles.title}>
                                <span>Thiết kế & Trọng lượng</span>
                            </div>

                            <div className={styles.boxform}>
                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Kích thước" id="size" name="size" placeholder="vd : 359 * 256 * 24.9 mm" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Loại RAM" id="weight" name="weight" placeholder="vd : 2.3 kg" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Chất liệu" id="material" name="material" placeholder="vd : Vỏ nhựa" type="Text" pattern='' />
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
                                        <FormCommon title="Wifi" id="wifi" name="wifi" placeholder="vd : Wifi 6" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Cổng kết nối" id="connector" name="connector" placeholder="vd : 1 HDMI, 1 LAN, 3 USB 3.2 Gen 1..." type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Bluetooth" id="bluetooth" name="bluetooth" placeholder="vd : Có" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Jack tai nghe" id="headphoneJack" name="headphoneJack" placeholder="vd : 3.5mm" type="Text" pattern='' />
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
                                        <FormCommon title="Dung lượng pin" id="batteryCapacity" name="batteryCapacity" placeholder="vd : 3 Cell" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Loại pin" id="batteryType" name="batteryType" placeholder="vd : Li-Ion" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Nguồn cấp" id="PowerSupply" name="PowerSupply" placeholder="vd : 200 W" type="Text" pattern='' />
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
                                        <FormCommon title="Đèn led phím" id="keyboardLed" name="keyboardLed" placeholder="vd : Đèn bàn phím chuyển màu RGB" type="Text" pattern='' />
                                    </section>
                                    <section className='form_left'>
                                        <FormCommon title="Hệ điều hành" id="os" name="os" placeholder="vd : Windows 10 Home SL" type="Text" pattern='' />
                                    </section>
                                </div>

                                <div className="form_df_2item mt1_5em">
                                    <section className='form_left'>
                                        <FormCommon title="Thời điểm ra mắt" id="releaseDate" name="releaseDate" placeholder="vd : 09/2022" type="Text" pattern='' />
                                    </section>
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

export default FormLaptop;