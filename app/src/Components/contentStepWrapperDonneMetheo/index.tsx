import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTintContext } from '../../contexts/GraphContext';
import dataPhi from '../../Helper/data/phi/dataPhi.json';
import data from '../../Helper/data/tempExt/dataTempExt.json';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { useTranslation } from "react-i18next";
import * as React from 'react'

const _this = 'STEP-2';
export const DonneMetheo = () => {

  const [showAlert, setShowAlert] = useState(false);

  const { updateTintData } = useTintContext();
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();
  const { t } = useTranslation();

  // CONSTANTES DU CALCUL
  const Rsiw = 0.13;
  const Tsky = 253;
  const Rso = 0.04;
  const sigma = 5.6703e-8;
  const Rsir = 0.1;
  const Rsig = 0.17;

  var eair = 0.0032;
  var lair = 0.024;

  const calculateU = (materiau: string) => {
    let e = 0; let l = 0; let u = 0;

    switch (materiau) {
      case "Bois":
        e = 0.0345; l = 0.165;
        u = 1 / (Rsiw + Rso + (e / l));
        break;

      case "Verre":
        e = 0.06; l = 0.9;
        u = 1 / (Rsiw + Rso + (e / l));
        break;

      case "Verre double vitrage":
        e = 0.06; l = 0.9;
        u = 1 / (Rsiw + Rso + (2 * e / l) + (eair / lair));
        break;

      case "Aluminium":
        e = 0.072; l = 160;
        u = 1 / (Rsiw + Rso + (e / l));
        break;

      default:
        break;
    }
    return u;
  }

  const calculateSurface = (L: number, l: number) => {
    return L * l
  }

  const setAlphaAndEpsilon = (coating: string) => {
    let alpha = 0; let epsilon = 0;
    switch (coating) {
      case 'Bloc de terre comprimée (ou compressée)':
        alpha = 0.6 / 100;
        epsilon = 0.4 / 100;
        break;
      case 'Bloc de terre stabilisée':
        alpha = 0.6 / 100;
        epsilon = 0.4 / 100;
        break;
      case 'Peinture noire':
        alpha = 1 / 100;
        epsilon = 0 ;
        break;
      case 'Peinture blanche':
        alpha = 0.28 / 100;
        epsilon = 0.72 / 100;
        break;
      case 'Peinture bleue':
        alpha = 0.9 / 100;
        epsilon = 0.1 / 100;
        break;
      case 'Peinture grise métallisée (métaux : fer,aluminium…)':
        alpha = 0.89 / 100;
        epsilon = 0.11 / 100;
        break;
      case 'Verre':
        alpha = 0.1 / 100;
        epsilon = 0.9 / 100;
        break;
      case 'Peinture verte':
        alpha = 0.8 / 100;
        epsilon = 0.2 / 100;
        break;
    }
    return {
      "alpha": alpha,
      "epsilon": epsilon
    } ;
  }


  const [error, setError] = React.useState('')
  const isError = error === ''

  const calculate = () => {

    if (steps[_this].payload['Zone_geographique'] === undefined ||
      steps[_this].payload['date'] === undefined)
    {
      setError('Ce champ est required ✍️');
    }
    else  {
      setShowAlert(true)
      const dataBuilding = steps['STEP-0'].payload;
      const dataRoomMaterial = steps['STEP-1'].payload['STEP-1-0'];
      const meteoData = steps['STEP-2'].payload;

      // var eFT=0.009; var lFT=5.077;
      var eS = 0.15; var lS = 1.75;
      var eRT2 = 0.008; var lRT2 = 1.58; var ep = 10.8 / 1000; var lp = 0.11; var eattic = 0.9;

      const h = Number(dataRoomMaterial.hauteur_sous_plafond)
      const L = Number(dataRoomMaterial.longueur)
      const l = Number(dataRoomMaterial.largeur)

      var Sfloor = calculateSurface(L, l);
      var Sroof = Sfloor;
      var Swall = calculateSurface(l, h) * 2 + calculateSurface(L, h);
      var Swalle = calculateSurface(L, h);

      const openings: any[] = [];
      Object.keys(dataRoomMaterial).map((key) =>
        key.indexOf("ouverture-") !== -1 && openings.push(dataRoomMaterial[key])
      );

      var udoor = 0;
      var uwind = 0;
      var Sdoor = 0; var Swind = 0;

      var awind = 0 ; var adoor = 0 ;
      var epsilonDoor = 0; var epsilonWind = 0;

      for (let i = 0; i < openings.length; i++) {
        const opening = openings[i];
        if (opening.type_ouverture === "Fenetre") {
          uwind = calculateU(opening.materiau);
          Swind = calculateSurface(Number(opening.largeur), Number(opening.hauteur))
          Swalle -= Swind
          awind = setAlphaAndEpsilon(opening.couleur_ouverture).alpha;
          epsilonWind = setAlphaAndEpsilon(opening.couleur_ouverture).epsilon;
        }
        else {
          udoor = calculateU(opening.materiau);
          Sdoor = calculateSurface(Number(opening.largeur), Number(opening.hauteur))
          Swalle -= Sdoor
          adoor = setAlphaAndEpsilon(opening.couleur_ouverture).alpha;
          epsilonDoor = setAlphaAndEpsilon(opening.couleur_ouverture).epsilon;
        }
      }

      const floorMaterial = dataBuilding.materiaux_sol;
      const wallMaterial = dataBuilding.materiaux_mur
      const roofMaterial = dataBuilding.materiaux_toit

      var eF = 0; var lF = 0;
      var eR = 0; var lR = 0;
      var eWall = 0; var lWall = 0;

      switch (floorMaterial) {
        case "Dalle de beton + carreaux":
          eF = 0.16; lF = 1.3;
          break;

        case "Sol cimente simple":
          eF = 0.007; lF = 1.215;
          break;

        case "Sol en terre simple":
          eF = 0.15; lF = 0.321;
          break;

        default:
          break;
      }

      switch (wallMaterial) {
        case "Parpaing standard":
          eWall = 0.15; lWall = 0.9;
          break;

        case "Briques de terre cuites avec vide":
          eWall = 0.14; lWall = 0.25;
          break;

        case "Briques de terre cuites pleines":
          eWall = 0.14; lWall = 1.31;
          break;

        case "Briques de terre compressées":
          eWall = 0.14; lWall = 1;
          break;

        case "Briques de terre stabilisées":
          eWall = 0.14; lWall = 1.05;
          break;

        default:
          break;
      }

      switch (roofMaterial) {
        case "Toiture en tuiles romane 1 & 2":
          eR = 0.08; lR = 1.58;
          break;

        case "Toiture en tôles d'aluminium":
          eR = 0.15; lR = 221;
          break;

        case "Toiture en dalle de beton":
          eR = 0.2; lR = 1.3;
          break;

        case "Toiture en paille":
          eR = 0.37; lR = 0.0625;
          break;

        case "Dalle en Hourdis":
          eR = 0.37; lR = 1.7;
          break;

        case "Couche d'air intra-plafond":
          eR = 0.9; lR = 0.024;
          break;

        default:
          break;
      }

      const revetement_exterieur_mur = dataRoomMaterial.revetement_exterieur_mur ;
      const revetement_interieur_mur = dataRoomMaterial.revetement_interieur_mur ;

      var awalle = setAlphaAndEpsilon(revetement_exterieur_mur).alpha;
      var epsilonWalle = setAlphaAndEpsilon(revetement_exterieur_mur).epsilon;

      // var adoor = 0.007;
      var aroof = setAlphaAndEpsilon(revetement_interieur_mur).alpha;
      var epsilonRoof = setAlphaAndEpsilon(revetement_interieur_mur).epsilon;



      var uenv = 1 / (Rsiw + Rso + (eWall / lWall));
      // var uwind=1/(Rsiw+Rso+(2*eglass/lglass)+(eair/lair));
      // var udoor=1/(Rsiw+Rso+(edoor/ldoor));
      var ufloor = 1 / (Rsig + (eF / lF) + (eS / lS));
      var uroof = 1 / (Rsir + Rso + (eR / lR) + (ep / lp) + (eattic / lair));



      // Récupération des données de température extérieur et de flux de chaleur

      const town: string = meteoData.Zone_geographique;
      const dateBrute = meteoData.date;
      const date = dateBrute.split('-');

      let dataBrute: any[] = [];
      let dataPhiBrute: any[] = [];

      switch (town) {
        case "Bafoussam":
          dataBrute = data.Bafoussam;
          dataPhiBrute = dataPhi.Bafoussam;
          break;

        case "Douala":
          dataBrute = data.Douala;
          dataPhiBrute = dataPhi.Douala;
          break;

        case "Garoua":
          dataBrute = data.Garoua;
          dataPhiBrute = dataPhi.Garoua;
          break;

        case "Maroua":
          dataBrute = data.Maroua;
          dataPhiBrute = dataPhi.Maroua;
          break;

        case "Yaounde":
          dataBrute = data.Yaounde;
          dataPhiBrute = dataPhi.Yaounde;
          break;
      }

      const temperaturesForDay = dataBrute.filter(obj => {
        return (
          obj.month + "-" + obj.day === date[1] + "-" + date[2]
        );
      });

      const phiValuesForDay = dataPhiBrute.filter(obj => {
        const timestampRange = obj.timestamp_range.split("/")[1];
        const timestampDate = new Date(timestampRange);
        const timestampFormattedDate = timestampDate.toISOString().split("T")[0];
        const timestampHour = timestampFormattedDate.split('-');
        return (
          timestampHour[1] + "-" + timestampHour[2] === date[1] + "-" + date[2]
        );
      });

      var Text = temperaturesForDay.map(obj => obj.temperature);
      var phi = phiValuesForDay.map(obj => obj.phi);

      var Tint = [];
      var Tvwalle = [];
      var Tvwind = [];
      var Tvdoor = [];
      var Tvroof = [];
      var phiwind = [];
      var phidoor = [];
      var phiwalle = [];
      var phiroof = [];
      var Tv = [];
      var phiwall = [];
      var phifloor = [];
      var phitotal = [];
      var T1 = [];
      var T2 = [];
      var T3 = [];
      var T4: any;
      var T5 = [];

      for (var k = 0; k < 24; k++) {

        Tvwalle[k] = (Text[k] + 273) + (awalle * phi[k] * Rso);
        Tvdoor[k] = (Text[k] + 273) + (adoor * phi[k] * Rso);
        Tvwind[k] = (Text[k] + 273) + (awind * phi[k] * Rso);
        Tvroof[k] = (Text[k] + 273) + (aroof * phi[k] * Rso);
        phiwind[k] = uwind * Swind * Tvwind[k];
        phidoor[k] = udoor * Sdoor * Tvdoor[k];
        phiwalle[k] = uenv * Swalle * Tvwalle[k];
        phiroof[k] = uroof * Sroof * Tvroof[k];

        Tv[k] = (Text[k] + 273);
        phiwall[k] = uenv * Swall * Tv[k];
        phifloor[k] = ufloor * Sfloor * Tv[k];
        T1[k] = (awind * phiwind[k]) + (awalle * phiwalle[k]) + (adoor * phidoor[k]) + (aroof * phiroof[k]);
        T2[k] = epsilonWind * ((Tvwind[k] ^ 4) - (Tsky ^ 4)) + epsilonDoor * ((Tvdoor[k] ^ 4) - (Tsky ^ 4)) + epsilonRoof * ((Tvroof[k] ^ 4) - (Tsky ^ 4)) + epsilonWalle * ((Tvwalle[k] ^ 4) - (Tsky ^ 4));
        T3[k] = sigma * T2[k];
        phitotal[k] = phi[k] * ((awalle * Swalle) + (awind * Swind) + (adoor * Sdoor) + (aroof * Sroof));
        T4 = uenv * (Swall + Swalle) + (uroof * Sroof) + (ufloor * Sfloor) + (uwind * Swind) + (udoor * Sdoor);
        T5[k] = (phiwall[k] + phiwalle[k] + phiwind[k] + phidoor[k] + phiroof[k] + phifloor[k]);
        Tint[k] = ((T5[k] + T1[k] + T3[k] - phitotal[k]) / T4) - 273;
      }

      // Définition des variables de l'échangeur de chaleur (matériaux du bâtiment)

      //setActiveStep("STEP-3")
      updateTintData(Tint);

    }

  }

  // const { setActiveStep } = useStepContext();
  return (
    <Container>
      <Box className={'fade-out'} marginTop={8}>
        {showAlert && (
          <Alert status="success" marginBottom={4}>
            <AlertIcon />
            {t('steper-3.alert')}
          </Alert>
        )}
        <FormControl mb={4} width={'100%'} mt={25} isInvalid={isError ? false : !steps[_this].payload['Zone_geographique']}>
          <FormLabel>{t('steper-3.zone')}<span style={{color:'red'}}>*</span> :</FormLabel>
          <Select
            value={steps[_this].payload['Zone_geographique']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    Zone_geographique: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Douala" defaultChecked>{t('steper-3.section-zone.val-1')}</option>
            <option value="Yaounde">{t('steper-3.section-zone.val-2')}</option>
            <option value="Maroua">{t('steper-3.section-zone.val-3')}</option>
            <option value="Garoua">{t('steper-3.section-zone.val-4')}</option>
            <option value="Bafoussam">{t('steper-3.section-zone.val-5')}</option>
          </Select>
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>{error}</FormErrorMessage>
            )
          }
        </FormControl>

        <FormControl mb={4} width={'100%'} isInvalid={isError ? false : !steps[_this].payload['date']}>
          <FormLabel>Date<span style={{color:'red'}}>*</span> :</FormLabel>
          <Input
            type={'date'}
            value={steps[_this].payload['date']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    date: e.target.value,
                  },
                },
              })
            }
          />
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>{error}</FormErrorMessage>
            )
          }
        </FormControl>

        <Stack direction="row" spacing={2} align="center">
          <Button
            onClick={() => setActiveStep('STEP-1')}
            _hover={{
              backgroundColor: settings.globalColors.pureWhite.main,
              opacity: 0.5,
            }}
            mt={4}
            color={settings.globalColors.primary.main}
            backgroundColor={'white'}
            border={'1px solid teal'}
            width={'100%'}
            borderRadius={'50px'}
            size="md"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            fontWeight={400}
          >
            {t('btn-precedent')}
          </Button>

          <Button
            _hover={{
              backgroundColor: settings.globalColors.primary.main,
              opacity: 0.5,
            }}
            mt={4}
            colorScheme="teal"
            width={'100%'}
            borderRadius={'50px'}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            background="linear-gradient(to right, #09AFAF, #09AFAF)"
            fontWeight={400}
            size="md"
            onClick={calculate}
          >
            {t('steper-3.calculer')}
          </Button>
        </Stack>
        {/* {JSON.stringify(steps)} */}

      </Box>
    </Container>
  );
};
