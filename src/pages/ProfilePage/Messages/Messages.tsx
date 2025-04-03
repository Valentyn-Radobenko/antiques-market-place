import SimpleBar from 'simplebar-react';
import { ArrowTale } from '../../../components/Imgs/ArrowTale';

export const Messages = () => {
  return (
    <div className="profile-messages">
      <div className="profile-page__section-title">
        <h2 className="profile-page__section-h2">Листування</h2>
        <ArrowTale className="profile-page__section-arrow" />
      </div>

      <div className="profile-messages__messages">
        <SimpleBar className="profile-messages__simple-bar-container">
          <div className="profile-messages__sources">
            <div className="message-source__top-bar">
              <div className="message-source__title">
                <p>svg</p>
                <p>sender</p>
              </div>
              <ArrowTale />
            </div>

            <div>
              <h4>text</h4>
              <div>
                <p>date</p>
                <p>svg</p>
              </div>
            </div>
          </div>
        </SimpleBar>
        <div className="profile-messages__source-messages"></div>
      </div>
    </div>
  );
};
