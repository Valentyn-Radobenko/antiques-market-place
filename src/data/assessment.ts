import { AssessmentForm, AssessmentInfo } from '../types/assessment';

export const assessmentInfo: AssessmentInfo[] = [
  {
    id: 1,
    title: '”Базова оцінка предмета” ',
    text1:
      'Коротка консультація або базова оцінка, яка дає загальне уявлення про предмет. Ви дізнаєтеся його орієнтовну вартість та контекст: історію, приблизний вік, стиль чи значення.',
    important:
      'Оцінка проводиться за візуальними характеристиками; обов’язково надайте фото хорошої якості.',
    text2: '',
    price: 'Оцінка: 400 грн. + 2%  від вартості предмету',
    list: [
      'Опис характеристик предмета.',
      'Оцінка (в якому стані предмет) та орієнтовна вартість.',
    ],
  },
  {
    id: 2,
    title: '“Експертиза. Отримати сертифікат автентичності”',
    text1:
      'Професійний висновок, що підтверджує оригінальність предмета. Підписується експертом і може бути використаний для продажу, розміщення в музеях, аукціонах та інших платформах.',
    important:
      'Експертиза завжди проводиться за допомогою фізичного контакту з предметом, тому для отримання об’єктивного результату необхідно надати предмет оцінки.',
    text2:
      'Предмет можна передати на експертизу за допомогою послуг нової пошти. або ж при особистій зустрічі.Експертиза займає від 10 днів до 1 місяця.',
    price: 'Оцінка: 400 грн. + 2%  від вартості предмету',
    list: [
      'Офіційний сертифікат автентичності.',
      'Опис характеристик предмета.',
      'Підтвердження, яке визнається професійною спільнотою.(Міжнародний сертифікат?)',
    ],
  },
];

export const assessmentForm: AssessmentForm[] = [
  {
    id: 0,
    title: ' Оцінювання предмету',
    text: 'Надішліть фото та інформацію, якщо володієте такою. Після перегляду фото предмету, вам надішлють наступну інформацію, щодо етапів оцінювання.',
  },
  {
    id: 1,
    title: 'Експертиза предмету',
    text: 'Надішліть фото та інформацію, якщо володієте такою. Після перегляду фото предмету, вам надішлють наступну інформацію, щодо етапів експертизи.',
    important:
      'Для надання послуг експертизи, а також відповідних документів, предмет має бути  оглянутий експертом.',
  },
];
