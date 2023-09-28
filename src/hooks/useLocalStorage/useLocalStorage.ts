import { useCallback } from "react";

function useLocalStorage<T>(key: string) {
  const onGetData = useCallback(() => {
    const localData = localStorage.getItem(key);
    if (!localData) return;
    return JSON.parse(localData) as T;
  }, [key]);

  const onLocalUpdate = useCallback(
    (newData: T) => {
      localStorage.setItem(key, JSON.stringify(newData));
    },
    [key],
  );

  const onLocalDelete = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return {
    onGetData,
    onLocalUpdate,
    onLocalDelete,
  };
}

export default useLocalStorage;
