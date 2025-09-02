interface ITierRowProps {
    tierKey: string,
    tierValue: string,
}

export const TierRow = ({ tierKey, tierValue }:ITierRowProps) => {
    return (
        <li>
            <div h-10 bg-pink-500
                className='grid grid-cols-[1fr_3fr] gap-5' >

                <input w-full h-full text-center type="text" name={tierValue} id={tierKey} defaultValue={tierValue} />
                <div h-full w-auto bg-bluegray>

                </div>
            </div>
        </li>
    )
}