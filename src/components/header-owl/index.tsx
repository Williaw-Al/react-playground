import './style.css'

export const HeaderOwl = () => {
    return (
        <div relative >
            <img src="/coruja-back.svg" alt="" />
            <img absolute top-0 left-0 
            src="/coruja-eyes.svg" alt="" />
            <img className='coruja-front-anim'
            src="/coruja-front.svg" alt="" />
        </div>
    )
}