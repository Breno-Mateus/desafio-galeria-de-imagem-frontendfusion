import { PropsButton } from "../../types/button"

const Button = ({label, icon, onClick, onClose, isActive} : PropsButton) => {

    const handleClick = () => {
        if (onClick) onClick()
        if (onClose) onClose()
    }

    return (
        <button 
        onClick={handleClick}
        className={`flex justify-around items-center gap-4 bg-cardColor p-2 border-none rounded-lg cursor-pointer hover:opacity-50 ${isActive ? "active" : ""}`}>
            <p>{label}</p>
            {icon}
        </button>
    )
}

export default Button