import Photo from '../../../assets/findir.svg'
import { Link } from 'react-router-dom'


const refreshPage = () => {
    setTimeout(() => {
        window.location.reload();
    }, 100)
}


export const data = [


    // ot - Отрасль
    // pr - Профессия
    // img - Картинка карточки
    // fil - Филлиал
    // zp - Средняя зп
    // iimg - Фото на странице профессии

    
     



{
    id: 1,
    img: Photo,
    ot:"Безопасность", 
    pr:"Безопасность, Пожарная безопасность, Защита в чрезвычайных ситуациях, Правоохранительная деятельность", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/1' onClick={refreshPage}>Защита в чрезвычайных ситуациях</Link></li>
        <li><Link to='/specialty/2' onClick={refreshPage}>Пожарная безопасность</Link></li>
        <li><Link to='/specialty/3' onClick={refreshPage}>Правоохранительная деятельность</Link></li>
    </div> 
},


{
    id: 2,
    img: Photo,
    ot:"IT", 
    pr:"IT, Сетевое и системное администрирование, Информационные системы и программирование, Обеспечение информационной безопасности автоматизированных систем", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/4' onClick={refreshPage}>Сетевое и системное администрирование</Link></li>
        <li><Link to='/specialty/5' onClick={refreshPage}>Информационные системы и программирование</Link></li>
        <li><Link to='/specialty/6' onClick={refreshPage}>Обеспечение информационной безопасности автоматизированных систем</Link></li>
    </div> 
},

{
    id: 3,
    img: Photo,
    ot:"Промышленность", 
    pr:"Промышленность, Производство и эксплуатация оптических И оптико-электронных приборов и систем, Оператор-наладчик металлообрабатывающих станков, Эксплуатация беспилотных авиационных систем, Мастер сельскохозяйственного производства", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/7' onClick={refreshPage}>Производство и эксплуатацаия оптических и оптико-электронных приборов и систем</Link></li>
        <li><Link to='/specialty/8' onClick={refreshPage}>Оператор-наладчик металлообрабатывающих станков</Link></li>
        <li><Link to='/specialty/9' onClick={refreshPage}>Эксплуатация беспилотных авиационных систем</Link></li>
        <li><Link to='/specialty/10' onClick={refreshPage}>Мастер сельскохозяйственного производства</Link></li>
    </div> 
},

{
    id: 3,
    img: Photo,
    ot:"Транспорт", 
    pr:"Транспорт, Операционная деятельность в логистике, Мастер по ремонту и обслуживанию автомобилей", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/11' onClick={refreshPage}>Операционная деятельность в логистике</Link></li>
        <li><Link to='/specialty/12' onClick={refreshPage}>Мастер по ремонту и обслуживанию автомобилей</Link></li>
    </div> 
},

{
    id: 4,
    img: Photo,
    ot:"Гостеприимство", 
    pr:"Гостеприимство, Поварское и кондитерское дело, Туризм и гостеприимство", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/13' onClick={refreshPage}>Поварское и кондитерское дело</Link></li>
        <li><Link to='/specialty/14' onClick={refreshPage}>Туризм и гостеприимство</Link></li>
    </div> 
},

{
    id: 5,
    img: Photo,
    ot:"Торговля и финансы", 
    pr:"Торговля и финансы, Финансы, Экономика и бухгалтерский учет", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/15' onClick={refreshPage}>Финансы</Link></li>
        <li><Link to='/specialty/16' onClick={refreshPage}>Экономика и бухгалтерский учет</Link></li>
    </div> 
},

{
    id: 6,
    img: Photo,
    ot:"Здравоохранение", 
    pr:"Здравоохранение, Сестринское дело", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/17' onClick={refreshPage}>Сестринское дело</Link></li>
    </div> 
},

{
    id: 7,
    img: Photo,
    ot:"Образование и социальная сфера", 
    pr:"Образование и социальная сфера, Дошкольное образование, Юриспруденция, Социально – культурная деятельность", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/18' onClick={refreshPage}>Дошкольное образование</Link></li>
        <li><Link to='/specialty/19' onClick={refreshPage}>Юриспруденция</Link></li>
        <li><Link to='/specialty/20' onClick={refreshPage}>Социально – культурная деятельность</Link></li>
    </div> 
},

{
    id: 7,
    img: Photo,
    ot:"Строительство", 
    pr:"Строительство, Эксплуатация и обслуживание многоквартирного дома, Мастер отделочных строительных и декоративных работ, Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства, Электромонтажник слаботочных систем, Землеустройство", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <li><Link to='/specialty/21' onClick={refreshPage}>Эксплуатация и обслуживание многоквартирного дома</Link></li>
        <li><Link to='/specialty/22' onClick={refreshPage}>Мастер отделочных строительных и декоративных работ</Link></li>
        <li><Link to='/specialty/23' onClick={refreshPage}>Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства</Link></li>
        <li><Link to='/specialty/24' onClick={refreshPage}>Электромонтажник слаботочных систем</Link></li>
        <li><Link to='/specialty/25' onClick={refreshPage}>Землеустройство</Link></li>
    </div> 
},

]