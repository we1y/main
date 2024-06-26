import agricultural from '../../../assets/specialityphotos/agricultural prod.jpeg'
import systemadministrator from '../../../assets/specialityphotos/system administrator.jpeg'
import systemadministrator2 from '../../../assets/specialityphotos/system administrator 2.jpeg'
import carrep from '../../../assets/specialityphotos/car rep.jpeg'
import cookingbaking from '../../../assets/specialityphotos/cooking&baking.jpeg'
import emergency from '../../../assets/specialityphotos/emergency.jpeg'
import firedept from '../../../assets/specialityphotos/fire dept.jpeg'
import hotels from '../../../assets/specialityphotos/hotels.jpeg'
import infosec from '../../../assets/specialityphotos/infosec.jpeg'
import optics from '../../../assets/specialityphotos/optics.jpeg'
import logistics from '../../../assets/specialityphotos/logistics.jpeg'
import metalprocessing from '../../../assets/specialityphotos/metalprocessing.jpeg'
import police from '../../../assets/specialityphotos/police.jpeg'
import programmer from '../../../assets/specialityphotos/programmer.jpeg'
import decor from '../../../assets/specialityphotos/decor.jpeg'
import economyaccounting from '../../../assets/specialityphotos/economy&accounting.jpeg'
import finance from '../../../assets/specialityphotos/finance.jpeg'
import multiflat from '../../../assets/specialityphotos/multi-flat building maintance.jpeg'
import lowcurrentsystems from '../../../assets/specialityphotos/low current systems.jpeg'
import law from '../../../assets/specialityphotos/law.jpeg'
import utilityservices from '../../../assets/specialityphotos/utility services.jpeg'
import preschooled from '../../../assets/specialityphotos/preschool ed.jpeg'
import landman from '../../../assets/specialityphotos/land man.jpeg'
import socculact from '../../../assets/specialityphotos/soc cul act.jpeg'
import nursing from '../../../assets/specialityphotos/nursing.jpeg'
import UAV from '../../../assets/specialityphotos/UAV.jpeg'
import profess from '../../../assets/godaddy/servis_2024.png'



