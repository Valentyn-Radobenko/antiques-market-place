import { EditSVG } from '../../../../components/Imgs/EditSVG';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { updateUserField } from '../../../../store/slices/userSlice';

type Props = {
  firstName: string | null;
  lastName: string | null;
};
export const AccountGeneral: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [changeName, setChangeName] = useState<boolean>(false);

  return (
    <div className="account-general">
      <div className="account-general__block">
        <h3 className="account-general__title">Особисті дані</h3>
        <div className="account-general__data">
          <div className="account-general__single-data">
            <p className="account-general__data-text">Андрій Містеряков</p>
            <EditSVG
              onClick={() => setChangeName(true)}
              className="account-general__data-ico"
            />
          </div>
          {changeName ?
            <div className="account-general__single-data">
              <p className="account-general__data-text">Україна, Київ</p>
              <EditSVG className="account-general__data-ico" />
            </div>
          : <div>
              {/* <input value={firstName} placeholder='firtName' type="text" /> */}
              {/* <input value={lastName} placeholder='lastName' type="text" /> */}
              <button
                onClick={() =>
                  dispatch(
                    updateUserField({ field: 'firstName', value: 'Іван' }),
                  )
                }
              >
                accepte Change
              </button>
            </div>
          }
        </div>
      </div>
      <div className="account-general__block">
        <h3 className="account-general__title">Контактні дані</h3>
        <div className="account-general__data">
          <div className="account-general__single-data">
            <p className="account-general__data-text">Номер телефону</p>
            <EditSVG className="account-general__data-ico" />
          </div>
          <div className="account-general__single-data">
            <p className="account-general__data-text">Пошта</p>
            <EditSVG className="account-general__data-ico" />
          </div>
        </div>
      </div>
    </div>
  );
};
