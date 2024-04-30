
import {useLoaderData} from 'react-router-dom';
import AllArtCard from './AllArtCard';
import { Helmet } from 'react-helmet-async';
const AllArt = () => {
    const materials = useLoaderData()
    console.log(materials);
    return (
        <div>
            <Helmet>
                <title>CraftedEcoChic | All Art&Craft</title>
            </Helmet>
           <div>
           {
                materials.map(item => <AllArtCard key={item._id} item={item}></AllArtCard>)
            }
           </div>
        </div>
    );
};

export default AllArt;