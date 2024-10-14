import { useEffect, useState } from "react"
import Header from "../../components/header"
import Api from "../../services/api"
import { TypeData } from "../../types/data"
import Card from "../../components/card"

const Home = () => {

    const [data, setData] = useState<TypeData[]>([])

    const [fav, setFav] = useState<TypeData[]>([])

    const [showFavorites, setShowFavorites] = useState(false)
    
    const toggleFavorite = (id: TypeData) => {
    
        if (fav.includes(id)) {
    
          setFav(fav.filter((favoriteId) => favoriteId !== id))
    
        } else {
          
          setFav([...fav, id])
          console.log(fav)
    
        }
      }

    useEffect(() => {
    
        Api()
    
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
    
        .catch((error) => {console.log(error.message)})
    
      }, [])

    const handleMenuClick = (menu: string) => {
        setShowFavorites(menu === "favoritos")
    }

    const imagesToShow = showFavorites ? fav : data

    return(
        <div className="bg-secondaryColor">
            <Header onMenuClick={handleMenuClick} showFavorites={showFavorites}/>

            <div className="flex justify-center flex-wrap items-center gap-8 pt-36 pb-36 min-h-screen">
                {imagesToShow.length > 0 ? (
                    imagesToShow.map((item) => (
                    <Card key={item.id} item={item} isFavorite={fav.some((favoriteItem) => favoriteItem.id === item.id)} toggleFavorite={toggleFavorite}/>
                    ))
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home