import React from 'react';
import cirimage1locat from './cirimage1locat.jpg';
import cirimage2locat from './cirimage2locat.jpg';
import cirimage3locat from './cirimage3locat.jpg';
import cirimage4locat from './cirimage4locat.jpg';
import cirimage5locat from './cirimage5locat.jpg';
import cirimage6locat from './cirimage6locat.jpg';


function Iphoto ({url , className , alt}) {

    return (
        <>
            <img src={url} className={`shadow-lg rounded-full h-20 w-20 ${className}`} alt={alt} />
        </>
    );
}

export default Iphoto;
