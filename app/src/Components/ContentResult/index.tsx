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
import { useSettingsContext } from '../../Hooks/useSettings';

const Index: React.FC = () => {

    const { setActiveStep, steps, setStep } = useStepContext();
    const { settings } = useSettingsContext();

    const { TintData } = useTintContext();

    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]


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
                    <Center h='400px' color='white' marginTop={['50%', '35%', '30%', '25%', '14%', '10%']} >
                        <Card
                            width={'90%'}
                            height={'170%'}
                        >
                            <Grid
                                h='190px'
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
                                            <GridItem w='100%' h='10' ><Text>La Température moyenne intérieure : </Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{globalTemperature} °C</Text></GridItem>

                                        </Grid>
                                    </Card>
                                </GridItem>
                                <GridItem colSpan={2} >
                                    <Button
                                      _hover={{
                                        backgroundColor: settings.globalColors.primary.main,
                                        opacity: 0.5,
                                      }}
                                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                                      background="linear-gradient(to right, #09AFAF, #09AFAF)"
                                      colorScheme="teal"
                                    >
                                        Exporter
                                    </Button>

                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Plot
                                        data={[
                                            {
                                                x: hours,
                                                y: TintData,
                                                type: 'scatter',
                                                mode: 'lines',
                                                marker: { color: 'blue' },
                                            },
                                        ]}
                                        layout={{
                                            width: 900,
                                            height: 300,
                                            title: 'Courbe de la temperature',
                                            xaxis: { title: 'Heure', tick0: 0, tickvals: hours },
                                            yaxis: { title: 'Température (en °C)' },
                                        }} />
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