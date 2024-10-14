import { useState } from "react"
import Header from "../../components/header"

const Home = () => {

    const [showFavorites, setShowFavorites] = useState(false)
    
    const handleMenuClick = (menu: string) => {
        setShowFavorites(menu === "favoritos")
    }

    return(
        <div>
            <Header onMenuClick={handleMenuClick} showFavorites={showFavorites}/>
        </div>
    )
}

export default Home