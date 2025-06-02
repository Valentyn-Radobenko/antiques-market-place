import SimpleBar from 'simplebar-react';

type Props = {
  pageNavigation: string[];
};

export const PageBaseNavigation: React.FC<Props> = ({ pageNavigation }) => {
  return (
    <SimpleBar className="page-base-navigation">
      <div className="page-base-navigation__filters">
        {pageNavigation.map((a, i) => (
          <p
            key={i}
            className="page-base-navigation__filter isActive"
          >
            {a}
          </p>
        ))}
      </div>
    </SimpleBar>
  );
};
