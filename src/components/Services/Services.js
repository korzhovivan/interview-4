import React from 'react'
import MultiRef from 'react-multi-ref';
import "./services.css"




import gear_big from '../../img/gear_big.png';
import gear_small from '../../img/gear_small.png';



export default function Services(){

    const gears = []

    for (let i = 0; i < 4; i++) {
        gears.push(React.createRef())
    }

    window.onscroll = function () {
        scrollRotate();
    };
    
    function scrollRotate() {
        gears.forEach(gearRef => {
            const myReference = gearRef.current 
            myReference.style.transformOrigin = "center center";
            myReference.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
        });
    }

    return(
        <div className="services-wrapper">
                <h2 className="title">Услуги</h2>
                <div className="stick"></div>

                
                <img ref={gears[0]} className="gear gear_t_l" src={gear_big}/>
                <img ref={gears[1]} className="gear gear_t_r" src={gear_small}/>
                <img ref={gears[2]} className="gear gear_b_l" src={gear_small}/>
                <img ref={gears[3]} className="gear gear_b_r" src={gear_big} />

                <div className="services">
                    
                    <div className="service">
                       <div className="desc_title">
                            <p>Производство оборудования</p>
                       </div>
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Металлическая мебель</p>
                        </div>          
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Металлоконструкции</p>
                        </div>  
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Металлообработка</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Раскрой металла</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Конструкторское бюро</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Аренда техники</p>
                        </div> 
                    </div>
                    <div className="service">
                        <div className="desc_title">
                            <p>Ремонт техники</p>
                        </div> 
                    </div>
                </div>

                <a href="#" className="count_btn">
                    <span className="btn_mob_text">Расчет стоимости</span>
                    <span className="btn_desc_text">Быстрый расчет цены по чертежу</span>
                </a>   
        </div>
    )
}