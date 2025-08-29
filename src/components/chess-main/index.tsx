import { useState } from "react"

const pieces = [
    'Peão', 'Cavalo', 'Bispo', 'Torre', 'Rainha', 'Rei'
]

export const ChessMain = () => {

    const [currentPiece, setCurrentPiece] = useState(0)
    const [direction, setDirection] = useState("")
    const [animating, setAnimating] = useState(false)

    const handleChange = (dir: string) => {
        if (animating) return
        setDirection(dir)
        setAnimating(true)

        setTimeout(() => {
            if (dir === 'prev') {
                setCurrentPiece(currentPiece === 0 ? pieces.length - 1 : currentPiece - 1)
            } else {
                setCurrentPiece(currentPiece === pieces.length - 1 ? 0 : currentPiece + 1)
            }

            setAnimating(false)
            setDirection('')
        }, 200)
    }

    return (
        <>
            <div text-center>
                <h1 font-orbitron>Peças Móveis</h1>
                <p>Escolha uma peça, e mova ela para o tabuleiro!</p>
            </div>
            <nav >
                <ul flex justify-between p-5 gap-1 transition duration-200 ease-in
                    className={`
                    ${direction === 'next' ? '-translate-x-30' : ''}
                    ${direction === 'prev' ? 'translate-x-30' : ''} `} >
                    <li onClick={() => handleChange('prev')}>
                        {currentPiece === 0 ? pieces[pieces.length - 1] : pieces[currentPiece - 1]}
                    </li>
                    <li onTouchStart={() => { console.log('Me segurou bixo') }}>
                        {pieces[currentPiece]}
                    </li>
                    <li onClick={() => handleChange('next')}>
                        {currentPiece === pieces.length - 1 ? pieces[0] : pieces[currentPiece + 1]}
                    </li>
                </ul>
            </nav>
            <div>
                <p>Dados</p>
            </div>
            <div>
                <p>Tabuleiro</p>
            </div>
        </>
    )
}