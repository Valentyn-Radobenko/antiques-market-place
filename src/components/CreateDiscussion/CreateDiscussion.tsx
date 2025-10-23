import { CheckboxSquareSVG } from '../Imgs/СheckboxSquareSVG';
import { Close } from '../Imgs/Close';
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
import classNames from 'classnames';
import { CreateNewTheme } from '../CreateNewTheme/CreateNewTheme';
import { ModalEndingDiscussions } from '../ModalEnding/ModalEndingDiscussions';
import { Tooltip } from '../Tooltip/Tooltip';

const PHOTO_AMOUNT = 5;

const popularThems = [
  'Монети України',
  'Колекціонування',
  'Нумізматика',
  'Книги',
  'Марки',
  'Живопис',
  'Філателія',
  "Предмети інтер'єру",
  'Монети Польщі',
  'Сфрагістика',
  'Паперові колекції',
  'Монети Європи',
  'Інші монети',
];

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

export const CreateDiscussion: React.FC<Props> = ({ setOpenModal }) => {
  const heightRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const [activeThemes, setActiveThemes] = useState<boolean>(false);
  const [errorHeight, setErrorHight] = useState<number>(0);
  const ref = useRef<HTMLInputElement | null>(null);
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [link, setLink] = useState<string>('');
  const [linkError, setLinkError] = useState<boolean>(false);
  const [createNewTheme, setCreateNewTheme] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    name: '',
    description: '',
    files: [],
    anonimus: false,
    themes: [],
  });
  const [step, setStep] = useState(1);

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

  const canSubmit: boolean = !!(
    form.name.length > 0 &&
    form.description.length > 0 &&
    form.description !== '<p></p>'
  );

  const handleSubmit = () => {
    if (canSubmit) {
      setStep(2);
    }
  };

  const handleAddTheme = (theme: string) => {
    if (!form.themes.includes(theme)) {
      setForm({ ...form, themes: [...form.themes, theme] });
    }
  };

  return (
    <>
      {step === 1 && (
        <div className="create-discussion">
          <div className="create-discussion__top-bar">
            <h2 className="create-discussion__title">Створити обговорення</h2>
            <Close
              onClick={() => setOpenModal(false)}
              className="create-discussion__close-svg"
            />
          </div>

          <div className="create-discussion__main">
            <div className="create-discussion__create-theme">
              <div className="create-discussion__create-theme-title-list">
                <p
                  className={classNames('create-discussion__add-theme', {
                    isActive: activeThemes,
                  })}
                >
                  Додайте тему:
                </p>
                <div className="create-discussion__chosen-themes">
                  {form.themes.map((theme, i) => (
                    <div
                      key={i}
                      className="create-discussion__chosen-theme"
                    >
                      <p>{theme}</p>
                      <Close
                        onClick={() =>
                          setForm({
                            ...form,
                            themes: [...form.themes.filter((a) => a !== theme)],
                          })
                        }
                        className="create-discussion__delete-theme"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <CirclePlusSVG
                onClick={() => setActiveThemes(!activeThemes)}
                className={classNames('create-discussion__add-theme-svg', {
                  isActive: activeThemes,
                })}
              />
            </div>
            <div
              style={{
                height: activeThemes ? heightRef.current?.clientHeight : 0,
              }}
              className="create-discussion__themes-wrapper"
            >
              <div
                ref={heightRef}
                className="create-discussion__themes"
              >
                {popularThems.map((theme) => (
                  <p
                    onClick={() => handleAddTheme(theme)}
                    key={theme}
                    className="create-discussion__theme"
                  >
                    {theme}
                  </p>
                ))}
                <button
                  onClick={() => setCreateNewTheme(true)}
                  className="create-discussion__my-theme"
                >
                  <p>Моя тема</p>
                  <CirclePlusSVG />
                </button>
                <ModalWindow
                  openModal={createNewTheme}
                  setOpenModal={setCreateNewTheme}
                  visibility="create-discussion__create-new-theme"
                  secondModal={true}
                >
                  <CreateNewTheme
                    handleAddTheme={handleAddTheme}
                    setCreateNewTheme={setCreateNewTheme}
                  />
                </ModalWindow>
              </div>
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
                <p className="create-discussion__input-title">
                  Додатковий текст
                </p>
                <EditorContent
                  editor={editor}
                  className="create-discussion__editor"
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
                    onClick={() =>
                      editor?.chain().focus().toggleBulletList().run()
                    }
                    className="create-discussion__textarea-svg-button"
                  />
                  <TextBoldSVG
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className="create-discussion__textarea-svg-button"
                  />
                  <TextUnderLineSVG
                    onClick={() =>
                      editor?.chain().focus().toggleUnderline().run()
                    }
                    className="create-discussion__textarea-svg-button"
                  />
                </div>
                <div className="create-discussion__buttons-list">
                  <TextLinkSVG
                    className="create-discussion__textarea-svg-button"
                    onClick={() => {
                      const hasSelection =
                        editor?.state.selection.empty === false;
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
                    secondModal={false}
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
              <div
                style={{ height: errorHeight }}
                className={classNames('create-discussion__error-text', {
                  isActive: linkError,
                })}
              >
                <p ref={errorRef}>
                  Щоб вставити посилання, виділіть слово та натисніть на іконку
                </p>
              </div>
            </div>
          </div>
          <div className="create-discussion__bottom-bar">
            <div className="create-discussion__checkbox">
              <p className="create-discussion__anonim">
                Викласти тему анонімно
              </p>
              <CheckboxSquareSVG
                className="create-discussion__anonim-svg"
                onClick={() => setForm({ ...form, anonimus: !form.anonimus })}
                value={form.anonimus ? 'checked' : 'default'}
              />
            </div>
            {canSubmit && (
              <button
                onClick={handleSubmit}
                className="create-discussion__button"
                disabled={!canSubmit}
              >
                Відправити
              </button>
            )}
            {!canSubmit && (
              <Tooltip
                customTooltipClassName="create-discussion__button-tooltip"
                customContentClassName="create-discussion__button-tooltip-content"
                renderButton={() => (
                  <button
                    onClick={handleSubmit}
                    className="create-discussion__button"
                    disabled={!canSubmit}
                  >
                    Відправити
                  </button>
                )}
                renderContent={() => (
                  <>
                    <p className="shopping-cart__cta-info-text">
                      Треба вказати запит і додатковий текст, щоб створити
                      обговорення.
                    </p>
                  </>
                )}
              />
            )}
          </div>
        </div>
      )}
      {step === 2 && <ModalEndingDiscussions setOpenModal={setOpenModal} />}
    </>
  );
};
