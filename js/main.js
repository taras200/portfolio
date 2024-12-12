$(function () {

  $('.menu-btn ,.menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');

  });

  var arrLang = {
    'en': {
      'home': 'Home',
      'more': 'More Project',
      'about': 'About',
      'service': 'Services',
      'portfolio': 'Portfolio',
      'contact': 'Contact',
      'home__text-author': 'Greetings! My name is Taras',
      'home__text-desc': 'Working with me is a smart choice for saving time and ensuring the professional execution of your tasks. By choosing me, you’re trusting a reliable specialist. All your problems are already solved.',
      'about-inner__text-title': 'Technologies I know and use:',
      'about-inner__text-desc': 'HTML and CSS (including grids and CSS frameworks), Popular CMS(WordPress, Joomla, etc.), Debugging tools(Chrome DevTools, and others), Version control tools(Git, GitHub, etc.), Graphic editors(Photoshop, Illustrator, etc.), CSS Preprocessors(scss, sass), JavaScript(jQuery), Bootstrap 4, GULP 4',
      'home__text-btn': 'Contact Me',
      'about-inner__text-btn': 'Download CV',
      'services-title': 'What I do?',
      'services-desc': 'Cross-browser and cross-platform development, Progressive enhancement and graceful, Mobile technology adaptation, Responsive and adaptive design, Web fonts, SEO optimization principles, Edits for websites of any complexity, Software protection and website security',
      'services-inner__offers-title1': 'Website creation on CMS WordPress',
      'services-inner__offers-title2': 'HTML, CSS, SCSS, JavaScript',
      'services-inner__offers-title3': 'Site Enhancement',
      'services-inner__offers-desc1': 'Development, customization, performance optimization, error fixing, and multilingual support',
      'services-inner__offers-desc2': 'Website layout, modifications, and improvements,adaptive design, Cross-browser and cross-platform development,Web fonts, SEO optimization principles,',
      'services-inner__offers-desc3': 'Speed optimization for coding, Website installation on hosting, Edits for websites of any complexity ,Software protection and website security',
      'portfolio-inner__title': 'Portfolio',
      'portfolio-inner__desc': 'There are some of my landings and works you can touch.',
      'portfolio-inner__item-sub1': 'Marchod',
      'portfolio-inner__item-title1': 'Clothing site stores',
      'portfolio-inner__item-desc1': 'This site was created for clothing stores. Mobile adaptation was add',
      'portfolio-inner__item-btn1': 'Show Me',
      'portfolio-inner__item-sub2': 'Wawe',
      'portfolio-inner__item-title2': 'WAWE Surfing school in the Canary Islands',
      'portfolio-inner__item-desc2': 'This site was created for Surfing school in the Canary Islands. Mobile adaptation was add',
      'portfolio-inner__item-sub3': 'Whiski',
      'portfolio-inner__item-title3': 'Whiski Product Landing',
      'portfolio-inner__item-desc3': 'Blended Scotch whisky is the top seller in Europe',
      'home__text-btn1': 'Let’s work Together',
      'discus__desc': 'If you don’t see the service you need on the list, send me a message — we’ll find a solution! By choosing me, you’re trusting a reliable specialist.All your problems are already solved. ',
      'discus__title': 'Do you have Project Idia? Lets discuss your project!',
    },
    'ua': {
      'home': 'Головна',
      'more': 'Більше про проектів',
      'about': 'Про мене',
      'service': 'Послуги',
      'portfolio': 'Портфоліо',
      'contact': 'Контакти',
      'home__text-author': 'Вітаю вас! Мене звати Тарас',
      'home__text-desc': 'Співпраця зі мною - це розумний вибір для економії часу та забезпечення професійного виконання ваших завдань. Обираючи мене, ви довіряєте надійному спеціалісту. Всі ваші проблеми вже вирішені.',
      'about-inner__text-title': 'Технології, які я знаю і використовую:',
      'about-inner__text-desc': 'HTML and CSS (including grids and CSS frameworks), Popular CMS(WordPress, Joomla, etc.), Debugging tools(Chrome DevTools, and others), Version control tools(Git, GitHub, etc.), Graphic editors(Photoshop, Illustrator, etc.), CSS Preprocessors(scss, sass), JavaScript(jQuery), Bootstrap 4, GULP 4',
      'home__text-btn': 'Звяжіться зі мною',
      'about-inner__text-btn': 'Завантажити резюме',
      'services-title': 'Що я роблю?',
      'services-desc': 'Кросбраузерна та кросплатформенна розробка, Прогресивне вдосконалення та витонченість, Адаптація мобільних технологій, Чутливий та адаптивний дизайн, Веб-шрифти, Принципи SEO-оптимізації, Правки для веб-сайтів будь-якої складності, Захист програмного забезпечення та безпека веб-сайтів',
      'services-inner__offers-title1': 'Створення сайту на CMS WordPress',
      'services-inner__offers-title2': 'HTML, CSS, SCSS, JavaScript',
      'services-inner__offers-title3': 'Покращення сайту',
      'services-inner__offers-desc1': 'Розробка, кастомізація, оптимізація продуктивності, виправлення помилок та багатомовна підтримка',
      'services-inner__offers-desc2': 'Верстка, модифікація та вдосконалення веб-сайтів, адаптивний дизайн, кросбраузерна та кросплатформенна розробка, веб-шрифти, принципи SEO-оптимізації,',
      'services-inner__offers-desc3': 'Оптимізація швидкості кодування, встановлення сайту на хостинг, редагування сайтів будь-якої складності, захист програмного забезпечення та безпека сайтів',
      'portfolio-inner__title': 'Портфоліо',
      'portfolio-inner__desc': 'Ось деякі з моїх лендингів і робіт, до яких ви можете доторкнутися.',
      'portfolio-inner__item-sub1': 'Marchod',
      'portfolio-inner__item-title1': 'Сайт магазину одягу',
      'portfolio-inner__item-desc1': 'Цей сайт був створений для магазинів одягу. Була додана мобільна адаптація',
      'portfolio-inner__item-btn1': 'Покажи мені.',
      'portfolio-inner__item-sub2': 'Wawe',
      'portfolio-inner__item-title2': 'WAWE Школа серфінгу на Канарських островах',
      'portfolio-inner__item-desc2': 'Цей сайт був створений для школи серфінгу на Канарських островах. Була додана мобільна адаптація',
      'portfolio-inner__item-sub3': 'Whiski',
      'portfolio-inner__item-title3': 'Лендінг продукту віскі',
      'portfolio-inner__item-desc3': 'Купажований шотландський віскі - лідер продажів у Європі',
      'home__text-btn1': 'Працюймо разом',
      'discus__desc': 'Якщо ви не знайшли потрібну вам послугу в списку, напишіть мені - ми знайдемо рішення! Обираючи мене, ви довіряєте надійному фахівцю, всі ваші проблеми вже вирішені.',
      'discus__title': 'У вас є проект? Давайте обговоримо ваш проект!',
    },
    'ru': {
      'home': 'Главная',
      'more': 'Больше проектов',
      'about': 'Про меня',
      'service': 'Услуги',
      'portfolio': 'Портфолио',
      'contact': 'Связаться',
      'home__text-author': 'Приветствую вас! Меня зовут Тарас',
      'home__text-desc': 'Сотрудничество со мной - разумный выбор, позволяющий сэкономить время и обеспечить профессиональное выполнение ваших задач. Выбирая меня, вы доверяете надежному специалисту. Все ваши проблемы уже решены.',
      'about-inner__text-title': 'Технологии, которые я знаю и использую:',
      'about-inner__text-desc': 'HTML and CSS (including grids and CSS frameworks), Popular CMS(WordPress, Joomla, etc.), Debugging tools(Chrome DevTools, and others), Version control tools(Git, GitHub, etc.), Graphic editors(Photoshop, Illustrator, etc.), CSS Preprocessors(scss, sass), JavaScript(jQuery), Bootstrap 4, GULP 4',
      'home__text-btn': 'Свяжитесь со мной',
      'about-inner__text-btn': 'Скачать резюме',
      'services-title': 'Чем я занимаюсь?',
      'services-desc': 'Кросс-браузерная и кросс-платформенная разработка, Прогрессивное улучшение и изящество, Адаптация мобильных технологий, Отзывчивый и адаптивный дизайн, Веб-шрифты, Принципы SEO-оптимизации, Правки для сайтов любой сложности, Защита программного обеспечения и безопасность сайтов',
      'services-inner__offers-title1': 'Создание сайта на CMS WordPress',
      'services-inner__offers-title2': 'HTML, CSS, SCSS, JavaScript',
      'services-inner__offers-title3': 'Улучшение сайта',
      'services-inner__offers-desc1': 'Разработка, настройка, оптимизация производительности, исправление ошибок и многоязычная поддержка',
      'services-inner__offers-desc2': 'Верстка, модификация и улучшение сайтов, адаптивный дизайн, кроссбраузерная и кроссплатформенная разработка, веб-шрифты, принципы SEO-оптимизации',
      'services-inner__offers-desc3': 'Оптимизация скорости кодирования, установка сайта на хостинг, правки для сайтов любой сложности, защита программного обеспечения и безопасность сайта',
      'portfolio-inner__title': 'Портфолио',
      'portfolio-inner__desc': 'Есть несколько моих посадок и работ, которые можно потрогать.',
      'portfolio-inner__item-sub1': 'Marchod',
      'portfolio-inner__item-title1': 'Сайт магазина одежды',
      'portfolio-inner__item-desc1': 'Этот сайт был создан для магазинов одежды. Была добавлена мобильная адаптация',
      'portfolio-inner__item-btn1': 'Покажи мне',
      'portfolio-inner__item-sub2': 'Wawe',
      'portfolio-inner__item-title2': 'WAWE Школа серфинга на Канарских островах',
      'portfolio-inner__item-desc2': 'Этот сайт был создан для школы серфинга на Канарских островах. Была добавлена мобильная адаптация',
      'portfolio-inner__item-sub3': 'Whiski',
      'portfolio-inner__item-title3': 'Whiski Лендинг',
      'portfolio-inner__item-desc3': 'Купажированный шотландский виски - лидер продаж в Европе',
      'home__text-btn1': 'Давайте работать вместе',
      'discus__desc': 'Если в списке нет нужной вам услуги, напишите мне - мы найдем решение! Выбирая меня, вы доверяете надежному специалисту. Все ваши проблемы уже решены. ',
      'discus__title': 'У вас есть проект? Давайте обсудим ваш проект!',
    },
  }

  $(function () {
    $('.translate').click(function () {
      var lang = $(this).attr('id');

      $('.lang').each(function (index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

});


