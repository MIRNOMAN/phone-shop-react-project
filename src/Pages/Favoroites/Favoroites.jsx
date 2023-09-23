import { useEffect } from "react";
import { useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import FavouriteCard from "./FavouriteCard";


const Favoroites = () => {
    const [favourites, setFavourites] = useState([]);
    const [noData, setNoData] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totallPrice, setTotallPrice] = useState(0)


    useEffect( () => {
      
        const favouriteItem = JSON.parse(localStorage.getItem('favourites'))
       if(favouriteItem){
        setFavourites(favouriteItem)

       const totall = favouriteItem.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
       setTotallPrice(totall)

       }else{
         setNoData("No data Found")
       }

    }, [])

    const handleRemove = () =>{
        localStorage.clear()
        setFavourites([])
        setNoData("No data Found")
    }
    
    return (
        <div>
            { noData ? <p className="flex justify-center items-center h-screen">{noData}</p> : 
            <div >
                 {favourites.length>0 && (
                    <div><button onClick={handleRemove} className="p-4 mx-auto block bg-red-400 rounded-lg">Delete All favourite</button>
                    
                    <h1>Totall Price : $ {totallPrice}</h1>
                    
                    </div> 
                 )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {
                    isShow ? favourites?.map(phone => <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>) :
                    favourites.slice(0,2).map(phone => <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>)
                }
                </div>

                {favourites.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="p-4 mx-auto block bg-teal-700 rounded-lg mt-8">{ isShow ? 'See Less' : 'See More'}</button>}
                
                </div>}
        </div>
    );
};

export default Favoroites;