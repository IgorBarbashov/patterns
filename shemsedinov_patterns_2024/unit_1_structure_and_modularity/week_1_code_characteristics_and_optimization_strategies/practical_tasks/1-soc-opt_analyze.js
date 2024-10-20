'use strict';

// Tasks for rewriting:
//   - Apply optimizations of computing resources: processor, memory
//   - Minimize cognitive complexity
//   - Respect SRP and SoC
//   - Improve readability (understanding), reliability
//   - Optimize for maintainability, reusability, flexibility
//   - Make code testable
//   - Implement simple unittests without frameworks
//   - Try to implement in multiple paradigms: OOP, FP, procedural, mixed

const data = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

// в функции обработки данных можно использовать early return
if (data) {
  // надо разделить парсинг данных и работу с подготовленными данными
  const lines = data.split('\n');
  // при парсинге данных сразу убираем ненужную строку
  lines.pop();
  const table = [];

  // будет ненужно, если при парсинге данных сразу убираем ненужную строку
  let first = true;

  // выносим в отдельную функцию - работа с density
  let max = 0;

  // 1. получает новый массив table (разбиение по колонкам), все данные в нем остаются в виде строки
  // будем так же оставлять в виде строки, т.к. в конечном итоге при выводе данных они нам нужны именно как строки
  // т.о. оптимизируем выделение памяти под массив
  // а преобразовывать в number будем только то что нужно и только тогда когда нужно при работе с готовыми входными данными
  // по возможности стараясь избежать повторных одинаковых преобразований
  // 2. подсчитывает max of density - для этого ячейку density каждой строки переводим в number
  // надо разделить парсинг данных и работу с подготовленными данными (в парсинг включить первый split)
  for (const line of lines) {
    if (first) {
      // пропускает первую строку
      // будет ненужно, если ее уберем сразу при парсинге
      first = false;
    } else {
      // в парсинг
      const cells = line.split(',');
      // в работу с подготовленными данными
      const d = parseInt(cells[3]);
      // в отдельную функцию поиска maximum по столбцу density (для этого его преобразуем в number)
      if (d > max) max = d;
      // сплитим строку и пушим это в table
      // в парсинг
      table.push([cells[0], cells[1], cells[2], cells[3], cells[4]]);
    }
  }

  // проходим по каждой строке, нормализуем колонку density
  // добавляем в массив каждой country еще один элемент percent
  // выносим расчет нормализованных densities в отдельную функцию,
  // а соединяем вычисленные данные со входными тоже в отдельной функции - подготовки данных для вывода
  for (const row of table) {
    const a = Math.round(row[3] * 100 / max);
    row.push(a.toString());
  }

  // сортируем по percent (можно оставлять в number)
  // вынесем в отдельную функцию
  table.sort((r1, r2) => r2[5] - r1[5]);

  // форматируем и выводим - отдельная функция
  for (const row of table) {
    let s = row[0].padEnd(18);
    s += row[1].padStart(10);
    s += row[2].padStart(8);
    s += row[3].padStart(8);
    s += row[4].padStart(18);
    s += row[5].padStart(6);
    console.log(s);
  }
}
