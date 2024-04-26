import React from 'react'
import '../styles/footer.css'
import 'boxicons'
import { Link } from 'react-router-dom'
import logo from '../assets/headlogo.png'





export default function Footer() {
  return (
  <>
    <section className='footer'>
      <div className="cootcont">
      <div className="footer-content">
        <img src={logo} alt=""/>
        <p>© 2024 Красногорский колледж. Возрастное ограничение 12+. Все права защищены</p>
        <div className="icons">
          <a href=""><box-icon type='logo' name='vk'></box-icon></a>
          <a href=""><box-icon name='telegram' type='logo' ></box-icon></a>
        </div>
      </div>
      <div className="footer-content">
        <h4>ССЫЛКИ</h4>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/navigator'>Навигатор профессий</Link></li>
        <li><Link to='/proforient'>Профориентация</Link></li>
      </div>
      <div className="footer-content">
        <h4>КОНТАКТЫ</h4>
        <p>E-mail: mo_krasnkoll@mosreg.ru</p>
        <p>Приемная комиссия: +7(498)568-48-20</p>
        <p>Факс: (495)563-36-89</p>
      </div>
      </div>
      
    </section>
  </>
  )
}
