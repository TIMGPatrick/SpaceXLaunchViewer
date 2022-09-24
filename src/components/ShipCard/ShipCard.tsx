import React from 'react';
import rocket from '../../vector-of-rocketship-icon.jpg'
import {Card, CardBody, CardHeader, Typography} from '@material-tailwind/react';

function ShipCard(props: any) {
    return (
        <>
            {/*<Card className={"w-96 flex-auto h-24 justify-center grid-rows-12"}>*/}
            <Card className={"justify-center flex-col my-5"}>
                {/*<CardHeader> <img src={rocket}  alt="picture of a rocket ship" className={"relative mx-0.5 my-0.5 h-24 w-24"}/></CardHeader>*/}
                <CardHeader className={"justify-center align-middle flex-col h-24 w-24 mx-auto mb-5 shadow-black"}>
                    <img src={rocket} alt="picture of a rocket ship" className={"h-24 w-24 my-1"}/>
                </CardHeader>
                {/*<CardBody className={"row-span-8 text-center"}><Typography className={" mb-2"}>here is a paragraph but it is really a sentence</Typography></CardBody>*/}
                <CardBody className={"text-center"}>
                    <Typography className={"mb-2 mx-2"}>
                        Here is a paragraph but it is really
                        a sentence
                        <code> {props?.proop} </code>
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}

export default ShipCard;
