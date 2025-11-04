import { useParams } from 'react-router-dom';
import { CurrentDiscussion } from '../../components/CurrentDiscussion/CurrentDiscussion';
import React, { useState } from 'react';
import { DiscussionData } from '../../types/discussionTypes';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {
  mode?: 'account' | 'club';
};

export const DiscussionPage: React.FC<Props> = ({ mode = 'account' }) => {
  const { slug } = useParams();
  const discussions: DiscussionData[] = useSelector(
    (state: RootState) => state.discussions,
  );
  const discussion = discussions.find((d) => d.slug === slug);
  const [openDiscussion, setOpenDiscussion] = useState<boolean>(true);

  if (!discussion) {
    return <></>;
  }

  return (
    <ModalWindow
      visibility={'discussion__current-disussion'}
      openModal={openDiscussion}
      setOpenModal={setOpenDiscussion}
      secondModal={false}
      mode={mode}
    >
      <CurrentDiscussion
        mode={mode}
        setOpenDiscussion={setOpenDiscussion}
        currentDiscussion={discussion}
      />
    </ModalWindow>
  );
};
