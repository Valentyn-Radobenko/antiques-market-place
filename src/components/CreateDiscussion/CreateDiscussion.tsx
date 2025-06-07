import { CheckboxSquareSVG } from '../Imgs/CheckboxSquareSVG';
import { Close } from '../Imgs/Close';
import { Info } from '../Imgs/Info';
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import { ListNumerickSVG } from '../Imgs/ListNumerickSVG';
import { ListDotedSVG } from '../Imgs/ListDotedSVG';
import { TextBoldSVG } from '../Imgs/TextBoldSVG';
import { TextUnderLineSVG } from '../Imgs/TextUnderLineSVG';
import { TextLinkSVG } from '../Imgs/TextLinkSVG';
import { AddImgsPlus } from '../Imgs/AddImgsPlus';
import { CirclePlusSVG } from '../Imgs/CirclePlusSVG';
import { PhotosList } from '../PhotosList/PhotosList';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { DiscussionRules } from '../DiscussionRules/DiscussionRules';
import classNames from 'classnames';

const PHOTO_AMOUNT = 5;

type Form = {
  name: string;
  description: string;
  files: File[];
  anonimus: boolean;
};

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const CreateDiscussion: React.FC<Props> = ({ setOpenModal }) => {
  const errorRef = useRef<HTMLParagraphElement>(null);
  const [errorHeight, setErrorHight] = useState<number>(0);
  const [openRules, setOpenRules] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [link, setLink] = useState<string>('');
  const [linkError, setLinkError] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    name: '',
    description: '',
    files: [],
    anonimus: false,
  });

  useEffect(() => {
    if (linkError) {
      setErrorHight(errorRef.current?.clientHeight || 0);
      setTimeout(() => {
        setLinkError(false);
        setErrorHight(0);
      }, 5000);
    }
  }, [linkError]);

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

  const addFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    setForm((prev) => ({
      ...prev,
      files: [...prev.files, ...newFiles].slice(0, PHOTO_AMOUNT),
    }));
  };

  useEffect(() => {
    if (!editor) return;
    editor.on('update', () => {
      const html = editor.getHTML();
      setForm((prevForm) => ({
        ...prevForm,
        description: html,
      }));
    });
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  console.log(errorHeight);
  console.log(errorHeight);
  console.log(errorRef.current?.clientHeight);

  return (
    <div className="create-discussion">
      <div className="create-discussion__top-bar">
        <Info
          onClick={() => setOpenRules(true)}
          className="create-discussion__info-svg"
        />
        <h2 className="create-discussion__title">Створити обговорення</h2>
        <Close
          onClick={() => setOpenModal(false)}
          className="create-discussion__close-svg"
        />
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
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </div>
          <div className="create-discussion__input-block">
            <p className="create-discussion__input-title">Додатковий текст</p>
            <EditorContent
              editor={editor}
              className="your-editor-class"
            />
          </div>
          <PhotosList
            files={form.files}
            setFiles={(newFiles: File[]) =>
              setForm((prev) => ({ ...prev, files: newFiles }))
            }
          />
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
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className="create-discussion__textarea-svg-button"
              />
              <TextUnderLineSVG
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
                className="create-discussion__textarea-svg-button"
              />
            </div>
            <div className="create-discussion__buttons-list">
              <TextLinkSVG
                className="create-discussion__textarea-svg-button"
                onClick={() => {
                  const hasSelection = editor?.state.selection.empty === false;
                  if (editor?.isActive('link')) {
                    editor
                      .chain()
                      .focus()
                      .extendMarkRange('link')
                      .unsetLink()
                      .run();
                  } else if (hasSelection) {
                    setOpenLinkModal(true);
                  } else {
                    setLinkError(true);
                  }
                }}
              />
              <ModalWindow
                visibility="create-discussion__link-modal-vis"
                setOpenModal={setOpenLinkModal}
                openModal={openLinkModal}
              >
                <div className="create-discussion__link-modal">
                  <div className="create-discussion__link-header">
                    <p className="create-discussion__link-text">
                      Редагувати посилання
                    </p>
                    <Close
                      className="create-discussion__close-modal"
                      onClick={() => setOpenLinkModal(false)}
                    />
                  </div>
                  <input
                    placeholder="Введіть посилання"
                    className="create-discussion__input"
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      if (editor) {
                        const { to } = editor.state.selection;
                        editor
                          ?.chain()
                          .focus()
                          .extendMarkRange('link')
                          .setLink({ href: link })
                          .setTextSelection(to)
                          .unsetMark('link')
                          .run();
                        setOpenLinkModal(false);
                        setLink('');
                      }
                    }}
                    className="create-discussion__link-button"
                  >
                    Зберегти
                  </button>
                </div>
              </ModalWindow>
              <AddImgsPlus
                onClick={() => ref.current?.click()}
                className="create-discussion__textarea-svg-button"
              />
              <input
                accept=".jpg, .jpeg, .png, .pdf, image/jpeg, image/png, application/pdf"
                multiple
                onChange={addFiles}
                ref={ref}
                hidden
                type="file"
                disabled={form.files.length === 5}
              />
            </div>
          </div>
          <p
            style={{ height: errorHeight }}
            className={classNames('create-discussion__error-text', {
              isActive: linkError,
            })}
          >
            <p ref={errorRef}>
              Щоб вставити посилання, виділіть слово та натисніть на іконку
            </p>
          </p>
        </div>
      </div>
      <div className="create-discussion__bottom-bar">
        <div className="create-discussion__checkbox">
          <p className="create-discussion__anonim">Викласти тему анонімно</p>
          <CheckboxSquareSVG
            className="create-discussion__anonim-svg"
            onClick={() => setForm({ ...form, anonimus: !form.anonimus })}
            value={form.anonimus ? 'checked' : 'defoult'}
          />
        </div>
        <button className="create-discussion__button">Відправити</button>
      </div>
      <ModalWindow
        visibility="create-discussion__rules-visibility"
        openModal={openRules}
        setOpenModal={setOpenRules}
      >
        <DiscussionRules setOpenModal={setOpenRules} />
      </ModalWindow>
    </div>
  );
};
