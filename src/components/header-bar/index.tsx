import { HeaderOwl } from "../header-owl"
import { HamburgerMenu } from "../hamburger-menu"

export const HeaderBar = () => {
    return (
        <>
            <header bg-gradient-to-b from-purple-950 to-pink-950
                grid place-items-center className="grid-cols-[1fr_1fr_1fr]"
            >
                <div />
                <HeaderOwl/> 
                <div >
                    <HamburgerMenu></HamburgerMenu>
                </div>
            </header>

            <div className="bg-[url(/header-border.png)] h-[10px] translate-y-[-5px]" />
        </>
    )
}