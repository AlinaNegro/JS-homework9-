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

const catGreeting = `${greetings}, ${name}`

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