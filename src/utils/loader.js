import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      Notiflix.Loading.remove();
    }, 1000);
  }, []);

  return isLoading ? null : null;
};

export default Loader;
