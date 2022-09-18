import { Box, Center, Flex, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NotFound() {
    const router = useRouter();
    const [path, setPath] = useState("");

    useEffect(() => {
        setPath(router.asPath);
    }, [router.asPath])

    return (
        <Flex alignItems={'center'} justifyContent={'center'} h={'100vh'}>
            <Box p={6} textAlign={'center'} background={'whiteAlpha.50'}>
                <VStack spacing={6}>
                    <Heading>Não localizado<Text display={'inline'}>!</Text> </Heading>
                    <Text>Desculpe, não há nada em:</Text>
                    <Text >{path}</Text>
                </VStack>
            </Box>
        </Flex>
    )
}