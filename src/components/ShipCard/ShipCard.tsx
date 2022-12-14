import React from 'react';
import boat from "../../public/vector-boat-icon.jpg";

import {Card, CardBody, CardHeader, Typography} from '@material-tailwind/react';

function ShipCard(props: any) {
    return (
        <>
            <Card className={"justify-center flex-col my-5 max-w-md rounded-lg"}>
                <CardHeader
                    className={"justify-center align-middle flex-col h-24 w-24 mx-auto mb-3 mt-1 drop-shadow shadow-2xl rounded-2xl"}>
                    <img src={props.image ?? boat} alt="a rocket ship" className={"h-24 w-24 rounded-2xl"}/>
                </CardHeader>
                <CardBody className={"text-center"}>
                    <Typography className={"mb-2 mx-2"}>
                        Name: {props?.name}
                    </Typography>
                    <Typography className={"mb-2 mx-2"}>
                        Type: {props?.type}
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}

export default ShipCard;
