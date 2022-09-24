import React, {useEffect, useState} from 'react';
import rocket from '../../vector-of-rocketship-icon.jpg'
import ShipCard from "../ShipCard/ShipCard";
import {Card, CardBody, CardHeader, Typography} from '@material-tailwind/react';

function ShipList() {

    const proppyWoppy = "hello world"

    // useEffect();

    let [ships, setShips] = useState([]);


    const iterator = [1,2,3,4,5]

    return (
        <>
            <div className={"justify-center flex-col my-5 bottom-500"}>
                {iterator.map ( index => (
                        <ShipCard proop={proppyWoppy} key={index}/>
                    ))}

                {/*<ShipCard proop={proppyWoppy}/>*/}
                {/*<ShipCard proop={proppyWoppy}/>*/}
            </div>
        </>
    )
}

export default ShipList;
