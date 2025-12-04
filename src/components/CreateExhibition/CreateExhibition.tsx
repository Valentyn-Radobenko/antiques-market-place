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
import { PhotosList } from '../PhotosList/PhotosList';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import classNames from 'classnames';
import { ModalEndingExhibitions } from '../ModalEnding/ModalEndingExhibitions';
import { Tooltip } from '../Tooltip/Tooltip';
import { useTranslation } from 'react-i18next';

const PHOTO_AMOUNT = 5;

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

export const CreateExhibition: React.FC<Props> = ({ setOpenModal }) => {
  const errorRef = useRef<HTMLParagraphElement>(null);
  const [errorHeight, setErrorHight] = useState<number>(0);
  const ref = useRef<HTMLInputElement | null>(null);
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [link, setLink] = useState<string>('');
  const [linkError, setLinkError] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Form>({
    name: '',
    description: '',
    files: [],
    anonimus: false,
    themes: [],
  });
  const { t } = useTranslation();

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
        placeholder: t('editor-placeholder'),
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

  return (
    <>
      {step === 1 && (
        <div className="create-exhibition">
          <div className="create-exhibition__top-bar">
            <h2 className="create-exhibition__title">
              {t('create-exhibition__title')}
            </h2>
            <Close
              onClick={() => setOpenModal(false)}
              className="create-exhibition__close-svg"
            />
          </div>

          <div className="create-exhibition__main">
            <div className="create-exhibition__form">
              <div className="create-exhibition__input-block">
                <p className="create-exhibition__input-title">
                  {t('create-exhibition__input-title')}
                </p>
                <textarea
                  placeholder={t('create-exhibition__input-placeholder')}
                  className="create-exhibition__input"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                />
              </div>
              <div className="create-exhibition__input-block">
                <p className="create-exhibition__input-title">
                  {t('create-discussion__input-title2')}
                </p>
                <EditorContent
                  editor={editor}
                  className="create-exhibition__editor"
                />
              </div>
              <PhotosList
                files={form.files}
                setFiles={(newFiles: File[]) =>
                  setForm((prev) => ({ ...prev, files: newFiles }))
                }
              />
              <div className="create-exhibition__buttons">
                <div className="create-exhibition__buttons-list">
                  <ListNumerickSVG
                    onClick={() =>
                      editor?.chain().focus().toggleOrderedList().run()
                    }
                    className="create-exhibition__textarea-svg-button"
                  />
                  <ListDotedSVG
                    onClick={() =>
                      editor?.chain().focus().toggleBulletList().run()
                    }
                    className="create-exhibition__textarea-svg-button"
                  />
                  <TextBoldSVG
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className="create-exhibition__textarea-svg-button"
                  />
                  <TextUnderLineSVG
                    onClick={() =>
                      editor?.chain().focus().toggleUnderline().run()
                    }
                    className="create-exhibition__textarea-svg-button"
                  />
                </div>
                <div className="create-exhibition__buttons-list">
                  <TextLinkSVG
                    className="create-exhibition__textarea-svg-button"
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
                    visibility="create-exhibition__link-modal-vis"
                    setOpenModal={setOpenLinkModal}
                    openModal={openLinkModal}
                    secondModal={false}
                  >
                    <div className="create-exhibition__link-modal">
                      <div className="create-exhibition__link-header">
                        <p className="create-exhibition__link-text">
                          {t('create-discussion__link-text')}
                        </p>
                        <Close
                          className="create-exhibition__close-modal"
                          onClick={() => setOpenLinkModal(false)}
                        />
                      </div>
                      <input
                        placeholder={t('create-discussion__input-placeholder2')}
                        className="create-exhibition__input"
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
                        className="create-exhibition__link-button"
                      >
                        {t('create-discussion__link-button')}
                      </button>
                    </div>
                  </ModalWindow>
                  <AddImgsPlus
                    onClick={() => ref.current?.click()}
                    className="create-exhibition__textarea-svg-button"
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
                className={classNames('create-exhibition__error-text', {
                  isActive: linkError,
                })}
              >
                <p ref={errorRef}>{t('create-discussion__error-text')}</p>
              </div>
            </div>
          </div>
          <div className="create-exhibition__bottom-bar">
            {canSubmit && (
              <button
                onClick={handleSubmit}
                className="create-exhibition__button"
                disabled={!canSubmit}
              >
                {t('create-discussion__button')}
              </button>
            )}
            {!canSubmit && (
              <Tooltip
                customTooltipClassName="create-exhibition__button-tooltip"
                customContentClassName="create-exhibition__button-tooltip-content"
                renderButton={() => (
                  <button
                    onClick={handleSubmit}
                    className="create-exhibition__button"
                    disabled={!canSubmit}
                  >
                    {t('create-discussion__button')}
                  </button>
                )}
                renderContent={() => (
                  <>
                    <p className="shopping-cart__cta-info-text">
                      {t('shopping-cart__cta-info-text2')}
                    </p>
                  </>
                )}
              />
            )}
          </div>
        </div>
      )}
      {step === 2 && <ModalEndingExhibitions setOpenModal={setOpenModal} />}
    </>
  );
};