export const secData = [


    // ot - Отрасль
    // pr - Профессия
    // img - Картинка карточки
    // fil - Филлиал
    // zp - Средняя зп
    // iimg - Фото на странице профессии
     

{
    id: 1,
    qualification: 'Техник-спасатель',
    img: emergency,
    pr: 'Защита в чрезвычайных ситуациях',
    profess: <img src={profess} className='profess4'/>,
    ot: 'Безопасность',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>, 
    fil: 
    <ul>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
    </ul>  
    ,
    skills: 
    <div>
        <li>Организация и проведение работ по ликвидации последствий чрезвычайных ситуаций</li>
        <li>Планирование и осуществление мероприятий по предотвращению аварий и катастроф природного и техногенного характера и снижению их негативных последствий</li>
        <li>Техническое обслуживание, ремонт и хранение аварийно-спасательной техники, оборудования и снаряжения</li>
    </div>,
    inf: 'Специалист по спасению людей от последствий аварий и других чрезвычайных ситуаций, а также по ликвидации последствий аварий',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%B0+%D0%B2+%D1%87%D1%80%D0%B5%D0%B7%D0%B2%D1%8B%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D1%85+%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8F%D1%85",
},

{
    id: 2,
    qualification: 'Специалист по пожарной безопасности',
    img: firedept,
    pr: 'Пожарная безопасность',
    profess: <img src={profess} className='profess5'/>,
    ot: 'Безопасность',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Организация службы пожаротушения, проведение работ по тушению пожаров и ликвидации последствий чрезвычайных ситуаций</li>
        <li>Осуществление государственных мер в области обеспечения пожарной безопасности</li>
        <li>Ремонт и обслуживание технических средств, используемых для предупреждения, тушения пожаров и проведения аварийно-спасательных работ</li>
    </div>,
    inf: 'Специалист по противопожарной защите объекта и работающего в нем персонала',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9F%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D0%B0%D1%8F+%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C",
},

{
    id: 3,
    qualification: 'Юрист',
    img: police,
    pr: 'Правоохранительная деятельность',
    profess: <img src={profess} className='profess6'/>,
    ot: 'Безопасность',
    time: <p>3 года 6 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Юридическое квалифицирование фактов, событий и обстоятельств</li>
        <li>Обеспечение законности, правопорядка, безопасности личности, общества, государства и охраны общественного порядка</li>
        <li>Осуществление профилактики преступлений и иных правонарушений, выявление и устранение причин и условий, способствующих совершению правонарушений</li>
        <li>Правила взаимодействия с сотрудниками иных правоохранительных структур, органов местного самоуправления, общественных объединений с муниципальными органами охраны общественного порядка и др</li>
    </div>,
    inf: 'Специалист по охране прав, свобод и законных интересов граждан, разрешению споров о праве, предупреждению и пресечению правонарушений',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C",
},

{
    id: 4,
    qualification: 'Сетевой и системный администратор',
    top: <div className='top1'>ТОП-50</div>,
    profess: <img src={profess} className='profess2'/>,
    img: systemadministrator,
    pr: 'Сетевое и системное администрирование',
    ot: 'IT',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>

        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Обеспечение бесперебойной работы компьютерной техники, локальной сети, программного обеспечения в офисах и компаниях</li>
        <li>Проектирование кабельной структуры компьютерной сети, настройка и эксплуатация компьютерных сетей в различных организациях и на крупных предприятиях</li>
        <li>Обеспечение информационной безопасности сетевой инфраструктуры</li>
    </div>,
    inf: 'Специалист по созданию и обслуживанию вычислительных комплексов и сетей, контролю исправной работы операционных систем и программного обеспечения',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%A1%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B5+%D0%B8%C2%A0%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%B5+%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
},

{
    id: 5,
    qualification: 'Программист',
    top: <div className='top2'>ТОП-50</div>,
    profess: <img src={profess} className='profess1'/>,
    img: programmer,
    pr: 'Информационные системы и программирование',
    ot: 'IT',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Администрирование серверных операционных сетей, построение и работа с сетями</li>
        <li>Сопровождение информационных систем</li>
        <li>Подбор и настройка конфигурации программного обеспечения</li>
        <li>Разработка кода программного продукта на современных языках программирования</li>
        <li>Интеграция программных модулей и ревьюирование программных продуктов</li>
    </div>,
    inf: 'Специалист по сопровождению баз данных, телекоммуникаций и технологий автоматизированного проектирования',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D0%B8%C2%A0%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
},
{
    id: 6,
    qualification: 'Техник по защите информации',
    img: infosec,
    pr: 'Обеспечение информационной безопасности автоматизированных систем',
    ot: 'IT',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
    </ul>,
    skills: 
    <div>
        <li>Разработка системы безопасности различных конфигураций и назначений для предотвращения информационных рисков</li>
        <li>Контроль работоспособности и эффективности применяемых в системе средств защиты информации</li>
        <li>Осуществление инструментального мониторинга защищенности систем</li>
        <li>Оптимизация программ для обеспечения конфиденциальности передаваемой информации</li>
    </div>,
    inf: 'Специалист по анализу информационных рисков, связанных с потерей данных и проникновением в IT-сети компаний',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9E%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9+%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
},
{
    id: 7,
    qualification: 'Техник',
    img: optics,
    pr: 'Производство и эксплуатация оптических и оптико-электронных приборов и систем',
    ot: 'Промышленность',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>

        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Конструирование деталей, соединений, устройств приборов по технологии безотходного производства</li>
        <li>Проводить проектные расчеты характеристик по заданной методике</li>
        <li>Выбирать оптимальный вариант конструктивного решения с учетом повышения качества оптических деталей и узлов</li>
        <li>Разработка методик юстировки, контроля параметров и характеристик оптических приборов, а также метрологическая поверка выпускаемых изделий</li>
    </div>,
    inf: 'Специалисты этого профиля занимаются производством, испытанием и юстировкой приборов оптоэлектроники',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE+%D0%BE%D0%BF%D1%82%D0%B8%D0%BA%D0%BE-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D0%BF%D1%80%D0%B8%D0%B1%D0%BE%D1%80%D0%BE%D0%B2+%D0%B8+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
},
{
    id: 8,
    qualification: 'Оператор-наладчик металлообрабатывающих станков',
    top: <div className='top3'>ТОП-50</div>,
    profess: <img src={profess} className='profess3'/>,
    img: metalprocessing,
    pr: 'Оператор-наладчик металлообрабатывающих станков',
    ot: 'Промышленность',
    time: <p>1 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>

        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Программирование станков и манипуляторов с программным управлением</li>
        <li>Изготовление деталей на станках различных типов и видов, включая токарные и фрезерные станки с ЧПУ</li>
        <li>Оформление технической документации</li>
        <li>технологическАнализ действующих их процессов</li>
    </div>,
    inf: 'Оператор-наладчик металлообрабатывающих станков – это рабочий, который выполняет работы по ведению процесса обработки с пульта управления деталей на налаженных станках с программным управлением',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%BD%D0%B0%D0%BB%D0%B0%D0%B4%D1%87%D0%B8%D0%BA+%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85+%D1%81%D1%82%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2",
},
{
    id: 9,
    qualification: 'Оператор беспилотных летательных аппаратов',
    img: UAV,
    pr: 'Эксплуатация беспилотных авиационных систем',
    ot: 'Промышленность',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
    </ul>,
    skills: 
    <div>
        <li>Подготовка беспилотного воздушного судна, летательного аппарата к полету</li>
        <li>Создание полетных заданий</li>
        <li>Контроль технического состояния и техническое обслуживание беспилотника</li>
        <li>Анализ полученных цифровых материалов, их обработка</li>
    </div>,
    inf: 'Специалист по управлению беспилотным воздушным судном вертолетного и самолетного типа, регистрации данных, полученных во время полета аппарата, обработке информации, применению ее в аэронавигации',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%AD%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8F+%D0%B1%D0%B5%D1%81%D0%BF%D0%B8%D0%BB%D0%BE%D1%82%D0%BD%D1%8B%D1%85+%D0%B0%D0%B2%D0%B8%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
},
{
    id: 10,
    qualification: 'Мастер сельскохозяйственного производства',
    img: agricultural,
    pr: 'Мастер сельскохозяйственного производства',
    ot: 'Промышленность',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Выполнять работы по техническому обслуживанию сельскохозяйственных машин и оборудования при помощи стационарных и передвижных средств технического обслуживания и ремонта</li>
        <li>Проводить ремонт, наладку и регулировку отдельных узлов и деталей тракторов, самоходных и других сельскохозяйственных машин, прицепных и навесных устройств, оборудования животноводческих ферм и комплексов с заменой отдельных частей и деталей</li>
        <li>Собирать и устанавливать агрегаты и сборочные единицы тракторов и самоходных сельскохозяйственных машин стационарно и в полевых условиях</li>
        <li>Обеспечивать безопасность при выполнении погрузочно-разгрузочных работ и транспортировке грузов на тракторах - заправлять топливом и смазывать тракторы, навесные и прицепные сельскохозяйственные орудия, самоходные и другие сельскохозяйственные машины</li>
    </div>,
    inf: 'Мастер-наладчик по техническому обслуживанию машинно-тракторного парка, слесарь по ремонту сельскохозяйственных машин и оборудования',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80+%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0",
},
{
    id: 11,
    qualification: 'Операционный логист',
    img: logistics,
    pr: 'Операционная деятельность в логистике',
    profess: <img src={profess} className='profess8'/>,
    ot: 'Транспорт',
    time: <p>2 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>

        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Тучковский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Звенигородский филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
        <li>Планирование логистического процесса в организациях</li>
        <li>Управление логистическими процессами в закупках и производстве</li>
        <li>Оптимизация ресурсов организации, связанных с управлением материальными и нематериальными потоками</li>
        <li>Оценка эффективности работы логистических систем и контроль логистических операций</li>
    </div>,
    inf: 'Специалист по построению оптимальных маршрутов движения товаров, контролю за товаром в процессе его перевозки от производителя до покупателя. Логист планирует и организовывает закупку грузов, их транспортировку, доставку и разгрузку, грамотно распределяет их в складских помещениях, следит за сбытом товара и контролирует остатки и запасы на складе',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F+%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C+%D0%B2%C2%A0%D0%BB%D0%BE%D0%B3%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B5",
},
{
    id: 12,
    qualification: 'Слесарь по ремонту автомобилей, водитель автомобиля',
    top: <div className='top4'>ТОП-50</div>,
    img: carrep,
    pr: 'Мастер по ремонту и обслуживанию автомобилей',
    ot: 'Транспорт',
    time: <p>1 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>
        
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Истринский филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
       <li>Проведение регламентного технического обслуживания автомобилей</li>
        <li>Выполнение работ по предпродажной подготовке автомобилей</li>
        <li>Выполнение демонтажных и монтажных работ в процессе ремонта</li>
        <li>Выполнение шиномонтажных работ</li>
        <li>Ремонт автомобилей в соответствии с требованиями и технологиями автопроизводителей</li>
    </div>,
    inf: 'Специалист по ремонту и техническому обслуживанию автомобилей (легковых, грузовых, автобусов). Одна из наиболее перспективных рабочих профессий на рынке труда',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80+%D0%BF%D0%BE%C2%A0%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D1%83+%D0%B8%C2%A0%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E+%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B5%D0%B9",
},
{
    id: 13,
    qualification: 'Специалист по поварскому и кондитерскому делу',
    top: <div className='top5'>ТОП-50</div>,
    profess: <img src={profess} className='profess7'/>,
    img: cookingbaking,
    pr: 'Поварское и кондитерское дело',
    ot: 'Гостеприимство',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>
        
        <li>Тучковский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Звенигородский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Истринский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
        <li>Приготовление блюд по технологическим картам</li>
        <li>Комбинирование способов приготовления и сочетания продуктов для создания гармоничных блюд</li>
        <li>Творческое оформление блюд</li>
        <li>Разработка меню и рецептов</li>
        <li>Организация процесса производства от планирования сырья до приготовления готовых кулинарных изделий</li>
    </div>,
    inf: 'Специалист по организации процесса приготовления блюд и кулинарных изделий сложного ассортимента',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9F%D0%BE%D0%B2%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%B5+%D0%B8%C2%A0%D0%BA%D0%BE%D0%BD%D0%B4%D0%B8%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B5+%D0%B4%D0%B5%D0%BB%D0%BE",
},
{
    id: 14,
    qualification: 'Специалист по туризму и гостеприимству',
    top: <div className='top6'>ТОП-50</div>,
    profess: <img src={profess} className='profess9'/>,
    img: hotels,
    pr: 'Туризм и гостеприимство',
    ot: 'Гостеприимство',
    time: <p>2 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
   
        <li>Звенигородский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Ведение операционных процедур всех служб отеля</li>
        <li>Работа с разными каналами системы бронирования</li>
        <li>Профессиональные коммуникации с гостями и партерами</li>
        <li>Формирование туров по массовым направлениям на базе чартерных и регулярных рейсов</li>
        <li>Формирование маршрутов экскурсий, программ экскурсионного обслуживания</li>
    </div>,
    inf: 'Специалист по организации и обслуживанию гостей в гостиницах, туристических комплексах. Он бронирует заказы, встречает и размещает гостей, продает туристические путевки и организовывает путешествия',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%A2%D1%83%D1%80%D0%B8%D0%B7%D0%BC+%D0%B8%C2%A0%D0%B3%D0%BE%D1%81%D1%82%D0%B5%D0%BF%D1%80%D0%B8%D0%B8%D0%BC%D1%81%D1%82%D0%B2%D0%BE",
},
{
    id: 15,
    qualification: 'Финансист',
    img: finance,
    pr: 'Финансы',
    ot: 'Торговля и финансы',
    time: <p>2 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        <li>Заочная</li>
    </ul>,  
    fil: 
    <ul>

        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Ведение бухгалтерского и налогового учета</li>
        <li>Разработка стратегии движения финансовых потоков</li>
        <li>Формирование ценовой политики организации</li>
        <li>Создание бизнес-плана</li>
        <li>Исследование рынка, финансового состояния предприятия</li>
    </div>,
    inf: 'Специалист по кредитованию, инвестициям и другим финансовым операциям',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D1%8B",
},
{
    id: 16,
    qualification: 'Бухгалтер',
    img: economyaccounting,
    pr: 'Экономика и бухгалтерский учет',
    ot: 'Торговля и финансы',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        <li>Заочная</li>
    </ul>,  
    fil: 
    <ul>

        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Шаховской филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
        <li>Ведение бухгалтерского учета активов организации и источников формирования активов</li>
        <li>Проведение и оформление хозяйственных операций</li>
        <li>Инвентаризация активов и финансовых обязательств организации</li>
        <li>Ведение бухгалтерской и налоговой отчетности</li>
        <li>Управление бизнес-процессами</li>
        <li>Работа в системах 1С Бухгалтерия, 1С Предприятие</li>
    </div>,
    inf: 'Специалист по первичной документации, подготовке бухгалтерской и налоговой отчетности в контролирующие органы',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0+%D0%B8%C2%A0%D0%B1%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D1%83%D1%87%D0%B5%D1%82",
},

{
    id: 17,
    qualification: 'Медицинская сестра(медицинский брат)',
    img: nursing,
    pr: 'Сестринское дело',
    ot: 'Здравоохранение',
    time: <p>2 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
       
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Истринский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Звенигородский филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
       <li>Уход за пациентами</li>
        <li>Техники сестринских манипуляций: выполнение инъекций (внутримышечных, внутривенных, подкожных), забора крови из вены; обработка различных видов ран; наложение повязок; измерение артериального давления</li>
        <li>Наблюдение за состоянием больного</li>
        <li>Выполнение лечебных процедур, назначенных врачом</li>
        <li>Проведение сердечно-легочной реанимации</li>
        <li>Оформление медицинской документации</li>
    </div>,
    inf: 'Специалист по своевременному и качественному оказанию сестринской помощи',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%A1%D0%B5%D1%81%D1%82%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5+%D0%B4%D0%B5%D0%BB%D0%BE",
},
{
    id: 18,
    qualification: 'Воспитатель детей дошкольного возраста',
    img: preschooled,
    pr: 'Дошкольное образование',
    ot: 'Образование и социальная среда',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
    </ul>,
    skills: 
    <div>
       <li>Планирование и проведение развивающих занятий</li>
        <li>Организация детского досуга, распорядка дня</li>
        <li>Общение с детьми и родителями, воспитательная работа</li>
        <li>Организация общения дошкольников в повседневной жизни</li>
        <li>Порядок оказания первой медицинской помощи</li>
    </div>,
    inf: 'Специалист по обучению и воспитанию детей дошкольного возраста (до 7 лет)',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%94%D0%BE%D1%88%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",
},
{
    id: 19,
    qualification: 'Юрист',
    img: law,
    pr: 'Юриспруденция',
    ot: 'Образование и социальная среда',
    time: <p>2 года 10 мес. - 3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        <li>Заочная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Красногорский филиал ГБПОУ МО "Красногорский колледж"</li>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Осуществлять профессиональное толкование норм права</li>
        <li>Использовать нормы права, решая задачи в профессиональной деятельности</li>
        <li>Готовить юридические документы, в том числе используя информационные технологии</li>
        <li>Оказывать юридическую помощь компаниям и физическим лицам</li>
        <li>Соблюдать права граждан в сфере пенсионного обеспечения и соцзащиты</li>
        <li>Работать с юридическими и судебными документами, формировать архивы, вести базы данных</li>
        <li>Обеспечивать законность и правопорядок, безопасность в обществе, контролировать соблюдение текущего законодательства РФ</li>
        <li>Соблюдать нормы профессиональной этики при работе с гражданами и сотрудничестве с коллегами</li>
    </div>,
    inf: 'Специалисты выполняют толкование законов и оказывают юридическую помощь своим клиентам, в том числе выступают в суде',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%AE%D1%80%D0%B8%D1%81%D0%BF%D1%80%D1%83%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D1%8F",
},
{
    id: 20,
    qualification: 'Менеджер социально-культурной деятельности',
    img: socculact,
    pr: 'Социально – культурная деятельность',
    ot: 'Образование и социальная среда',
    time: <p>2 года 10 мес. - 3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        <li>Заочная</li>
    </ul>,  
    fil: 
    <ul>
        
        <li>Шаховской филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
        <li>Разработка и осуществление социально-культурных проектов и программ, организация социально-культурной деятельности в культурно-досуговых учреждениях</li>
        <li>разработка и осуществление сценарных планов культурно-массовых мероприятий и театрализованных представлений, эстрадных номеров и концертов, режиссура культурно-массовых мероприятий, театрализованных представлений, эстрадных программ, кампаний, промо-акций, анимационная деятельность</li>
        <li>Участие в финансово-хозяйственной деятельности учреждений социально-культурной сферы, использование информационных и телекоммуникационных технологий в профессиональных целях</li>
    </div>,
    inf: 'Специалист, который занимается разработкой и реализацией социально-культурных программ, организацией и постановкой культурно-массовых мероприятий, культурно-досуговых программ, и, конечно, разбираться в вопросах финансирования',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%A1%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE+%E2%80%93+%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F+%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C",
},
{
    id: 21,
    qualification: 'Техник',
    img: multiflat,
    pr: 'Эксплуатация и обслуживание многоквартирного дома',
    ot: 'Строительство',
    time: <p>2 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Истринский филиал ГБПОУ МО "Красногорский колледж"</li>
    </ul>,
    skills: 
    <div>
        <li>Формирование базы данных о собственниках и нанимателях помещений в многоквартирном доме</li>
        <li>Эксплуатация, обслуживание и ремонт многоквартирного дома</li>
        <li>Оперативный учет и контроль качества выполняемых услуг, работ по эксплуатации</li>
        <li>Организация и контроль качества услуг по эксплуатации, обслуживанию и ремонту систем ЖКХ, проведения аварийно-ремонтных и восстановительных работ</li>
        <li>Ведение технической и иной документации на многоквартирный дом</li>
    </div>,
    inf: 'Специалист по организации и проведению работ по обеспечению сохранности общего имущества многоквартирного дома, комфортных и безопасных условий проживания жильцов',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%AD%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8F+%D0%B8%C2%A0%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5+%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B4%D0%BE%D0%BC%D0%B0",
},
{
    id: 22,
    qualification: 'Облицовщик – плиточник; штукатур',
    top: <div className='top7'>ТОП-50</div>,
    img: decor,
    pr: 'Мастер отделочных строительных и декоративных работ',
    ot: 'Строительство',
    time: <p>1 год 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>
        
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Подготовка для выполнения штукатурных и декоративных работ</li>
        <li>Приготовление обычных и декоративных штукатурных растворов, смесей</li>
        <li>Все виды штукатурных работ</li>
        <li>Ремонт оштукатуренных поверхностей</li>
        <li>Создание стяжек и наливных полов</li>
    </div>,
    inf: 'Специалист по обработке сухой древесины и изготовлению деревянных изделий, штукатурным работам, ремонту и реставрации различного типа сооружений, обустройству половых покрытий и облицовке стен',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80+%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D1%85+%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85+%D0%B8%C2%A0%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85+%D1%80%D0%B0%D0%B1%D0%BE%D1%82",
},
{
    id: 23,
    qualification: 'Слесарь-сантехник, электромонтажник по освещению и осветительным сетям',
    img: utilityservices,
    pr: 'Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства',
    ot: 'Строительство',
    time: <p>1 год 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>

        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>

    </ul>,
    skills: 
    <div>
        <li>Эксплуатация зданий, сооружений, конструкций, оборудования систем водоснабжения, водоотведения, отопления и осветительных сетей жилищно-коммунального хозяйства</li>
        <li>Поддержание в рабочем состоянии силовых и слаботочных систем зданий и сооружений, систем освещения осветительных сетей ЖКХ</li>
    </div>,
    inf: 'Специалист по обслуживанию и ремонту силовых и слаботочных систем зданий и сооружений, систем водоснабжения и водоотведения, отопления, освещения объектов ЖКХ',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80+%D0%BF%D0%BE%C2%A0%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D1%83+%D0%B8%C2%A0%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E+%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%BD%D1%8B%D1%85+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC+%D0%B6%D0%B8%D0%BB%D0%B8%D1%89%D0%BD%D0%BE-%D0%BA%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE+%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B0",
},
{
    id: 24,
    qualification: 'Электромонтажник',
    img: lowcurrentsystems,
    pr: 'Электромонтажник слаботочных систем',
    ot: 'Строительство',
    time: <p>1 год 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
    </ul>,  
    fil: 
    <ul>
        <li>Волоколамский филиал ГБПОУ МО "Красногорский колледж"</li>
    </ul>,
    skills: 
    <div>
        <li>Выполнять работы по установке и монтажу линейных сооружений, оборудования, аппаратуры и приборов систем сигнализации, тревожной и охранно-пожарной сигнализаций в соответствии с заданием</li>
        <li>Проводить пусконаладочные работы системы блокировки и оборудования охранного освещения</li>
        <li>Осуществлять техническую эксплуатацию оборудования, аппаратуры и приборов систем сигнализации, тревожной и охранно-пожарной сигнализаций</li>
        <li>Диагностировать системы и комплексы технических средств оборудования, аппаратуры и приборов систем сигнализации, тревожной и охранно-пожарной сигнализаций</li>
    </div>,
    inf: 'Специалисты в области строительства и жилищно-коммунального хозяйства',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B8%D0%BA+%D1%81%D0%BB%D0%B0%D0%B1%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D1%85+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
},

{
    id: 25,
    qualification: 'Специалист по землеустройству',
    img: landman,
    pr: 'Землеустройство',
    ot: 'Строительство',
    time: <p>3 года 10 мес.</p>,
    form: 
    <ul>
        <li>Очная</li>
        
    </ul>,  
    fil: 
    <ul>
        
        <li>Шаховской филиал ГБПОУ МО "Красногорский колледж"</li>
        
    </ul>,
    skills: 
    <div>
        <li>Геодезическая съемка</li>
        <li>Определение границ при споре на право собственности</li>
        <li>Решение спорных вопросов инвентаризации построек</li>
        <li>Знание земельного права</li>
        <li>Ведение кадастрового учета, регистрация земельных участков и сооружений</li>
    </div>,
    inf: 'Специалист по оценке объектов недвижимости, земельных участков, анализу имущественных отношений',
    vac: "https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&links_color=4e4e4e&border_color=e9e9e9&host=hh.ru&text=%D0%97%D0%B5%D0%BC%D0%BB%D0%B5%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE",
},



]