interface ProjectCardProps {
    title: string,
    about: string,
    image: string,
}

export const ProjectCard = ({ title, about, image }: ProjectCardProps) => {
  return (
    <>
        <div
        className={`
            bg-cover
            w-64 h-40
            rounded-2xl
            overflow-hidden
            shadow-lg
            border border-gray-200
            transition
            transform
            hover:scale-105
            hover:rotate-[1deg]
            hover:shadow-2xl
            hover:border-purple-400
            hover:-translate-y-1
            duration-300
            ease-out
            cursor-pointer
        `}
        >
            <div absolute top-2 w-full text-center>
                <h2 font-orbitron color-purple-950 text-shadow-color-pink-100 text-shadow-md>{title}</h2>
            </div>
            <p absolute bottom-2>{about}</p>
            <img src={image} alt="project card" w-full h-full object-cover opacity-25 />
        </div>
    </>
  );
};