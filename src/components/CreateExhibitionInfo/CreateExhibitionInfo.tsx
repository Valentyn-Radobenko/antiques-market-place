import { Close } from '../Imgs/Close';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useEditor } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import { HandsSVG } from '../Imgs/HandsSVG';
import { GalleryThumbnailSVG } from '../Imgs/GalleryThumbnailSVG';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: t('editor-placeholder'),
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
          {t('create-exhibition__title')}
        </h2>
        <Close
          onClick={() => setOpenModal(false)}
          className="create-exhibition-info__close-svg"
        />
      </div>

      <div className="create-exhibition-info__content">
        <p className="create-exhibition-info__content-text">
          {t('create-exhibition-info__content-text')}
        </p>

        <div className="create-exhibition-info__conditions">
          <h4 className="create-exhibition-info__conditions-title">
            {t('create-exhibition-info__conditions-title')}
          </h4>

          <div className="create-exhibition-info__conditions-block">
            <div className="create-exhibition-info__conditions-block-top">
              <GalleryThumbnailSVG className="create-exhibition-info__conditions-block-icon" />
              <h5 className="create-exhibition-info__conditions-block-title">
                {t('create-exhibition-info__conditions-block-title')}
              </h5>
            </div>

            <p className="create-exhibition-info__conditions-block-text">
              {t('create-exhibition-info__conditions-block-text')}
            </p>
          </div>

          <div className="create-exhibition-info__conditions-block">
            <div className="create-exhibition-info__conditions-block-top">
              <HandsSVG className="create-exhibition-info__conditions-block-icon" />
              <h5 className="create-exhibition-info__conditions-block-title">
                {t('create-exhibition-info__conditions-block-title2')}
              </h5>
            </div>

            <p className="create-exhibition-info__conditions-block-text">
              {t('create-exhibition-info__conditions-block-text2')}
            </p>
          </div>
        </div>

        <p
          className="create-exhibition-info__content-text"
          dangerouslySetInnerHTML={{
            __html: t('create-exhibition-info__content-text2'),
          }}
        ></p>

        <p
          className="create-exhibition-info__content-text"
          dangerouslySetInnerHTML={{
            __html: t('create-exhibition-info__content-text3'),
          }}
        ></p>
      </div>
    </div>
  );
};
