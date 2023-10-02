import { useEffect, useState } from "react";

function useClearEnabled(value?: string | undefined) {
  const [isClearEnabled, setIsClearEnabled] = useState(
    () => value?.length !== 0,
  );

  useEffect(() => {
    setIsClearEnabled(value !== undefined && value.length !== 0);
  }, [value]);

  return isClearEnabled;
}
export default useClearEnabled;
