import React, { useState, ChangeEvent, FormEvent } from 'react';
import apiClient from './../../utils/apiClient';
import classNames from 'classnames';

interface FormData {
  email: string;
  code: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
}

type Props = {
  authMode: 'registration' | 'login' | null;
  setAuthMode: (authMode: 'registration' | 'login' | null) => void;
};

export const Auth: React.FC<Props> = ({ authMode, setAuthMode }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    code: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: '',
  });

  const [step, setStep] = useState<number>(1);
  const [mode, setMode] = useState<'registration' | 'login' | null>(authMode);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === 'registration') {
      // Реєстрація: код з вашого початкового прикладу
      if (step === 1) {
        try {
          await apiClient.post('/verification/send-code-registration', {
            email: formData.email,
          });
          setStep(2);
        } catch (error) {
          alert('Помилка надсилання коду. Спробуйте ще раз.');

          console.error(error);
        }
      } else if (step === 2) {
        try {
          const response = await apiClient.post(
            '/verification/verify-code/reg',
            null,
            {
              params: {
                email: formData.email,
                verification_code: formData.code,
              },
            },
          );
          if (response.status === 200) {
            setStep(3);
          }
        } catch (error) {
          alert('Невірний код підтвердження.');

          console.error(error);
        }
      } else if (step === 3) {
        if (formData.password !== formData.repeatPassword) {
          alert('Паролі не співпадають!');
          return;
        }
        setStep(4);
      } else if (step === 4) {
        if (!formData.firstName || !formData.lastName) {
          alert('Заповніть всі поля.');
          return;
        }
        setStep(5);
      } else if (step === 5) {
        const { email, phoneNumber, firstName, lastName, password } = formData;
        try {
          const response = await apiClient.post('/auth/registration', {
            email,
            phoneNumber,
            firstName,
            lastName,
            password,
          });
          if (response.status === 201) {
            alert('Реєстрацію завершено успішно!');
          }
        } catch (error) {
          alert('Помилка реєстрації. Спробуйте ще раз.');

          console.error(error);
        }
      }
    } else {
      // Авторизація
      try {
        const response = await apiClient.post('/auth/login', {
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 200) {
          alert('Вхід виконано успішно!');
        }
      } catch (error) {
        alert('Помилка авторизації. Перевірте email або пароль.');

        console.error(error);
      }
    }
  };

  const renderRegistrationStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Реєстрація</h2>
            <p>Введіть ваш email для реєстрації:</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ваш email"
              required
            />
            <button
              type="submit"
              disabled={!formData.email}
            >
              Далі
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h2>Підтвердження email</h2>
            <p>
              На <b>{formData.email}</b> надіслано код. Введіть його:
            </p>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="Код із пошти"
              required
            />
            <button
              type="button"
              onClick={() => setStep(1)}
            >
              Назад
            </button>
            <button
              type="submit"
              disabled={!formData.code}
            >
              Далі
            </button>
          </>
        );
      case 3:
        return (
          <>
            <h2>Створення пароля</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Створіть пароль"
              required
            />
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              placeholder="Повторіть пароль"
              required
            />
            <button
              type="button"
              onClick={() => setStep(2)}
            >
              Назад
            </button>
            <button type="submit">Далі</button>
          </>
        );
      case 4:
        return (
          <form onSubmit={handleSubmit}>
            <h2>Особисті дані</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ім'я"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Прізвище"
              required
            />
            <button
              type="button"
              onClick={() => setStep(3)}
            >
              Назад
            </button>
            <button type="submit">Далі</button>
          </form>
        );
      case 5:
        return (
          <form onSubmit={handleSubmit}>
            <h2>Контактна інформація</h2>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Оберіть країну</option>
              <option value="Україна">Україна</option>
              <option value="США">США</option>
              <option value="Польща">Польща</option>
            </select>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Номер телефону"
              required
            />
            <button
              type="button"
              onClick={() => setStep(4)}
            >
              Назад
            </button>
            <button type="submit">Завершити</button>
          </form>
        );
      default:
        return null;
    }
  };

  const renderLogin = () => {
    return (
      <>
        <div className="auth__content">
          <button className="auth__google">Увійти за допомогою Google</button>

          <div className="auth__divider"></div>
          <label className="auth__label">
            <p className="auth__label-text">Логін</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ducat.ua@gmail.com"
              required
              className="auth__input"
            />
          </label>

          <label className="auth__label">
            <p className="auth__label-text">Пароль</p>
            <div className="auth__input-with-icon">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="21AS43dg236"
                required
                className="auth__input"
              />
              <img
                className="auth__input-icon"
                src="./images/auth/eye.svg"
                alt="eye icon"
              />
            </div>
          </label>

          <div className="auth__forgot-password">Забули пароль?</div>
          <div className="auth__remember">
            <div className="auth__remember-text">
              Запам’ятати дані для швидкого входу
            </div>{' '}
            <input type="checkbox" />
            <div className="auth__checkbox"></div>
          </div>
        </div>
        <div className="auth__button auth__button--primary">
          <div className="auth__button-text">Продовжити</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="auth-overlay"></div>
      <form
        method="post"
        className="auth"
        onSubmit={handleSubmit}
      >
        <div className="auth__exit">
          <img
            onClick={() => setAuthMode(null)}
            className="auth__icon-close"
            alt=""
            src="./images/auth/close.svg"
          />
        </div>
        <div className="auth__tabs">
          <button
            onClick={() => {
              setMode('login');
              setStep(1);
            }}
            className={classNames('auth__tab', {
              'auth__tab--active': mode === 'login',
            })}
          >
            Вхід
          </button>
          <button
            onClick={() => {
              setMode('registration');
              setStep(1);
            }}
            className={classNames('auth__tab', {
              'auth__tab--active': mode === 'registration',
            })}
          >
            Реєстрація
          </button>
        </div>
        {mode === 'registration' ? renderRegistrationStep() : renderLogin()}
      </form>
    </>
  );
};

export default Auth;
