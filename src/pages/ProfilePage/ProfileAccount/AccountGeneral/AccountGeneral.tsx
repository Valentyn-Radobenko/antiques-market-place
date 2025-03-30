import { EditSVG } from '../../../../components/Imgs/EditSVG';

export const AccountGeneral = () => {
  return (
    <div className="account-general">
      <div className="account-general__block">
        <h3 className="account-general__title">Особисті дані</h3>
        <div className="account-general__data">
          <div className="account-general__single-data">
            <p className="account-general__data-text">Андрій Містеряков</p>
            <EditSVG className="account-general__data-ico" />
          </div>
          <div className="account-general__single-data">
            <p className="account-general__data-text">Україна, Київ</p>
            <EditSVG className="account-general__data-ico" />
          </div>
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
