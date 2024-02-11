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
                 <div className='w-2/4'>{description}</div>
                 <div className='w-2/4'>
                       <div><img src={imageUrl}/></div>
                 </div>
            </div>

        </>
    );
}

export default REDetails;
