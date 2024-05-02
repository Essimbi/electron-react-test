import {
    Box,
    Card,
    Container,
    Text
} from '@chakra-ui/react';
import ChooseLang from '../ChooseLang';

export const About = () => {

    return (
        <Box padding={5}>
            <Card
                height={{
                    base: '610px', // 0-48em
                    md: '605px', // 48em-80em,
                    xl: '685px', // 80em+
                }}
                width={{
                    base: '100%', // 0-30em
                    md: '100%', // 30em-48em
                    xl: '100%', // 48em-62em
                }}
                style={{ overflowX: 'scroll', overflowY: 'scroll' }}
            >
                <ChooseLang />
                <Container maxW='2xl' centerContent>
                    <Box padding='4' bg='gray.400' fontSize='xl' color='white' maxW='md'>
                        <Text>
                            Version du produit
                            HTSLM 2.0
                        </Text> <br />
                        <Text>
                            Informations sur la construction:
                            Reactjs et electronjs
                        </Text><br />
                        <Text>
                            Système d'exploitation
                            Windows
                        </Text>
                    </Box>
                </Container>
            </Card>
        </Box >
    );
};
