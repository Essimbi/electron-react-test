import {
    Box,
    Button,
    Card,
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';
import Plot from 'react-plotly.js';
import { TintProvider, useTintContext } from '../../contexts/GraphContext';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { useTranslation } from "react-i18next";

import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import ChooseLang from '../ChooseLang';

const Index: React.FC = () => {

    const { setActiveStep, steps, setStep } = useStepContext();
    const { settings } = useSettingsContext();

    const { TintData } = useTintContext();
    const { t } = useTranslation();

    const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]


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

    const dataExportation = () => {
        const worksheet = XLSX.utils.aoa_to_sheet([TintData]);
        for (let i = 0; i < TintData.length; i++) {
            worksheet['A' + (i + 1)] = { t: 'n', v: TintData[i] };
        }
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Feuille1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, `Resultalt-LOBATIN.xlsx`);
    }


    return (
        <>
            <TintProvider>
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
                            style={{overflowX:'scroll', overflowY:'scroll'}}
                        >
                          <ChooseLang />
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
                                            <GridItem w='100%' h='10' ><Text>{t('result.plafond')} :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{materiauxPlafond}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>{t('result.toit')} :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{materiauxToit}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>{t('result.mur')} :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{materiauxMur}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>{t('result.enrobage')} :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{revetementExterieurMur}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>{t('result.sol')} :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{revetementSol}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>{t('result.region')} :</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{zoneGeographique}</Text></GridItem>

                                            <GridItem w='100%' h='10' ><Text>{t('result.dimension')} : </Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{t('result.h')}: {hauteurSousPlafond}, {t('result.l')}: {longueur}, {t('result.largeur')}: {largeur}</Text></GridItem>
                                            <GridItem w='100%' h='10' ><Text>{t('result.temperature')} : </Text></GridItem>
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
                                        onClick={dataExportation}
                                    >
                                        {t('result.btn-exporter')}
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
                                            width: 750,
                                            height: 300,
                                            title: `${t('result.titre-courbe')}`,
                                            xaxis: { title: `${t('result.heure')}`, tick0: 0, tickvals: hours },
                                            yaxis: { title: `${t('result.temp')}` },
                                        }}
                                        config={{ responsive: true }} />
                                </GridItem>
                            </Grid>
                        </Card>
                </Box >
            </TintProvider>
        </>
    )
}

export default Index
