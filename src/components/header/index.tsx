import { useState } from "react";
import { PropsSideMenu } from "../../types/header"
import { BsImages } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Hamburger from 'hamburger-react'
import Button from "../button";


const Header = ({onMenuClick, showFavorites} : PropsSideMenu) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className="flex flex-col p-6 w-full fixed top-0 z-[1000] border-b border-textColor bg-background text-textColor">
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <BsImages className="text-lg"/>
                    <h4 className="text-lg">Galeria de imagens</h4>
                </div>
                
                <div className="hidden lg:flex gap-4">
                    <Button 
                        label="Todas"
                        icon={<FaWallet />}
                        onClick={() => onMenuClick("todas")}
                        isActive={!showFavorites}
                    />

                    <Button 
                        label="Favoritas"
                        icon={<FaStar />}
                        onClick={() => onMenuClick("favoritos")}
                        isActive={showFavorites}
                    />
                </div>

                <div className="lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>

            {isOpen && (
                <div className="h-screen flex flex-col items-center gap-10 pt-52">
                    <Button
                        label="Todas"
                        icon={<FaWallet />}
                        onClick={() => onMenuClick("todas")}
                        onClose={() => setOpen(false)}
                        isActive={!showFavorites}
                    />

                    <Button
                        label="Favoritas"
                        icon={<FaStar />}
                        onClick={() => onMenuClick("favoritos")}
                        onClose={() => setOpen(false)}
                        isActive={showFavorites}
                    />
                </div>
            )}
            
        </header>
    )
}

export default Header