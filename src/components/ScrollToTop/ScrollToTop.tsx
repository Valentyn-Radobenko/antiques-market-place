import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(): null {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const prevSegments = prevPath.current.split('/').filter(Boolean);
    const currSegments = pathname.split('/').filter(Boolean);

    const prevLen = prevSegments.length;
    const currLen = currSegments.length;

    const prevIsDiscussion =
      prevLen > 0 && prevSegments[prevLen - 1] === 'discussions';
    const currIsDiscussion =
      currLen > 0 && currSegments[currLen - 1] === 'discussions';
    const prevIsDiscussionSlug =
      prevLen >= 2 && prevSegments[prevLen - 2] === 'discussions';
    const currIsDiscussionSlug =
      currLen >= 2 && currSegments[currLen - 2] === 'discussions';

    const isExactClub = (segments: string[]) =>
      segments.length === 1 && segments[0] === 'club';
    const currIsClubDiscussionSlug =
      currIsDiscussionSlug && currSegments[0] === 'club';

    // Початкова умова "не скролити" (та ж, що й була)
    let skipScroll =
      currIsDiscussionSlug ||
      (prevIsDiscussion && currIsDiscussionSlug) ||
      (prevIsDiscussionSlug && currIsDiscussion);

    // Але якщо попередній шлях — точно "/club" (без продовжень) і ми йдемо на /club/discussions/:slug,
    // то *дозволяємо* скрол (перезаписуємо skipScroll = false).
    if (isExactClub(prevSegments) && currIsClubDiscussionSlug) {
      skipScroll = false;
    }

    if (!skipScroll) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
