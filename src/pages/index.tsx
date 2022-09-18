import { Box, Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Heading, Input, InputGroup, Select, SimpleGrid, Text, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Start() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    const toast = useToast()
    const router = useRouter();

    const textPlaceholder = useColorModeValue("blackAlpha.400", "whiteAlpha.400")
    const handleStart = () => {
        toast({
            title: 'Conectado',
            description: 'Você está conectado. Aproveite!',
            status: 'success',
            duration: 3000,
            isClosable: false
        })
        router.push('/game')
    }

    return (
        <Flex>
            <Container maxW="container.xl" p={0}>
                <Flex
                    h={{ base: 'auto', lg: '100vh' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <VStack
                        w={'50%'}
                        h={'full'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <VStack
                            pb={4}
                            spacing={6}
                            align="center">
                            <Heading size={'xl'} display={'flex'} gap={4}>Truco!!!</Heading>
                        </VStack>
                        <form style={{ width: '80%' }} onSubmit={handleSubmit(handleStart)}>
                            <Text mb={3}>Selecione os jogadores:</Text>
                            <SimpleGrid columns={1} columnGap={3} rowGap={4} w={'100%'}>
                                <FormControl isInvalid={!!errors.user1} display={'flex'} gap={2}>
                                    <Input
                                        _placeholder={{ color: textPlaceholder }}
                                        id='user1'
                                        placeholder='Jogador 01'
                                        {...register('user1', {
                                            required: 'Obrigatório definir usuário'
                                        })}
                                    />
                                    <Select placeholder='Tipo' variant='filled' w={'35%'}
                                        id="type1"
                                        {...register('type1', {})}>
                                        <option value='online'>Online</option>
                                        <option value='beginner'>Iniciante</option>
                                        <option value='median'>Mediano</option>
                                        <option value='advanced'>Avançado</option>
                                    </Select>
                                </FormControl>
                                <FormControl isInvalid={!!errors.user2} display={'flex'} gap={2}>
                                    <Input
                                        _placeholder={{ color: textPlaceholder }}
                                        id='user2'
                                        placeholder='Jogador 02'
                                        {...register('user2', {
                                            required: 'Obrigatório definir usuário'
                                        })}
                                    />
                                    <Select placeholder='Tipo' variant='filled' w={'35%'}
                                        id="type2"
                                        {...register('type2', {})}>
                                        <option value='beginner'>Iniciante</option>
                                        <option value='median'>Mediano</option>
                                        <option value='advanced'>Avançado</option>
                                    </Select>
                                </FormControl>
                                <FormControl isInvalid={!!errors.user3} display={'flex'} gap={2}>
                                    <Input
                                        _placeholder={{ color: textPlaceholder }}
                                        id='user3'
                                        placeholder='Jogador 03'
                                        {...register('user3', {
                                            required: 'Obrigatório definir usuário'
                                        })}
                                    />
                                    <Select placeholder='Tipo' variant='filled' w={'35%'}
                                        id="type3"
                                        {...register('type3', {})}>
                                        <option value='beginner'>Iniciante</option>
                                        <option value='median'>Mediano</option>
                                        <option value='advanced'>Avançado</option>
                                    </Select>
                                </FormControl>
                                <FormControl isInvalid={!!errors.user4} display={'flex'} gap={2}>
                                    <Input
                                        _placeholder={{ color: textPlaceholder }}
                                        id='user4'
                                        placeholder='Jogador 04'
                                        {...register('user4', {
                                            required: 'Obrigatório definir usuário'
                                        })}
                                    />
                                    <Select placeholder='Tipo' variant='filled' w={'35%'}
                                        id="type4"
                                        {...register('type4', {})}>
                                        <option value='beginner'>Iniciante</option>
                                        <option value='median'>Mediano</option>
                                        <option value='advanced'>Avançado</option>
                                    </Select>
                                </FormControl>
                                <Button isLoading={isSubmitting} type='submit'>
                                    Iniciar
                                </Button>
                            </SimpleGrid>
                        </form>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}