import { createContext, useState } from "react";

export interface IChessContext {
    currentPiece: number,
    setCurrentPiece: React.Dispatch<React.SetStateAction<number>>,

    holdingPiece: boolean,
    setHoldingPiece: React.Dispatch<React.SetStateAction<boolean>>,

    dragPosition: any,
    setDragPosition: React.Dispatch<React.SetStateAction<any>>,

    direction: string,
    setDirection: React.Dispatch<React.SetStateAction<string>>,

    animating: boolean,
    setAnimating: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChessContext = createContext<IChessContext | undefined>(undefined)

export const pieces = [
    'Peão', 'Cavalo', 'Bispo', 'Torre', 'Rainha', 'Rei'
]

export const ChessProvider = (props: any) => {
    const [currentPiece, setCurrentPiece] = useState(0)
    const [holdingPiece, setHoldingPiece] = useState(false)

    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })

    const [direction, setDirection] = useState("")
    const [animating, setAnimating] = useState(false)

    return (
        <ChessContext.Provider
            value={{
                currentPiece, setCurrentPiece,
                holdingPiece, setHoldingPiece,
                dragPosition, setDragPosition,
                direction, setDirection,
                animating, setAnimating
            }}
        >
            {props.children}
        </ChessContext.Provider>
    )
}