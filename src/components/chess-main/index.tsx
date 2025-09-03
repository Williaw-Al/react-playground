import { useRef, useContext } from "react";
import { ChessPiece } from "../chess-piece"; 
import { ChessContext } from "../../contexts/chess-context"; 
import { ChessPieceList } from "./chess-piece-list";
import { useChessHandlers } from "../../hooks/useChessHandlers"; 

export const ChessMain = () => {
  const context = useContext(ChessContext)!;
  const boardRef = useRef<HTMLDivElement | null>(null);

  const {
    handleChange,
    pickPiece,
    releasePiece,
    handleTouchMove,
    holdingPiece,
    dragPosition,
  } = useChessHandlers(context, boardRef);

  return (
    <div
      relative
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      overflow-hidden
      flex
      flex-col
      items-center
    >
      <div text-center>
        <h1 font-orbitron>Peças Móveis</h1>
        <p>Escolha uma peça, e mova ela para o tabuleiro!</p>
      </div>

      <ChessPieceList handleChange={handleChange} releasePiece={releasePiece} pickPiece={pickPiece} />

      <div>
        <p>Dados</p>
      </div>

      <div w-50 h-50 bg-white ref={boardRef}>
        <p>Tabuleiro</p>
      </div>

      {holdingPiece && (
        <div
          absolute
          pointer-events-none
          style={{
            top: dragPosition.y,
            left: dragPosition.x,
          }}
        >
          <ChessPiece />
        </div>
      )}
    </div>
  );
};
