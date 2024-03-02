import React from 'react';
import { useParams } from 'react-router-dom';
import trendingData from '../../../trendingData';

const REDetails = () => {
    const { cardId } = useParams();

    const selectedCard = trendingData.find((item) => item.id === parseInt(cardId, 10));

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    const { title, description, date, imageUrl } = selectedCard;

    return (
        <>
            {/* <div>REDetails {title}</div>
            <div>{description}</div>
            <div>Date: {date}</div>
            <div>
                <img src={imageUrl} alt="Card Image" />
            </div> */}
            <div className='flex'>
                 <div className='w-2/4 bg-customBlack p-10'>
                      <div className='border border-gray-700 p-10 font-ultra '>{description}</div>
                      <div className='mt-60 w-full flex justify-end  font-bold text-gray-600 border-t border-gray-300'>Date: {date}</div>
                 </div>
                 <div className='w-2/4 '>
                       <div className='sticky top-32'><img src={imageUrl}/></div>
                 </div>
            </div>

        </>
    );
}

export default REDetails;
