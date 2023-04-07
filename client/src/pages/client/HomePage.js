import React from 'react';

import Slide from '../../components/client/slide/Slide';
import FlashSale from '../../components/client/flashSale/FlashSale';
import TopCategories from '../../components/client/topCategories/TopCategories';
import TopTrending from '../../components/client/topTrending/TopTrending';
import TopProducts from '../../components/client/topProducts/TopProducts';
import Slogan from '../../components/client/slogan/Slogan';

const HomePage = () => {

    
    return (
        <div className='homePage'>
            
            <Slide/>
            <div className='contentApp' style={{paddingTop:"0px"}}>
                <FlashSale data={{title:"",icon:""}}/>
                <TopCategories/>
                <TopTrending/>
                <TopProducts title = "Điện Thoại Nổi Bậc" icon = 'fa-solid fa-mobile-screen-button'/>
                <TopProducts title = "Laptop Nổi Bậc" icon="fa-solid fa-laptop"/>
                <TopProducts title = "Smartwatch Nổi Bậc" icon = "fa-solid fa-clock"/>
                <TopProducts title="Dành Cho Bạn"/>

                <Slogan/>
            </div>

            
        </div>
    );
};

export default HomePage;