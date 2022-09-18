import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function InternalServerError() {
    const router = useRouter();
    const [path, setPath] = useState("");

    useEffect(() => {
        setPath(router.asPath);
    }, [router.asPath])

    return (
        <Flex alignItems={'center'} justifyContent={'center'} h={'100vh'}>
            <Box p={6} textAlign={'center'} background={'whiteAlpha.50'}>
                <VStack spacing={6}>
                    <Heading>Desculpe, algo ocorreu errado<Text display={'inline'}>!</Text> </Heading>
                    <Text>{path}</Text>
                </VStack>
            </Box>
        </Flex>
    )
}