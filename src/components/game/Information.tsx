import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";

interface IInformationRequest {
    information: string;
}

export default function Information({ information }: IInformationRequest) {
    const formBackground = Constants.getFormBackground();

    return (
        <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Informações</Heading>

            <Text w={'100%'} mt={0}>
                <Flex justifyContent={'space-between'} gap={0} bgColor={'whiteAlpha.200'} p={2} rounded={6} w={'100%'}>
                    <Text>{information}</Text>
                </Flex>
            </Text>
        </VStack>
    )
}