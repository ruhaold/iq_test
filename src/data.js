import figures from './images/question-figures.jpg';
import geometricFigure from './images/question-geometric-figure.jpg';
import star from './images/question-star.jpg';

export const questionsArr = [
  {
    question: 'Ваш пол:',
    type: 'choose-one',
    answers: {
      name: 'gender',
      value: [{ Male: 'Мужчина' }, { Female: 'Женщина' }],
    },
  },
  {
    question: 'Укажите ваш возраст:',
    type: 'choose-one',
    answers: {
      name: 'age',
      value: [
        { 'under 18': 'До 18' },
        { '18-28': 'От 18 до 28' },
        { '29-35': 'От 29 до 35' },
        { 'from 36': 'От 36' },
      ],
    },
  },
  {
    question: 'Выберите лишнее:',
    type: 'choose-one',
    answers: {
      name: 'house',
      value: [
        { House: 'Дом' },
        { Hut: 'Шалаш' },
        { Bungalow: 'Бунгало' },
        { Bench: 'Скамейка' },
        { Shack: 'Хижина' },
      ],
    },
  },
  {
    question: 'Продолжите числовой ряд:   18 20 24 32',
    type: 'choose-one',
    answers: {
      name: 'number-line',
      value: [
        { 62: '62' },
        { 48: '48' },
        { 74: '74' },
        { 57: '57' },
        { 60: '60' },
        { 77: '77' },
      ],
    },
  },
  {
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    type: 'choose-color',
    answers: {
      name: 'choose-color',
      value: [
        { grey: 'grey' },
        { blue: 'blue' },
        { green: 'green' },
        { red: 'red' },
        { yellow: 'yellow' },
        { brown: 'brown' },
        { black: 'black' },
        { violet: '#850068' },
        { teal: '#46B3AC' },
      ],
    },
  },
  {
    question:
      'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    type: 'choose-color',
    answers: {
      name: 'choose-color',
      value: [
        { grey: 'grey' },
        { teal: '#46B3AC' },
        { brown: 'brown' },
        { green: 'green' },
        { black: 'black' },
        { red: 'red' },
        { violet: '#850068' },
        { yellow: 'yellow' },
        { blue: 'blue' },
      ],
    },
  },
  {
    question: 'Какой из городов лишний?',
    type: 'choose-one',
    answers: {
      name: 'city',
      value: [
        { Washington: 'Вашингтон' },
        { London: 'Лондон' },
        { Paris: 'Париж' },
        { 'New York': 'Нью-Йорк' },
        { Moscow: 'Москва' },
        { Ottawa: 'Оттава' },
      ],
    },
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    type: 'data-figures',
    image: {
      src: figures,
      alt: 'Выберите правильную фигуру',
    },
    answers: {
      name: 'choose-figure',
      value: [1, 2, 3, 4],
    },
  },
  {
    question: 'Вам привычнее и важнее:',
    type: 'choose-one',
    answers: {
      name: 'importance',
      value: [
        {
          'Enjoy every minute of your time':
            'Наслаждаться каждой минутой проведенного времени',
        },
        { 'Be mindful of the future': 'Быть устремленными мыслями в будущее' },
        {
          'Take into account past experience in daily practice':
            'Учитывать в ежедневной практике прошлый опыт',
        },
      ],
    },
  },
  {
    question:
      'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    type: 'choose-one',
    image: {
      src: geometricFigure,
      alt: 'Геометрическое изображение',
    },
    answers: {
      name: 'definition',
      value: [
        { pointed: 'Оно остроконечное' },
        { stable: 'Оно устойчиво' },
        { balance: 'Оно-находится в состоянии равновесия' },
      ],
    },
  },
  {
    question: 'Вставьте подходящее число',
    type: 'data-figures',
    image: {
      src: star,
      alt: 'Звезда с числами',
    },
    answers: {
      name: 'star',
      value: [34, 36, 53, 44, 66, 42],
    },
  },
];
