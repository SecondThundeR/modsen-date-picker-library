import { useCallback, useState } from "react";

import { PickMode } from "./interfaces";

function usePickToggle() {
  const [currentMode, setCurrentMode] = useState<PickMode>("start");

  const onToggle = useCallback(() => {
    setCurrentMode((prev) => (prev === "start" ? "end" : "start"));
  }, []);

  return [currentMode, onToggle] as const;
}

export default usePickToggle;
