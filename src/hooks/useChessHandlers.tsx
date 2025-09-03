import { type RefObject } from "react";
import { type IChessContext } from "../contexts/chess-context";

const pieces = ["Peão", "Cavalo", "Bispo", "Torre", "Rainha", "Rei"];

export function useChessHandlers(context: IChessContext, boardRef: RefObject<HTMLDivElement | null>) {
  const {
    currentPiece,
    setCurrentPiece,
    holdingPiece,
    setHoldingPiece,
    dragPosition,
    setDragPosition,
    direction,
    setDirection,
    animating,
    setAnimating,
  } = context;

  const handleChange = (dir: string) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      if (dir === "prev") {
        setCurrentPiece(currentPiece === 0 ? pieces.length - 1 : currentPiece - 1);
      } else {
        setCurrentPiece(currentPiece === pieces.length - 1 ? 0 : currentPiece + 1);
      }

      setAnimating(false);
      setDirection("");
    }, 200);
  };

  const pickPiece = (piece: any) => {
    if (holdingPiece) return;
    console.log(piece);
    setHoldingPiece(true);
  };

  const releasePiece = (e: any) => {
    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    console.log(el);

    if (el && boardRef.current && boardRef.current.contains(el)) {
      console.log("deu certo!");
    } else {
      console.log("fora do tabuleiro");
    }

    setHoldingPiece(false);
  };

  const handleTouchMove = (e: any) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    setDragPosition({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  return {
    handleChange,
    pickPiece,
    releasePiece,
    handleTouchMove,
    holdingPiece,
    dragPosition,
  };
}
