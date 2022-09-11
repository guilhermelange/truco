import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Constants from "../styles/Constants";

export default function Joker() {
    const formBackground = Constants.getFormBackground();

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Manilha (Virada):</Heading>
            <VStack alignItems={'center'} w={'100%'}>
                <Box>
                    <img style={{ maxHeight: '220px' }} src={'/cards/1_moles.png'} height={'100%'} width={'100%'}></img>
                </Box>
            </VStack>
        </VStack>
    )
}