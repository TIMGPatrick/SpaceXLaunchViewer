import React from 'react';
import rocket from '../../public/vector-of-rocketship-icon.jpg'
import {Card, CardBody, CardHeader, Typography} from '@material-tailwind/react';

function CapsuleCard(props: any) {
    return (
        <>
            <Card className={"justify-center flex-col my-5 max-w-md rounded-lg"}>
                <CardHeader
                    className={"justify-center align-middle flex-col h-24 w-24 mx-auto mb-3 mt-1 drop-shadow shadow-2xl rounded-2xl"}>
                    <img src={props?.image ?? rocket} alt="a rocket ship" className={"h-24 w-24 rounded-2xl"}/>
                </CardHeader>
                <CardBody className={"text-center"}>
                    <Typography className={"mb-2 mx-2"}>
                        Type: {props?.type}
                    </Typography>
                    <Typography className={"mb-2 mx-2"}>
                        Status: {props?.status}
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}

export default CapsuleCard;
