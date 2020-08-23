import { useSelector, useDispatch } from 'react-redux';

import { selectHeadSrc, setHeadSrc } from './profileSlice';

export const useYourHead = () => {
  const dispatch = useDispatch();
  const headSrc = useSelector(selectHeadSrc);
  const dispatchHeadSrc = value => dispatch(setHeadSrc(value));

  return [headSrc, dispatchHeadSrc];
};
