import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQueryPage } from '../store/filters/actions';

export default function useInput() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [textValue, setTextValue] = useState({
    text: '',
    typing: false,
  });
  const handlerInput = (e) => {
    setTextValue((prevState) => ({
      ...prevState,
      text: e.target.value,
      typing: true,
    }));
  };
  useEffect(() => {
    const textFromUrl = searchParams.get('q');
    if (textFromUrl) {
      setTextValue((prevState) => ({
        ...prevState,
        text: textFromUrl,
      }));
    } else {
      setTextValue((prevState) => ({
        ...prevState,
        text: '',
      }));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (textValue.typing) {
      const delayTypingFn = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        const valueInput = textValue.text;
        if (valueInput) {
          dispatch(setQueryPage(1));
          newSearchParams.set('q', `${valueInput}`);
        } else if (!valueInput && newSearchParams.get('q')) {
          newSearchParams.delete('q');
        }
        setSearchParams(newSearchParams);
        setTextValue((prevState) => ({
          ...prevState,
          typing: false,
        }));
      }, 500);
      return () => clearTimeout(delayTypingFn);
    }
    return false;
    // eslint-disable-next-line
  }, [textValue]);
  return {
    value: textValue.text,
    onChange: handlerInput,
  };
}
