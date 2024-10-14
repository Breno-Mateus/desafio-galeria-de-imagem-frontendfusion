import { useState } from "react";
import { PropsCard } from "../../types/card"
import { FaStar } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const Card = ({item, toggleFavorite, isFavorite} : PropsCard) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOPen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div key={item.id} className="bg-cardColor text-textColor rounded-lg border border-textColor flex flex-col gap-2">
            <img src={`https://picsum.photos/id/${item.id}/200/200`} className="rounded-t-lg"/>
            
            {isOpen ? (
                <div className="flex flex-col gap-2 p-2">
                    <div className="flex items-center justify-center">
                        <button onClick={handleIsOPen} className="mb-2"> <MdExpandLess /> </button>
                    </div>

                    <h4 className="font-black">{item.author}</h4>

                    <p className="text-sm">Dimensões: {item.width} x {item.height}</p>

                    <div className="flex justify-between">
                        <a href={item.download_url} className="text-sm bg-linkColor p-2 rounded-md no-underline cursor-pointer hover:opacity-80">Download</a>

                        <button onClick={() => toggleFavorite(item)} className="bg-none border-none">
                            {isFavorite ? <FaStar className="text-startColor cursor-pointer" /> : <FaStar className="cursor-pointer" />}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <button onClick={handleIsOPen} className="mb-1"> <MdExpandMore /> </button>
                </div>
            )}
        </div>
    )
}

export default Card