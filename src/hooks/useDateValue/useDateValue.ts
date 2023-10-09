import { useCallback, useEffect, useState } from "react";

function useDateValue(dateString: string) {
  const [value, setValue] = useState(dateString);

  const setInputValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  const clearValue = useCallback(() => {
    setValue("");
  }, []);

  useEffect(() => {
    setValue(dateString);
  }, [dateString]);

  return { value, handlers: { setInputValue, clearValue } };
}

export default useDateValue;
