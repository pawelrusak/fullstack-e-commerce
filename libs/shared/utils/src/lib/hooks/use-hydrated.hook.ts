import * as React from 'react';

export const useHydrated = () => {
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
};
