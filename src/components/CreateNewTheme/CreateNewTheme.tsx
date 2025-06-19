import { Close } from '../Imgs/Close';
import React, { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  setCreateNewTheme: Dispatch<SetStateAction<boolean>>;
  handleAddTheme: (theme: string) => void;
};

export const CreateNewTheme: React.FC<Props> = ({
  handleAddTheme,
  setCreateNewTheme,
}) => {
  const [newTheme, setNewTheme] = useState<string>('');
  return (
    <div className="create-new-theme">
      <div className="create-new-theme__top-bar">
        <p className="create-new-theme__h3">Додати свою тему</p>
        <Close
          className="create-new-theme__close"
          onClick={() => setCreateNewTheme(false)}
        />
      </div>
      <input
        value={newTheme}
        onChange={(e) => setNewTheme(e.target.value)}
        placeholder="Введіть назву теми"
        className="create-new-theme__input"
        type="text"
      />
      <button
        onClick={() => {
          handleAddTheme(newTheme);
          setCreateNewTheme(false);
        }}
        disabled={!newTheme}
        className="create-new-theme__button"
      >
        Зберегти
      </button>
    </div>
  );
};
