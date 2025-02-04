/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, ChangeEvent, FormEvent } from 'react';
import apiClient from './../../utils/apiClient';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setAuthMode } from '../../store/slices/authModeSlice';

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

export const Auth: React.FC = () => {
  const authMode = useSelector((state: RootState) => state.authMode.authMode);
  const dispatch = useDispatch<AppDispatch>();

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
  const [isPassShowed, setIsPassShowed] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const steps = [1, 2, 3, 4];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authMode === 'registration') {
      // Реєстрація: код з вашого початкового прикладу
      if (step === 1) {
        try {
          await apiClient.post('/verification/send-code-registration', null, {
            params: {
              to_email: formData.email,
            },
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
        const {
          email,
          phoneNumber,
          firstName,
          lastName,
          country,
          password,
          repeatPassword,
        } = formData;
        try {
          console.log(formData);
          const response = await apiClient.post('/auth/registration', {
            email,
            phoneNumber,
            firstName,
            lastName,
            country,
            password,
            repeatPassword,
          });
          if (response.status === 201) {
            alert('Реєстрацію завершено успішно!');
          }
        } catch (error: any) {
          console.error('Помилка відповіді сервера:', error.response?.data);
          if (error.response?.status === 400) {
            alert(
              'Помилка: ' +
                (error.response?.data?.message || 'Некоректні дані.'),
            );
          } else {
            alert('Щось пішло не так. Спробуйте ще раз.');
          }
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
          <>
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
          </>
        );
      case 5:
        return (
          <>
            <h2>Контактна інформація</h2>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Оберіть країну</option>
              <option value="Ukraine">Україна</option>
              <option value="USA">США</option>
              <option value="Poland">Польща</option>
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
          </>
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
                type={isPassShowed ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="21AS43dg236"
                required
                className="auth__input"
              />
              <img
                onClick={() => setIsPassShowed(!isPassShowed)}
                className="auth__input-icon"
                src={
                  isPassShowed ?
                    './images/auth/eye-closed.svg'
                  : './images/auth/eye.svg'
                }
                alt="eye icon"
              />
            </div>
          </label>

          <button className="auth__forgot-password">Забули пароль?</button>

          <label className="auth__remember-me">
            <span className="auth__remember-me-text">
              Запам’ятати дані для швидкого входу
            </span>

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={{
                display: 'none',
              }}
            />
            <div
              className={classNames('auth__remember-me-checkbox', {
                'auth__remember-me-checkbox--active': rememberMe,
              })}
            >
              {rememberMe && (
                <div className="auth__remember-me-checkmark"></div>
              )}
            </div>
          </label>
        </div>
        <button className="auth__button auth__button--primary">
          Продовжити
        </button>
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
          <div
            className={classNames('auth__registration-steps', {
              'auth__registration-steps--inactive': authMode !== 'registration',
            })}
          >
            {steps.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={classNames('auth__registration-step', {
                    'auth__registration-step--active': step === item + 1,
                  })}
                >
                  {item}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={classNames('auth__registration-rectangle')}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <img
            onClick={() => dispatch(setAuthMode(null))}
            className="auth__icon-close"
            alt=""
            src="./images/auth/close.svg"
          />
        </div>
        <div className="auth__tabs">
          <button
            onClick={() => {
              dispatch(setAuthMode('login'));
              setStep(1);
            }}
            className={classNames('auth__tab', {
              'auth__tab--active': authMode === 'login',
            })}
          >
            Вхід
          </button>
          <button
            onClick={() => {
              dispatch(setAuthMode('registration'));
              setStep(1);
            }}
            className={classNames('auth__tab', {
              'auth__tab--active': authMode === 'registration',
            })}
          >
            Реєстрація
          </button>
        </div>
        {authMode === 'registration' ? renderRegistrationStep() : renderLogin()}
      </form>
    </>
  );
};

export default Auth;
