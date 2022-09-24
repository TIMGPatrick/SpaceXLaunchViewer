import React, {ReactElement, useEffect, useState} from 'react';
import ShipCard from "../ShipCard/ShipCard";
import CapsuleCard from "../CapsuleCard/CapsuleCard";

function VehicleList(): ReactElement {

    const [allShips, setAllShips] = useState([]);
    const [allCapsules, setAllCapsules] = useState([]);

    useEffect(() => {
        fetchAllShipDetails();
        fetchAllCapsuleDetails()
    }, []);

    async function fetchAllShipDetails(): Promise<void> {
        await fetch("https://api.spacexdata.com/v4/ships")
            .then(response => {
            response.json().then(data => {
                console.log(data);
                setAllShips(data)
            }).catch(err => {
                console.log(err)
            });
        });
    }

    async function fetchAllCapsuleDetails(): Promise<void> {
        await fetch("https://api.spacexdata.com/v4/capsules")
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    setAllCapsules(data)
                }).catch(err => {
                    console.log(err)
                });
            });
    }

    return (
        <div className={"text-center"}>
            <h1 className="mx-auto text-3xl font-bold tracking-tight text-gray-900"> Ships: </h1>
            <div className={"justify-center flex-col my-5 mx-2.5"}>
                {allShips?.map(({id, name, image, type}: any) => (
                    <ShipCard name={name} type={type} image={image} key={id}/>
                ))}
                <h1 className="mx-auto text-3xl font-bold tracking-tight text-gray-900"> Capsules: </h1>
                <div className={"justify-center flex-col my-5 mx-2.5"}>
                    {allCapsules?.map(({id, type, status}: any) => (
                        <CapsuleCard type={type} status={status} key={id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VehicleList;
