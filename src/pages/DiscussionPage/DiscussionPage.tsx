import { useParams } from 'react-router-dom';

import { discussions } from '../../data/discussions';
import { CurrentDiscussion } from '../../components/CurrentDiscussion/CurrentDiscussion';
import React, { useState } from 'react';
import { DiscussionData } from '../../types/discussionTypes';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';

type Props = {
  mode?: 'account' | 'club';
};

export const DiscussionPage: React.FC<Props> = ({ mode = 'account' }) => {
  const { slug } = useParams();
  const discussion = discussions.find((d) => d.slug === slug);

  const [openDiscussion, setOpenDiscussion] = useState<boolean>(true);
  const [currentDiscussion, setCurrentDiscussion] = useState<DiscussionData>(
    discussion as DiscussionData,
  );

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
        setCurrentDiscussion={setCurrentDiscussion}
        setOpenDiscussion={setOpenDiscussion}
        currentDiscussion={currentDiscussion}
      />
    </ModalWindow>
  );
};
