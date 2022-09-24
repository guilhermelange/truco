import { Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Heading, Icon, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SimpleGrid, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FiHelpCircle } from "react-icons/fi"

export default function Start() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    const toast = useToast()
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()

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
        <Flex position={'relative'}>
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
                                    <Select placeholder='Selecione' variant='filled' w={'45%'}
                                        id="type1"
                                        {...register('type1', {})}>
                                        <option value='random'>Random</option>
                                        <option value='baseline1'>Baseline 1</option>
                                        <option value='complex'>Monte Carlo</option>
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
                                    <Select placeholder='Selecione' variant='filled' w={'45%'}
                                        id="type2"
                                        {...register('type2', {})}>
                                        <option value='random'>Random</option>
                                        <option value='baseline1'>Baseline 1</option>
                                        <option value='complex'>Monte Carlo</option>
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
            <Icon onClick={onOpen} w={6} h={6} cursor={'pointer'} position={'absolute'} right={4} top={3} as={FiHelpCircle}></Icon>
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Tipos de Algoritmos:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={'column'} gap={4}>
                            <Text>
                                <Text display={'inline'} color={'teal.100'}>Ramdom. </Text>Jogadas completamente aleatórias
                            </Text>
                            <Text>
                                <Text display={'inline'} color={'teal.100'}>Baseline 1. </Text>Conjunto de regras convencionais no truco para identificar jogadas
                            </Text>
                            <Text>
                                <Text display={'inline'} color={'teal.100'}>Monte Carlo Search Tree. </Text>Utiliza o algoritmo de busca avançado para definir as jogadas com base em simulações 
                            </Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' onClick={onClose}><Text display={'inline'} color={'teal.100'}>Vamos Jogar!</Text></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}