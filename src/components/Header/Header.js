import React from 'react'
import "./header.css"
import Menu from './Menu/Menu';
import image1 from '../../img/picture_1.png'
import image2 from '../../img/picture_2.png'


import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



export default function Header(){
    
    return(
        <div className="header">
                <Menu />
                <div className="slider-wrapper">
                    <Carousel>
                        <div className="slide img1">
                        </div>
                        <div className="slide img2">
                        </div>
                        <div className="slide img1">
                        </div>
                        <div className="slide img2">
                        </div>
                    </Carousel>
                    <div className="descrption">
                     <p><span>Высокоточное изготовление</span></p>
                     <p><span>изделий из металла по чертежам</span></p>
                    </div>
                </div>
                
               

        </div>
    )
}