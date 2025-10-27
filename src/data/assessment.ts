import {
  localizedAssessmentForms,
  localizedAssessmentInfos,
} from '../types/assessment';

export const assessmentInfo: localizedAssessmentInfos = {
  ua: [
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
  ],
  en: [
    {
      id: 1,
      title: '”Basic valuation of the item” ',
      text1:
        'A brief consultation or basic valuation that gives a general idea of ​​the item. You will learn its approximate value and context: history, approximate age, style or meaning.',
      important:
        'The valuation is carried out based on visual characteristics; be sure to provide a good quality photo.',
      text2: '',
      price: 'Estimate: 400 UAH. + 2% of the value of the item',
      list: [
        'Description of the characteristics of the item.',
        'Estimate (in what condition the item is) and approximate value.',
      ],
    },
    {
      id: 2,
      title: '“Expertise. Obtain a certificate of authenticity”',
      text1:
        'A professional conclusion confirming the originality of the item. Signed by an expert and can be used for sale, placement in museums, auctions and other platforms.',
      important:
        'The examination is always carried out through physical contact with the object, therefore, to obtain an objective result, it is necessary to provide the subject of the assessment.',
      text2:
        'The object can be submitted for examination using the new mail services. or at a personal meeting. The examination takes from 10 days to 1 month.',
      price: 'Estimate: 400 UAH. + 2% of the cost of the object',
      list: [
        'Official certificate of authenticity.',
        'Description of the characteristics of the object.',
        'Confirmation recognized by the professional community. (International certificate?)',
      ],
    },
  ],
};

export const assessmentForm: localizedAssessmentForms = {
  ua: [
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
  ],
  en: [
    {
      id: 0,
      title: ' Item Evaluation',
      text: 'Send a photo and information, if you have it. After viewing the photo of the item, you will be sent the following information regarding the stages of the evaluation.',
    },
    {
      id: 1,
      title: 'Item Examination',
      text: 'Send a photo and information, if you have it. After viewing the photo of the item, you will be sent the following information regarding the stages of the examination.',
      important:
        'To provide examination services, as well as relevant documents, the item must be examined by an expert.',
    },
  ],
};
