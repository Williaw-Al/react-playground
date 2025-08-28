import { useState } from "react"

export const HamburgerMenu = () => {
    const [active, setActive] = useState(false)

    return (
        <div relative flex flex-col>
            <input id="menu-hamburguer" type="checkbox" onChange={() => setActive(!active)} />

            <label htmlFor="menu-hamburguer" self-end>
                <div w-15 h-7 mt-5 flex justify-center>
                    <div
                        className={`
                    w-[100%] h-2 bg-black rounded-full relative
                    before:content-[''] before:block before:absolute before:w-[100%] before:h-2 before:bg-black before:rounded-full before:-translate-y-4
                    after:content-[''] after:absolute after:w-[100%] after:h-2 after:bg-black after:rounded-full after:translate-y-4
                    ${active ?
                                'rotate-45 before:rotate-90 before:top-4 after:-rotate-90 after:bottom-4'
                                : ''}
                    transition duration-500 ease-in-out before:duration-250 after:duration-250
                    `} />
                </div>
            </label>
            {
                active &&
                <ul z-10  bg-red-5 absolute top-15 right-0 p-3 rounded-xl>
                    <li><a href="https://github.com/Williaw-Al" title="Ir para o GitHub" target="_blank">
                        <div text-8 className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-8 items-center">
                            <i className="fab fa-github"></i>
                            <p self-start>Github</p>
                        </div>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/william-al-avila/" title="Ir para o LinkedIn" target="_blank">
                        <div text-8 className="grid grid-cols-[1fr_2fr] grid-rows-1 items-center">
                            <i className="fab fa-linkedin-in"></i>
                            <p self-start>Linkedin</p>
                        </div>
                    </a></li>
                </ul>
            }
        </div >
    )
}