import { Box, Center, Text } from "@chakra-ui/react";

function Footer() {
    const currentYear: number = new Date().getFullYear()

    return ( 
        <Box bg='#0D0D0D' padding='1.5rem'>
            <Center color='#FFFFFF' flexDirection='column'>
                <Text fontSize='lg' as='b'>Dio Bank</Text>
                <Text fontSize='md'>&copy; {currentYear} Dio Bank. Todos os direitos reservados</Text>
            </Center>
        </Box>
     );
}

export default Footer;