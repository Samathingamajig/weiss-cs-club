import { FC, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const ConfettiButton: FC = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  return showConfetti ? (
    <Confetti width={width} height={height} />
  ) : (
    <button
      onClick={() => setShowConfetti(true)}
      style={{
        padding: "1rem",
        border: "2px solid black",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        cursor: "pointer",
      }}
    >
      click me
    </button>
  );
};
