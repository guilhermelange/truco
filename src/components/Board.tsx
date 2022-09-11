import { AvatarBadge, Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState, useEffect } from 'react';
import Avatar from "../components/Avatar";
import { AvatarDirection, AvatarStatus } from "../truco/model/Avatar";
import { Avatar as Av } from "@chakra-ui/react";

export default function Board() {
    const ref = useRef<HTMLDivElement>(null);
    const reff = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [heightGrid, setHeightGrid] = useState(0);
    const cardWidth = heightGrid / 3.1;

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
        if (reff.current) {
            setHeightGrid(reff.current.clientHeight)
        }
    }, [])

    return (
        <>
            <Grid
                h={'100%'}
                w={(height)}
                ref={ref}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={0}
                bg={'radial-gradient(circle, rgba(70,196,21,1) 10%, rgba(13,112,34,1) 100%)'}
                rounded={10}
                border={'10px solid'}
                borderColor={'whiteAlpha.500'}
            >
                <GridItem >
                </GridItem>
                <GridItem position={'relative'}>
                    <Avatar name='Guilherme Lange' direction={AvatarDirection.TOP} status={AvatarStatus.ONLINE} />
                    <Box display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        h={'full'}
                        transform={'rotate(180deg)'}>
                        <Box transform={'rotate(-5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(0deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem >
                </GridItem>
                <GridItem position={'relative'}>
                    <Avatar name='Guilherme Lange' direction={AvatarDirection.LEFT} status={AvatarStatus.ONLINE} />
                    <Box display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        h={'full'}
                        transform={'rotate(90deg)'}>
                        <Box transform={'rotate(-5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(0deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                >
                    <Box transform={'rotate(45deg)'} position='absolute'
                        bottom={0}
                        left={5}
                        id={'manilha'}
                        >
                        <img src={'/cards/1_moles.png'} height={'100%'} width={cardWidth}></img>
                    </Box>
                    <Box transform={'rotate(90deg)'} position='absolute'
                        id={'monte'}
                    >
                        <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                    </Box>

                    {/* Cartas viradas */}
                    <Box transform={'rotate(80deg)'} position='absolute'>
                        <img src={'/cards/2_moles.png'} height={'100%'} width={cardWidth + 20}></img>
                    </Box>
                    <Box transform={'rotate(105deg)'} position='absolute'>
                        <img src={'/cards/3_paus.png'} height={'100%'} width={cardWidth + 20}></img>
                    </Box>
                    

                </GridItem>
                <GridItem position={'relative'}>
                    <Avatar name='Guilherme Lange' direction={AvatarDirection.RIGHT} status={AvatarStatus.ONLINE} />
                    <Box display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        h={'full'}
                        transform={'rotate(270deg)'}>
                        <Box transform={'rotate(-5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(0deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/verso.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem >
                </GridItem>
                <GridItem ref={reff} position='relative'>
                    <Avatar name='Guilherme Lange' direction={AvatarDirection.BOTTOM} status={AvatarStatus.ONLINE} />
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'full'}>
                        <Box transform={'rotate(-5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/1_moles.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(0deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/1_moles.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                        <Box transform={'rotate(5deg)'} _hover={{ transform: 'scale(1.3)', zIndex: 1 }} transition={'transform .2s'}>
                            <img src={'/cards/1_moles.png'} height={'100%'} width={cardWidth}></img>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem >
                </GridItem>
            </Grid>
        </>
    )

}