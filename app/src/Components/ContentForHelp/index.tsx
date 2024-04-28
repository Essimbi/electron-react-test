import {
    Box,
    Card,
    Container,
    Flex,
    Square,
    Text
} from '@chakra-ui/react';
import ChooseLang from '../ChooseLang';

export const Help = () => {

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
                <Flex >
                    <Box flex='2' padding={3}>
                        {/* <Center>
                            <Text fontSize='2xl'>Aide</Text>
                        </Center> */}
                    </Box>
                    <Square flex='1' >
                        <ChooseLang />
                    </Square>
                </Flex>
                <Container maxW='2xl'  centerContent>
                    <Box padding='4' bg='blue.400' color='white' maxW='md'>
                        <Text>
                            Pour utiliser l'application afin de faire une prédiction, vous devez suivre les étapes suivantes (les étapes sont expliquées plus en détail dans le guide d'utilisation de l'application) :
                        </Text> <br />
                        <Text>
                            1. Choisissez les matériaux de construction par défaut (matériau du toit, matériau du plafond, matériau du mur, matériau du sol, revêtement).
                        </Text><br />
                        <Text>
                            2. Ajouter les différents étages du bâtiment
                        </Text><br />
                        <Text>
                            3. Pour chaque étage, ajouter les pièces de l'étage avec leurs dimensions
                        </Text><br />
                        <Text>
                            4. Ajouter les ouvertures pour chaque pièce
                        </Text><br />
                        <Text>
                            5. Cliquez sur le bouton "process" pour calculer la température intérieure du bâtiment.
                        </Text><br />
                        <Text>
                            6. Le résultat est affiché dans la section de sortie, avec un aperçu des différentes caractéristiques du bâtiment.
                        </Text>
                    </Box>
                </Container>
            </Card>
        </Box >
    );
};
