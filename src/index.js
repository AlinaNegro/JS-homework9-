//Задание 1
const salaryCleaner = 40000;
const salaryVocalTeacher = 22000;

const salaryTotal = salaryCleaner + salaryVocalTeacher;

console.log(salaryTotal);

//Задание 2
const cityName = 'Владивосток';
const a = 2000;

const songName = `${cityName} ${a}`;

console.log(songName);

//Задание 3
const messageTime = 128;
const likesTime = 254;
const vkTime = 137;
const youTubeTime = 201;

const procrastinationMinutes = messageTime + likesTime + vkTime + youTubeTime;
const procrastinationHours = procrastinationMinutes / 60;

console.log (procrastinationHours);

//Задание 4
const b = 2**5;

console.log(b)

//Задание 5
console.log(`"Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"`)

//Задание 6
const greetings = "Привет";
const name = "Кот";

const catGreeting = `${greetings + "," + " " + name}`

console.log(catGreeting);

//Задание 7
let time;
time = 34;
console.log(`'Старт поездки. Осталось минут: '` + time);
time -= 15;
console.log(`'Немного сторис в соцсетях. Осталось минут: '` + time);
time -=10;
console.log(`'Немного не новостей, но событий. Осталось минут: '` + time);
time = 0;
console.log(`'Вы приехали. Добро пожаловать в Москву!'`);

//Задание 8
const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;

const degrees = `${fahrenheit} градус по Фаренгейту - это ${celsius} градуса по Цельсию.`;

console.log(degrees)

//Задание 9 (дополнительное)

let interestRate = 18.5;
const deposit = '30000';
const growth = '150';
const currency = 'руб';

let message;

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`); // Ваш депозит на начало расчетного периода составлял 30000 руб
console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`); // Согласно вашему тарифу, вам была присвоена ставка 18.5%
console.log(`К концу расчетного прирост составил ${growth + " " + currency} и на данный момент ваш депозит составляет ${Number(deposit) + Number(growth) + " " +  currency}`); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

