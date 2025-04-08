type Props = {
  className?: string;
  onClick?: () => void;
};

export const SendMessageUnreadPlatformSVG: React.FC<Props> = ({
  className,
  onClick,
}) => {
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
      <path d="M20 6H4V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H13C13.1427 18 13.2617 18.0477 13.357 18.143C13.4523 18.2383 13.5 18.3573 13.5 18.5C13.5 18.6427 13.4523 18.7617 13.357 18.857C13.2617 18.9523 13.1427 19 13 19H4.616C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V13C21 13.1427 20.9523 13.2617 20.857 13.357C20.7617 13.4523 20.6427 13.5 20.5 13.5C20.3573 13.5 20.2383 13.4523 20.143 13.357C20.0477 13.2617 20 13.1427 20 13V6ZM4 6V18V13.5V13.671V6ZM12 11L20 6V6.885L12.429 11.637C12.2877 11.7237 12.1447 11.767 12 11.767C11.8553 11.767 11.7123 11.7237 11.571 11.637L4 7.039V6L12 11ZM19.983 19H15.616C15.4733 19 15.3543 18.9523 15.259 18.857C15.1637 18.7617 15.116 18.6427 15.116 18.5C15.116 18.3573 15.1637 18.2383 15.259 18.143C15.3543 18.0477 15.4733 18 15.616 18H20.002L18.256 16.254C18.1587 16.1567 18.1077 16.0387 18.103 15.9C18.0983 15.7613 18.1513 15.6433 18.262 15.546C18.3593 15.4527 18.4773 15.4083 18.616 15.413C18.754 15.417 18.8717 15.468 18.969 15.566L21.339 17.935C21.4257 18.0217 21.4877 18.1107 21.525 18.202C21.5623 18.2933 21.581 18.3927 21.581 18.5C21.581 18.5947 21.5623 18.691 21.525 18.789C21.4877 18.8857 21.4257 18.9777 21.339 19.065L18.95 21.454C18.8567 21.5473 18.743 21.5917 18.609 21.587C18.475 21.583 18.359 21.532 18.261 21.434C18.1677 21.3407 18.121 21.2293 18.121 21.1C18.121 20.9707 18.1677 20.8593 18.261 20.766L19.983 19Z" />
    </svg>
  );
};
