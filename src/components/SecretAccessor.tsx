import { FC, useEffect, useRef } from "react";

export const SecretAccessor: FC = () => {
  const timeout = useRef<number | null>(null);
  useEffect(() => {
    const downListener = () => {
      clearTimeout(timeout.current ?? -1);
      timeout.current = setTimeout(() => {
        window.location.href = `${window.location.pathname}/secret`;
      }, 5000);
    };
    const upListener = () => {
      clearTimeout(timeout.current ?? -1);
    };
    window.addEventListener("mousedown", downListener);
    window.addEventListener("mouseup", upListener);

    () => {
      window.removeEventListener("mousedown", downListener);
      window.removeEventListener("mouseup", upListener);
    };
  }, []);

  return null;
};
