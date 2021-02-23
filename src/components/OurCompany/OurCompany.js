import React from 'react'
import "./our-company.css"




export default function OurCompany(){

    return(
        <div className="company-wrapper">
                <h2 className="title-company">Наша компания</h2>
                <div className="stick"></div>

                <div className="benefit">
                    <div className="benefit-label">
                        <p className="benefit-title">
                            Почему мы?
                        </p>
                        <p className="benefit-desc">
                            Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного 
                        </p>
                    </div>
                </div>
                <div className="benefit benefit-rotate">
                    <div className="benefit-label benefit-label-rotate">
                        <p className="benefit-title benefit-title-rotate">
                            Наши преимущества
                        </p>
                        <p className="benefit-desc benefit-desc-rotate">
                            Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного 
                        </p>
                    </div>
                    
                </div>
        </div>
    )
}