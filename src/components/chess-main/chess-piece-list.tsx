import { useContext } from "react"
import { ChessContext, pieces } from "../../contexts/chess-context"

interface IChessPieceListProps {
    handleChange: any,
    pickPiece: any,
    releasePiece: any
}

export const ChessPieceList = ({ handleChange, pickPiece, releasePiece }: IChessPieceListProps) => {

    const { currentPiece, setCurrentPiece,
        holdingPiece, setHoldingPiece,
        dragPosition, setDragPosition,
        direction, setDirection,
        animating, setAnimating } = useContext(ChessContext)!

    return (
        <>
            <nav w-full>
                <ul flex justify-between p-5 gap-1 transition duration-200 ease-in
                    className={`
                    ${direction === 'next' ? '-translate-x-30' : ''}
                    ${direction === 'prev' ? 'translate-x-30' : ''} `} >
                    <li onClick={() => handleChange('prev')}>
                        {currentPiece === 0 ? pieces[pieces.length - 1] : pieces[currentPiece - 1]}
                    </li>
                    <li onTouchStart={() => pickPiece(pieces[currentPiece])}
                        onTouchEnd={releasePiece}
                    >
                        {pieces[currentPiece]}
                    </li>
                    <li onClick={() => handleChange('next')}>
                        {currentPiece === pieces.length - 1 ? pieces[0] : pieces[currentPiece + 1]}
                    </li>
                </ul>
            </nav>
        </>
    )
}