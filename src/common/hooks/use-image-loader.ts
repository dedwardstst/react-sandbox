import { useEffect, useReducer } from 'react';
import { stateReducer } from './shared';

const preloadImage = (url: string): Promise<Event> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
};

type UseImageLoaderReturn = {
  loading: boolean;
  image: HTMLImageElement | null;
  failed: boolean;
};

export const useImageLoader = (url: string): UseImageLoaderReturn => {
  const [state, dispatch] = useReducer(stateReducer<UseImageLoaderReturn>, {
    loading: true,
    image: null,
    failed: false,
  });

  useEffect(() => {
    preloadImage(url)
      .then((evt: Event) => {
        dispatch({
          loading: false,
          image: evt.target as HTMLImageElement,
        });
      })
      .catch(() =>
        dispatch({
          loading: false,
          failed: true,
        })
      );
  }, []);

  return state;
};
