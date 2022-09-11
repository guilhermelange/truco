/* eslint-disable react-hooks/rules-of-hooks */
import { useColorModeValue } from "@chakra-ui/react";

export default class Constants {
    static getFormBackground() {
        return useColorModeValue('gray.100', 'gray.700');
    }
}