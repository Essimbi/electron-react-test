import {
  Alert,
    AlertIcon,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ChooseLang from '../ChooseLang';
import { useModelContext } from '../../contexts/ModelPredefiniContext';
import { SingleModel } from '../../Layouts/modelpredefinisImg/modelImg';
import { DonneGeographique } from './ContentForAddZoneGeographique';
import { useTranslation } from "react-i18next";
import { useSettingsContext } from '../../Hooks/useSettings';
import { useTintContext } from '../../contexts/GraphContext';
import { useFormDataContext } from '../../contexts/FormDataModelContext';
import { useStepContext } from '../../Hooks/useStep';
import './style.css';
import models from '../../Helper/data/modelPredefini/dataset.json'
import dataPhi from '../../Helper/data/phi/dataPhi.json'
import data from '../../Helper/data/tempExt/dataTempExt.json'
import acacia from './modelPredefinis/T3/acacia.png'
import cassia from './modelPredefinis/T3/cassia.png'
import bissap from './modelPredefinis/T4/bissap.png'

export const ModelPrefinis = () => {
    const [currentData, setCurrentData] = useState<SingleModel>();
    const [showCarousel, setShowCarousel] = useState<boolean>(false);
    const [ShowDonnee, setShowDonnee] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState(false);
    const { updateTintData } = useTintContext();
    const { t } = useTranslation();
    const { settings } = useSettingsContext();
    const [error, setError] = React.useState('')
    const isError = error === ''

    interface ModelPredefini {
      [key: string]: any;
    }

    const modelsPredefinis: ModelPredefini = models ;

    const handleClick = (name: string) => {
      // console.log(models[key])
      for (let key in models) {
        if (modelsPredefinis[key].name === name) {
          switch (modelsPredefinis[key].name) {
            case "ACACIA":
              modelsPredefinis[key].img = acacia ;
              break
            case "T3 DOUBLE (CASSIA)":
              modelsPredefinis[key].img = cassia ;
              break
            case "BISSAP":
              modelsPredefinis[key].img = bissap ;
              break
          }
          setCurrentData(modelsPredefinis[key]);
          // console.log(modelsPredefinis[key].name)
          break;
        }
      }
      setShowCarousel(true);
    };
    const { updateModelData } = useModelContext();
    const { updateFormData } = useFormDataContext() ;
    const { setActiveStep, steps, setStep } = useStepContext();

    const [formData, setFormData] = useState({
      zone_geographique: undefined,
      date: undefined,
      piece: undefined
    });

    const handleSelectChange = (event: any) => {
      setFormData({ ...formData, zone_geographique: event.target.value });
    }

    const handleInputChange = (event: any) => {
      setFormData({ ...formData, date: event.target.value });
    }

    const handlePieceChange = (event: any) => {
      setFormData({ ...formData, piece: event.target.value });
    }

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

    const setAlphaAndEpsilon = (coating: string | undefined) => {
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

    const calculate = () => {
      if (formData.zone_geographique === undefined || formData.date === undefined)
      {
        setError('Ce champ est required ✍️');
      }
      else {
        const dataBuilding : any  | undefined = currentData?.info.piece.ouvertures;
        const dataRoomMaterial = currentData?.info.piece;

        // var eFT=0.009; var lFT=5.077;
        var eS = 0.15; var lS = 1.75;
        var eRT2 = 0.008; var lRT2 = 1.58; var ep = 10.8 / 1000; var lp = 0.11; var eattic = 0.9;

        const h = Number(dataRoomMaterial?.dimension.hauteur)
        const L = Number(dataRoomMaterial?.dimension.longueur)
        const l = Number(dataRoomMaterial?.dimension.largeur)

        var Sfloor = calculateSurface(L, l);
        var Sroof = Sfloor;
        var Swall = calculateSurface(l, h) * 2 + calculateSurface(L, h);
        var Swalle = calculateSurface(L, h);

        const openings: any[] = Object.values(dataBuilding);
        // Object.keys(dataBuilding).map((key) =>
        //   key.indexOf("ouverture_") !== -1 && openings.push(dataRoomMaterial[key])
        // );

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

        const floorMaterial = currentData?.info.batiment.sol;
        const wallMaterial = currentData?.info.batiment.mur;
        const roofMaterial = currentData?.info.batiment.toit;

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

        const revetement_exterieur_mur = currentData?.info.piece.materiau.revet_ext ;
        const revetement_interieur_mur = currentData?.info.piece.materiau.revet_int ;

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
        const town: string = formData.zone_geographique;
        const dateBrute = formData.date;
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

        if(formData.piece === "Chambre 1" || formData.piece === "Chambre 2" || formData.piece === "Salle d'eau/Toillettes nom utilisée") {
          updateTintData(Tint);
          updateFormData(formData);
          updateModelData(currentData);
        }
        else if(formData.piece === "Salon" || formData.piece === "Cuisine") {
          let TintSalon = Tint.map(num => num + 3);
          updateTintData(TintSalon);
        }
        else if(formData.piece === "Salle d'eau/Toillettes utilisée"){
          let TintSdb = Tint.map(num => num - 3);
          updateTintData(TintSdb);
        }
        steps['STEP-2'].payload.Zone_geographique = formData.zone_geographique;
        steps['STEP-2'].payload.date = formData.date
        updateModelData(currentData);
        setShowAlert(true)

      }
    }

    return (
        <Box padding={5}>
            <Card
                height={{
                    base: '610px', // 0-48em
                    md: '605px', // 48em-80em,
                    xl: '735px', // 80em+
                }}
                width={{
                    base: '100%', // 0-30em
                    md: '100%', // 30em-48em
                    xl: '100%', // 48em-62em
                }}
                style={{ overflowX: 'scroll', overflowY: 'scroll' }}
            >
               <ChooseLang />
                {!showCarousel ? (
                    <SimpleGrid
                        spacing={3}
                        templateColumns="repeat(3, minmax(10px, 1fr))"
                        padding={12}
                        marginTop={10}
                        marginLeft={5}
                        className="card-grid"
                    >
                        {' '}

                        {Object.keys(modelsPredefinis).map( key => (

                          <div className="card" key={key}>
                            <Card bg={'#e6f7f7'} width={{ base: '100%', md: '85%', xl: '70%', }} onClick={() => handleClick(modelsPredefinis[key].name)} style={{ cursor: 'pointer' }} className="card__bg">
                              <CardHeader>
                                  <Heading size="sm" color={'#008080'}>
                                      {modelsPredefinis[key].name}
                                  </Heading>
                              </CardHeader>
                              <CardBody></CardBody>
                              <CardFooter>
                                  <SimpleGrid
                                      spacing={1}
                                      templateColumns="repeat(2, minmax(auto, 1fr))"
                                      padding={0}
                                  >
                                      <Text fontSize={40} fontWeight={'bolder'} color={'#008080'}>
                                          |
                                      </Text>
                                      <Text fontSize={40} fontWeight={'bolder'} color={'#008080'} marginLeft={5}>
                                        {modelsPredefinis[key].type}
                                      </Text>
                                  </SimpleGrid>
                              </CardFooter>
                            </Card>
                          </div>
                        ))}


                    </SimpleGrid>
                ) : !ShowDonnee ? (
                    <Box
                        className="cards"
                        padding={8}
                    >
                        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                          <Box className="col-md-6">
                            <h3>{t('models.infos_gene')}</h3>
                            <p><b>{t('models.nom')} : </b>{currentData?.name}</p>
                            <p><b>{t('models.type')} : </b>{currentData?.type}</p>
                            <br />
                            <hr />
                            <br />
                            <h3>{t('models.caracteristiques')}</h3>
                            <p><b>{t('models.toit')} : </b>{currentData?.info.batiment.toit}</p>
                            <p><b>{t('models.elevation')} : </b>{currentData?.info.batiment.mur}</p>
                            <p><b>{t('models.sol')} : </b>{currentData?.info.batiment.sol}</p>
                            <p><b>{t('models.nbr_piece')} : </b>{currentData?.info.batiment.nbr_piece}</p>
                            <br />
                            <hr />
                            <br />
                            <h3>{t('models.pieces')}</h3>
                            <p><b>{t('models.salon')}</b></p>
                            <p><b>{t('models.chambre')}</b></p>
                            <p><b>{t('models.cuisine')}</b></p>
                            <p><b>{t('models.toillettes')}</b></p>
                            <p>
                              <b>{t('models.info')}</b> :
                              <UnorderedList>
                                <ListItem>https://www.mipromalo.cm/index.php/fr/realisations</ListItem>
                                <ListItem>https://www.linkedin.com/company/eco-building-architecture</ListItem>
                              </UnorderedList>
                            </p>
                            <hr />
                            <br />
                            <h3><b>{t('models.plan')}</b></h3>
                            {/* <img src={img5} alt='Plan de distribution' /> */}
                            <img src={currentData?.img} alt='Plan de distribution' />
                            {/* <p>{currentData?.img}</p> */}

                          </Box>
                          <Box className="cards">
                            {showAlert && (
                              <Alert status="success" marginBottom={4}>
                                <AlertIcon />
                                {t('steper-3.alert')}
                              </Alert>
                            )}
                            <FormControl mb={4} isInvalid={isError ? false : !formData.piece}>
                              <FormLabel>{t('models.form.label_choix')}<span style={{color:'red'}}>*</span></FormLabel>
                              <Select onChange={handlePieceChange}>
                                <option>{t('common.select')}</option>
                                {currentData?.info.list_pieces.map((option: any, index: any) => (
                                  <option key={index} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </Select>
                              {isError ? (
                                <FormHelperText>
                                </FormHelperText>
                                ) : (
                                  <FormErrorMessage>{error}</FormErrorMessage>
                                )
                              }
                            </FormControl>

                            <hr />
                            <br />
                            <h4><b>{t('models.form.titre_dm')}</b></h4>

                            <FormControl mb={4} width={'100%'} mt={25} isInvalid={isError ? false : !formData.zone_geographique}>
                              <FormLabel>{t('steper-3.zone')}<span style={{color:'red'}}>*</span> :</FormLabel>
                              <Select onChange={handleSelectChange}>
                                <option>{t('common.select')}</option>
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

                            <FormControl mb={4} width={'100%'} isInvalid={isError ? false : !formData.date}>
                              <FormLabel>Date<span style={{color:'red'}}>*</span> :</FormLabel>
                              <Input type={'date'} onChange={handleInputChange}/>
                              {isError ? (
                                <FormHelperText>
                                </FormHelperText>
                                ) : (
                                  <FormErrorMessage>{error}</FormErrorMessage>
                                )
                              }
                            </FormControl>
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
                          </Box>
                        </SimpleGrid>
                        <Button colorScheme='gray' size='md' borderRadius={15} marginTop={5} onClick={() => setShowCarousel(false)}>{t('btn-precedent')}</Button>
                    </Box>
                ) : showCarousel ? (
                    <div> <DonneGeographique /></div>
                ) : (
                    <div>tyty</div>
                )}
            </Card>

        </Box>
    );
};
