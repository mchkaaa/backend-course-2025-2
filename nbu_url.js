// Константи для варіанту 7
const date = '202302';
const time_period = 'm';

// Створюємо об'єкт URL
const nbuUrl = new URL('https://bank.gov.ua/');

// Додаємо шлях до API
nbuUrl.pathname = '/NBUStatService/v1/statdirectory/inflation';

// Отримуємо об'єкт для роботи з параметрами
const params = nbuUrl.searchParams;

// Додаємо параметри
params.append('period', time_period);
params.append('date', date);
params.append('json', '');

// Виводимо URL у консоль
console.log(nbuUrl.toString());
