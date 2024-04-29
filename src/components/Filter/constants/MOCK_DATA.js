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
        <Link to='/specialty/1' onClick={refreshPage}>Защита в чрезвычайных ситуациях</Link>
        <Link to='/specialty/2' onClick={refreshPage}>Пожарная безопасность</Link>
        <Link to='/specialty/3' onClick={refreshPage}>Правоохранительная деятельность</Link>
    </div>,
    fits: 
    <div>
        <li>Понимает важность своей роли в обеспечении безопасности и готов принимать на себя ответственность за принимаемые решения</li>
        <li>Способен эффективно руководить командой, координировать действия сотрудников в чрезвычайных ситуациях</li>
        <li>Имеет интерес к сфере права, особенно в контексте безопасности и соблюдения нормативов</li>
    </div>,
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
        <Link to='/specialty/4' onClick={refreshPage}>Сетевое и системное администрирование</Link>
        <Link to='/specialty/5' onClick={refreshPage}>Информационные системы и программирование</Link>
        <Link to='/specialty/6' onClick={refreshPage}>Обеспечение информационной безопасности автоматизированных систем</Link>
    </div>,
    fits: 
    <div>
        <li>Способен анализировать проблемы, разбираться в сложных системах, искать эффективные решения и быть внимательным к деталям</li>
        <li>Способен анализировать данные, выявлять тенденции и делать выводы на основе информации</li>
        <li>Способен эффективно общаться и сотрудничать с коллегами</li>
    </div>, 
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
        <Link to='/specialty/7' onClick={refreshPage}>Производство и эксплуатацаия оптических и оптико-электронных приборов и систем</Link>
        <Link to='/specialty/8' onClick={refreshPage}>Оператор-наладчик металлообрабатывающих станков</Link>
        <Link to='/specialty/9' onClick={refreshPage}>Эксплуатация беспилотных авиационных систем</Link>
        <Link to='/specialty/10' onClick={refreshPage}>Мастер сельскохозяйственного производства</Link>
    </div>,
    fits: 
    <div>
        <li>Готов к быстрой адаптации к новым технологиям и методам работы</li>
        <li>Способен на взаимодействие с коллегами, экспертами и другими специалистами</li>
        <li>Способен искать решения для сложных задач и проблем</li>
    </div>, 
},

{
    id: 4,
    img: Photo,
    ot:"Транспорт", 
    pr:"Транспорт, Операционная деятельность в логистике, Мастер по ремонту и обслуживанию автомобилей", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <Link to='/specialty/11' onClick={refreshPage}>Операционная деятельность в логистике</Link>
        <Link to='/specialty/12' onClick={refreshPage}>Мастер по ремонту и обслуживанию автомобилей</Link>
    </div>,
    fits: 
    <div>
        <li>Способен сохранять спокойствие и принимать решения в сложных условиях</li>
        <li>Имеет интерес к видам транспорта, их характеристикам и особенностям</li>
        <li>Готов предлагать и внедрять новые идеи для оптимизации процессов</li>
    </div>, 
},

{
    id: 5,
    img: Photo,
    ot:"Гостеприимство", 
    pr:"Гостеприимство, Поварское и кондитерское дело, Туризм и гостеприимство", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <Link to='/specialty/13' onClick={refreshPage}>Поварское и кондитерское дело</Link>
        <Link to='/specialty/14' onClick={refreshPage}>Туризм и гостеприимство</Link>
    </div>,
    fits: 
    <div>
        <li>Способен быть открытым, дружелюбным и легко общаться с разными людьми</li>
        <li>Умеет гибко и эффективно реагировать на стресс</li>
        <li>Способен управлять несколькими задачами одновременно</li>
    </div>, 
},

{
    id: 6,
    img: Photo,
    ot:"Торговля и финансы", 
    pr:"Торговля и финансы, Финансы, Экономика и бухгалтерский учет", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <Link to='/specialty/15' onClick={refreshPage}>Финансы</Link>
        <Link to='/specialty/16' onClick={refreshPage}>Экономика и бухгалтерский учет</Link>
    </div>,
    fits: 
    <div>
        <li>Увлечен работой с цифрами, финансовыми отчетами и бюджетами</li>
        <li>Имеет интерес к поиску и решению сложных задач</li>
        <li>Заинтересован в математике и экономике</li>
    </div>, 
},

{
    id: 7,
    img: Photo,
    ot:"Здравоохранение", 
    pr:"Здравоохранение, Сестринское дело", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <Link to='/specialty/17' onClick={refreshPage}>Сестринское дело</Link>
    </div>,
    fits: 
    <div>
        <li>Способен понимать и делиться чувствами других</li>
        <li>Имеет интерес к биологии, химии, анатомии и другим научным дисциплинам</li>
        <li>Спопобсен в достаточной степени управлять временем, планировать и выполнять множество задач одновременно</li>
    </div>, 
},

{
    id: 8,
    img: Photo,
    ot:"Образование и социальная сфера", 
    pr:"Образование и социальная сфера, Дошкольное образование, Юриспруденция, Социально – культурная деятельность", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <Link to='/specialty/18' onClick={refreshPage}>Дошкольное образование</Link>
        <Link to='/specialty/19' onClick={refreshPage}>Юриспруденция</Link>
        <Link to='/specialty/20' onClick={refreshPage}>Социально – культурная деятельность</Link>
    </div>,
    fits: 
    <div>
        <li>Способен выполнять свои обязанности качественно и в срок, соблюдать правила и нормы работы</li>
        <li>Способен налаживать доверительные отношения</li>
        <li>Умеет слушать и понимать собеседника, выражать свои мысли четко и корректно, находить компромиссы и решения</li>
    </div>, 
},

{
    id: 9,
    img: Photo,
    ot:"Строительство", 
    pr:"Строительство, Эксплуатация и обслуживание многоквартирного дома, Мастер отделочных строительных и декоративных работ, Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства, Электромонтажник слаботочных систем, Землеустройство", 
    fil:"",
    zp: "",
    inf: "",
    species: 
    <div>
        <Link to='/specialty/21' onClick={refreshPage}>Эксплуатация и обслуживание многоквартирного дома</Link>
        <Link to='/specialty/22' onClick={refreshPage}>Мастер отделочных строительных и декоративных работ</Link>
        <Link to='/specialty/23' onClick={refreshPage}>Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства</Link>
        <Link to='/specialty/24' onClick={refreshPage}>Электромонтажник слаботочных систем</Link>
        <Link to='/specialty/25' onClick={refreshPage}>Землеустройство</Link>
    </div>,
    fits: 
    <div>
        <li>Способен работать с различными инструментами, оборудованием и техническими схемами</li>
        <li>Способен разбираться в технических документах и схемах для выполнения задачи</li>
        <li>Способен точно выполнять инструкции и следить за качеством</li>
    </div>, 
},

]