import { Close } from '../Imgs/Close';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useEditor } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import { HandsSVG } from '../Imgs/HandsSVG';
import { GalleryThumbnailSVG } from '../Imgs/GalleryThumbnailSVG';

type Form = {
  name: string;
  description: string;
  files: File[];
  anonimus: boolean;
  themes: string[];
};

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const CreateExhibitionInfo: React.FC<Props> = ({ setOpenModal }) => {
  const [form, setForm] = useState<Form>({
    name: '',
    description: '',
    files: [],
    anonimus: false,
    themes: [],
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: 'Пишіть повідомлення',
      }),
    ],
    content: '',
  });

  useEffect(() => {
    if (!editor) return;
    editor.on('update', () => {
      const html = editor.getHTML();
      setForm((prevForm) => ({
        ...prevForm,
        description: html,
      }));
      console.log(form.description);
    });
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  return (
    <div className="create-exhibition-info">
      <div className="create-exhibition-info__top-bar">
        <h2 className="create-exhibition-info__title">
          Запропонувати виставку
        </h2>
        <Close
          onClick={() => setOpenModal(false)}
          className="create-exhibition-info__close-svg"
        />
      </div>

      <div className="create-exhibition-info__content">
        <p className="create-exhibition-info__content-text">
          Ми надаємо можливість організаторам та митцям представити свої
          виставки на платформі для реклами або за іншими умовами. Це чудова
          нагода залучити нових відвідувачів і розширити аудиторію.
        </p>

        <div className="create-exhibition-info__conditions">
          <h4 className="create-exhibition-info__conditions-title">Умови:</h4>

          <div className="create-exhibition-info__conditions-block">
            <div className="create-exhibition-info__conditions-block-top">
              <GalleryThumbnailSVG className="create-exhibition-info__conditions-block-icon" />
              <h5 className="create-exhibition-info__conditions-block-title">
                Рекламне розміщення:{' '}
              </h5>
            </div>

            <p className="create-exhibition-info__conditions-block-text">
              Ви можете розмістити матеріали та опис виставки з важливою
              інформацією для користувачів (місце, дата, час, вартість квитків
              тощо). Можливе безкоштовне або платне розміщення.
            </p>
          </div>

          <div className="create-exhibition-info__conditions-block">
            <div className="create-exhibition-info__conditions-block-top">
              <HandsSVG className="create-exhibition-info__conditions-block-icon" />
              <h5 className="create-exhibition-info__conditions-block-title">
                Кураторська підтримка:{' '}
              </h5>
            </div>

            <p className="create-exhibition-info__conditions-block-text">
              Професійна допомога в організації та оформленні виставки.
            </p>
          </div>
        </div>

        <p className="create-exhibition-info__content-text">
          Щоб подати заявку на розміщення виставки, натискайте на кнопку
          <span className="create-exhibition-info__content-text--bold create-exhibition-info__content-text--green">
            &nbsp;"Додати виставку."
          </span>
        </p>

        <p className="create-exhibition-info__content-text">
          Деякі тематики (наприклад, військові проекти, присвячені Україні та
          інші) можуть бути розміщені безкоштовно або за гнучкими умовами
          співпраці.
          <br /> Надішліть нам дані про вашу виставку, і ми зв'яжемося з вами
          для уточнення умов співпраці та розміщення на платформі.
        </p>
      </div>
    </div>
  );
};
