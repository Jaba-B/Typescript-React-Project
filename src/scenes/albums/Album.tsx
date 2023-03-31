type Props = {
    name: string;
    description: string;
    image: string;
}

const Album = ( { name, description, image }: Props ) => {

    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className="p-5 absolute top-0 left-0 z-50 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img alt={name} src={image} className="h-[380px] w-[450px]"/>
        </li>
    )
}

export default Album