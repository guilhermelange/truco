import { Box, Heading, Skeleton, Text, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";
import Card from "../../truco/domain/model/Card";

interface IJokerRequest {
    joker: Card;
    loading: boolean;
}

export default function Joker({ joker, loading }: IJokerRequest) {
    const formBackground = Constants.getFormBackground();

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Virada</Heading>
            <VStack alignItems={'center'} w={'100%'}>
                <Box>
                    {!loading && typeof(joker?.getImage) == 'function' && <img style={{ maxHeight: '220px' }} src={`/cards/${joker.getImage()}`} height={'100%'} width={'100%'}></img>}
                    {loading && <Skeleton maxH={'220px'} maxW={'145px'} height={'500px'} w={'500px'}></Skeleton>}
                </Box>
            </VStack>
        </VStack>
    )
}