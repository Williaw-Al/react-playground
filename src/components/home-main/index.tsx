import { ProjectCard } from "../project-card"
import { Link } from "react-router"

interface IProject {
    title: string,
    about: string,
    image: string,
}

interface ICards {
    xadrez: IProject,
    tierlist: IProject
}

const cardsUrl: ICards = {
    xadrez: {
        title: 'Peças Móveis',
        about: 'Veja informações sobre as peças de xadrez, arrastando elas para o tabuleiro.',
        image: '/src/assets/cards/chess-card.avif',
    },
    tierlist: {
        title: 'Tierlist Editável',
        about: 'Brinque com os cartões dos personagens de FNaF. Consegue achar o Easter Egg?',
        image: '/src/assets/cards/tierlist-card.png'
    }
}

export const HomeMain = () => {

    return (
        <main flex flex-col items-center text-center>
            <h1 uppercase font-orbitron>React <br /> Playground</h1>
            <div className="p-[10px] mb-5">
                <p mb-5>Duas experiências React para testes, mas que podem ser aproveitadas por todos.</p>
                <p>Escolha um de sua preferência, e deixe seu feedback para futuras iterações!</p>
            </div>

            <div flex flex-col gap-10>
                <Link to='chess-pieces'>
                    <ProjectCard
                        title={cardsUrl.xadrez.title}
                        about={cardsUrl.xadrez.about}
                        image={cardsUrl.xadrez.image} />
                </Link>
                <Link to='tierlist-fnaf'>
                    <ProjectCard
                        title={cardsUrl.tierlist.title}
                        about={cardsUrl.tierlist.about}
                        image={cardsUrl.tierlist.image} />
                </Link>
            </div>

        </main>
    )
}