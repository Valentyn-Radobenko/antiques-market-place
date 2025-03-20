type Props = {
  className?: string;
  onClick?: () => void;
};

export const Important: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M12 16.462C12.1747 16.462 12.321 16.403 12.439 16.285C12.5563 16.167 12.615 16.0207 12.615 15.846C12.615 15.672 12.556 15.526 12.438 15.408C12.32 15.29 12.174 15.2307 12 15.23C11.826 15.2293 11.68 15.2883 11.562 15.407C11.444 15.5257 11.385 15.6717 11.385 15.845C11.385 16.0183 11.444 16.1647 11.562 16.284C11.68 16.4033 11.826 16.4633 12 16.462ZM12 13.153C12.1427 13.153 12.2617 13.105 12.357 13.009C12.4523 12.913 12.5 12.7943 12.5 12.653V7.653C12.5 7.511 12.452 7.39233 12.356 7.297C12.26 7.20167 12.141 7.15367 11.999 7.153C11.857 7.15233 11.7383 7.20033 11.643 7.297C11.5477 7.39367 11.5 7.51233 11.5 7.653V12.653C11.5 12.7943 11.548 12.913 11.644 13.009C11.74 13.105 11.859 13.153 12.001 13.153M12.003 21C10.7583 21 9.58833 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.558 4.18167 16.606 3.709 15.512C3.23633 14.418 3 13.2483 3 12.003C3 10.7577 3.23633 9.58767 3.709 8.493C4.181 7.39767 4.82133 6.44467 5.63 5.634C6.43867 4.82333 7.391 4.18167 8.487 3.709C9.583 3.23633 10.753 3 11.997 3C13.241 3 14.411 3.23633 15.507 3.709C16.6023 4.181 17.5553 4.82167 18.366 5.631C19.1767 6.44033 19.8183 7.39267 20.291 8.488C20.7637 9.58333 21 10.753 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.82 16.603 19.1787 17.556 18.368 18.366C17.5573 19.176 16.6053 19.8177 15.512 20.291C14.4187 20.7643 13.249 21.0007 12.003 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
        fill="#1B4332"
      />
    </svg>
  );
};
