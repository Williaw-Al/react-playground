import { TierRow } from "../tier-row"
import { TierlistCharacterCard } from "../tierlist-character-card"

const charactersList = ["Freddy", "Bonnie", "Chica", "Foxy", "Golden Freddy"]

export const TierlistMain = () => {
    return (
        <>
            <div text-center mb-10>
                <h1 font-orbitron>Tierlist Dinâmica <br /> Five Nights At Freddy's</h1>
                <p>Quais são os teus favoritos? Arraste os personagens para as posições!</p>
            </div>
            <ol grid grid-rows-7 gap-5>
                <TierRow tierKey="1" tierValue="S" />
                <TierRow tierKey="2" tierValue="A" />
                <TierRow tierKey="3" tierValue="B" />
                <TierRow tierKey="4" tierValue="C" />
                <TierRow tierKey="5" tierValue="D" />
                <TierRow tierKey="6" tierValue="E" />
                <TierRow tierKey="7" tierValue="F" />
            </ol>
            <div>
                {charactersList.map((character, id) => (
                    <TierlistCharacterCard key={id} name={character} />
                )
                )}
            </div>
        </>
    )
}