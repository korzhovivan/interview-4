import React from 'react'
import "./footer.css"

import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import youtube from '../../img/youtube.png'



export default function Footer(){

    return(
        <>
        <div className="footer">
                <div className="footer-menu">
                    <div className="about">
                        <div className="title-block">
                            <p>О компании</p>
                        </div>
                        <a style={{marginTop: "4px"}}>Наши работы</a>
                        <a>Контакты</a>
                        <a>Доставка</a>
                        <a>Форма заказа</a>
                    </div>
                    <div className="suggestions">
                            <div className="title-block">
                                <p>Услуги</p>
                            </div>
                            <div className="suggestions-menu">
                                <div>
                                    <a style={{marginTop: "4px"}}>Производство оборудования</a>
                                    <a>Металлическая мебель</a>
                                    <a>Металлоконструкции</a>
                                    <a>Металлообработка</a>
                                </div>
                                <div>
                                    <a className="mt-0">Раскрой металла</a>
                                    <a>Конструкторское бюро </a>
                                    <a>Аренда техники</a>
                                    <a>Ремонт техники</a>
                                </div>
                            </div>
                    </div>
                </div>
               
               <div className="contact-info">
                    <p>Контактная информация</p>
                    <p>Заводская улица, 2 В,Буча,Киевская область, <span className="roboto">08292</span></p>
                    <p>ПН - ПТ: <span className="roboto">09:00 - 18:00</span></p>
                    <p><span className="roboto">+38(097)123-45-67</span></p>
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={youtube }/>
               </div>
        </div>

        <p className="author">Developed by<br/><strong>Korzhov</strong></p>
        
        </>
    )
}