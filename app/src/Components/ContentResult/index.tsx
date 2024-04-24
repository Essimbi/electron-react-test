import {
    Box,
    Button,
    Card,
    Center,
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';
import Plot from 'react-plotly.js';
import { TintProvider, useTintContext } from '../../contexts/GraphContext';
import { useStepContext } from '../../Hooks/useStep';

const Index: React.FC = () => {

    const { setActiveStep, steps, setStep } = useStepContext();

    const { TintData } = useTintContext();

    console.log('les data', TintData);

    // Calcul de la température globale (moyenne)
    const calculateGlobalTemperature = () => {
        if (TintData.length === 0) return 0;

        const sum = TintData.reduce((acc, temperature) => acc + temperature, 0);

        const average = sum / TintData.length;

        return average.toFixed(2);
    };

    const globalTemperature = calculateGlobalTemperature();

    const materiauxToit = steps['STEP-0']?.payload?.materiaux_toit;
    const materiauxMur = steps['STEP-0']?.payload?.materiaux_mur;
    const materiauxPlafond = steps['STEP-1']?.payload?.['STEP-1-0']?.materiaux_plafond;
    const revetementSol = steps['STEP-1']?.payload?.['STEP-1-0']?.revetement_sol;
    const revetementExterieurMur = steps['STEP-1']?.payload?.['STEP-1-0']?.revetement_exterieur_mur;
    const zoneGeographique = steps['STEP-2']?.payload?.Zone_geographique;
    const hauteurSousPlafond = steps['STEP-1']?.payload?.['STEP-1-0']?.hauteur_sous_plafond;
    const longueur = steps['STEP-1']?.payload?.['STEP-1-0']?.longueur;
    const largeur = steps['STEP-1']?.payload?.['STEP-1-0']?.largeur;
  

    return (
        <>
            <TintProvider>
                <Box>
                    <Center h='400px' color='white' marginTop={['50%', '35%', '30%', '25%', '20%', '15%']} >
                        <Card
                            width={'90%'}
                            height={'170%'}
                        >
                            <Grid
                                h='200px'
                                templateRows='repeat(2, 1fr)'
                                templateColumns='repeat(4, 1fr)'
                                gap={4}
                                padding={5}
                                marginLeft={5}>
                                {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' >
                            </GridItem> */}
                                <GridItem colSpan={2} bg='' >
                                    <Card
                                        width={'100%'}
                                        height={'auto'}
                                    >
                                        <Grid templateColumns='repeat(2, 1fr)' gap={0} padding={2}>
                                            <GridItem w='100%' h='10' ><Text>Matériel du plafond :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{materiauxPlafond}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>Matériaux du toit :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{materiauxToit}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>matériau du dur :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{materiauxMur}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>Enrobage :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{revetementExterieurMur}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>Matériaux du sol :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{revetementSol}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>Région :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{zoneGeographique}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>Dimensions de la pièce : </Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>H: {hauteurSousPlafond}, L: {longueur}, largeur: {largeur}</Text></GridItem>

                                        </Grid>
                                    </Card>
                                </GridItem>
                                <GridItem colSpan={2} bg='papayawhip' >
                                    <Button bg='#09AFAF'>
                                        Imprimer
                                    </Button>

                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Plot
                                        data={[
                                            {
                                                x: Array.from({ length: TintData.length }, (_, i) => i + 1),
                                                y: TintData,
                                                type: 'scatter',
                                                mode: 'lines',
                                                marker: { color: 'blue' },
                                            },
                                        ]}
                                        layout={{
                                            width: 500,
                                            height: 340,
                                            title: 'Courbe de la temperature',
                                            xaxis: { title: 'Temps' },
                                            yaxis: { title: 'Valeur' },
                                        }} />
                                </GridItem>
                                <GridItem colSpan={2} >
                                    <Text>La Température intérieur est de:  {globalTemperature} °C</Text>
                                    {/* {JSON.stringify(steps)} */}
                                </GridItem>
                            </Grid>
                        </Card>
                    </Center>
                </Box >
            </TintProvider>
        </>
    )
}

export default Index