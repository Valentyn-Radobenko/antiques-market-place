import { CheckboxSquareSVG } from '../Imgs/CheckboxSquareSVG';
import { Close } from '../Imgs/Close';
import { Info } from '../Imgs/Info';
import React, { useEffect } from 'react';

import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import { ListNumerickSVG } from '../Imgs/ListNumerickSVG';
import { ListDotedSVG } from '../Imgs/ListDotedSVG';
import { TextBoldSVG } from '../Imgs/TextBoldSVG';
import { TextUnderLineSVG } from '../Imgs/TextUnderLineSVG';
import { TextLingSVG } from '../Imgs/TextLingSVG';
import { AddImgsPlus } from '../Imgs/AddImgsPlus';
import { CirclePlusSVG } from '../Imgs/CirclePlusSVG';

export const CreateDiscussion: React.FC = () => {
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
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="create-discussion">
      <div className="create-discussion__top-bar">
        <Info className="create-discussion__info-svg" />
        <h2 className="create-discussion__title">Створити обговорення</h2>
        <Close className="create-discussion__close-svg" />
      </div>
      <div className="create-discussion__main">
        <div className="create-discussion__create-theme">
          <p className="create-discussion__add-theme">Додайте тему:</p>
          <CirclePlusSVG className="create-discussion__add-theme-svg" />
        </div>
        <div className="create-discussion__form">
          <div className="create-discussion__input-block">
            <p className="create-discussion__input-title">Запит</p>
            <textarea
              placeholder="Як перевірити аутентичність предмету?"
              className="create-discussion__input"
              rows={1}
            />
          </div>
          <div className="create-discussion__input-block">
            <p className="create-discussion__input-title">Додатковий текст</p>
            <EditorContent
              editor={editor}
              className="your-editor-class"
            />
          </div>
          {/* {files.length > 0 && (
            <div className="valuability-form__photos">
              <div className="valuability-form__list-of-photos">
                {files.map((file, index) => (
                  <div
                    style={{ width: `${photoWidth}px` }}
                    key={index}
                    className="valuability-form__photo-block"
                  >
                    <Bin
                      className="valuability-form__bin"
                      onClick={() => deletePhoto(index)}
                    />
                    <img
                      className="valuability-form__img"
                      src={URL.createObjectURL(file)}
                      alt="#"
                    />
                  </div>
                ))}
              </div>
              <div className="valuability-form__photos-text-block">
                {`Максимальна кількість фото: ${PHOTO_AMOUNT}`}
              </div>
            </div>
          )} */}
          <div className="create-discussion__buttons">
            <div className="create-discussion__buttons-list">
              <ListNumerickSVG
                onClick={() =>
                  editor?.chain().focus().toggleOrderedList().run()
                }
                className="create-discussion__textarea-svg-button"
              />
              <ListDotedSVG
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                className="create-discussion__textarea-svg-button"
              />
              <TextBoldSVG
                onClick={() => editor.chain().focus().toggleBold().run()}
                className="create-discussion__textarea-svg-button"
              />
              <TextUnderLineSVG
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className="create-discussion__textarea-svg-button"
              />
            </div>
            <div className="create-discussion__buttons-list">
              <TextLingSVG
                className="create-discussion__textarea-svg-button"
                onClick={() => {
                  const url = prompt('Вставьте ссылку');
                  if (url) {
                    editor.chain().focus().setLink({ href: url }).run();
                  }
                }}
              />
              <AddImgsPlus className="create-discussion__textarea-svg-button" />
            </div>
          </div>
        </div>
      </div>
      <div className="create-discussion__bottom-bar">
        <div className="create-discussion__checkbox">
          <p className="create-discussion__anonim">Викласти тему анонімно</p>
          <CheckboxSquareSVG value="defoult" />
        </div>
        <button className="create-discussion__button">Відправити</button>
      </div>
    </div>
  );
};
