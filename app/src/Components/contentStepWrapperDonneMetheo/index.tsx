import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import data from '../../Helper/data/tempExt/dataTempExt.json';
import dataPhi from '../../Helper/data/phi/dataPhi.json' ;

const _this = 'STEP-2';
export const DonneMetheo = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();

  // CONSTANTES DU CALCUL
  const Rsiw = 0.13;
  const Tsky = 253;
  const Rso = 0.04;
  const sigma = 5.6703e-8;
  const Rsir=0.1;
  const Rsig=0.17;

  var awalle=0.006;
  var awind=0.008;
  var adoor=0.007;
  var aroof=0.006;

  // const eCEB=0.14;
  // const lCEB=1;

  var eair=0.0032;
  var lair=0.024;

  // var Lw=5; var lw=4; var hw=3;
  // var Lf=1.5; var lf=0.9; var Ld=2; var ld=0.9;
  // var Swind=(Lf*lf); var Sdoor=Ld*ld;
  // var Swalle=(Lw*hw)-Swind-Sdoor;
  // var Swall=(2*lw*hw)+(Lw*hw);
  // var Sfloor=Lw*lw;
  // var Sroof=Sfloor;

  const calculateU = (materiau : string) => {
    let e = 0; let  l = 0; let u = 0 ;

    switch (materiau) {
      case "Bois":
        e = 0.0345 ; l = 0.165 ;
        u=1/(Rsiw+Rso+(e/l));
        break;

      case "Verre":
        e = 0.06 ; l = 0.9 ;
        u=1/(Rsiw+Rso+(e/l));
        break ;

      case "Verre double vitrage":
        e = 0.06 ; l = 0.9 ;
        u=1/(Rsiw+Rso+(2*e/l)+(eair/lair));
        break ;

      case "Aluminium":
        e = 0.072 ; l = 160 ;
        u=1/(Rsiw+Rso+(e/l));
        break ;

      default:
        break;
    }
    return u ;
  }

  const calculateSurface = (L : number, l: number) => {
    return L*l
  }

  const calculate = () => {

    const dataBuilding = steps['STEP-0'].payload ;
    const dataRoomMaterial = steps['STEP-1'].payload['STEP-1-0'] ;
    const  meteoData = steps['STEP-2'].payload;

    // var eFT=0.009; var lFT=5.077;
    var eS=0.15; var lS=1.75;
    var eRT2=0.008; var lRT2=1.58; var ep=10.8/1000; var lp=0.11; var eattic=0.9;

    const h = Number(dataRoomMaterial.hauteur_sous_plafond)
    const L = Number(dataRoomMaterial.longueur)
    const l = Number(dataRoomMaterial.largeur)

    var Sfloor= calculateSurface(L,l);
    var Sroof=Sfloor;
    var Swall= calculateSurface(l, h) * 2 + calculateSurface(L, h);
    var Swalle = calculateSurface(L, h) ;

    const openings : any[] = [];
    Object.keys(dataRoomMaterial).map((key) =>
      key.indexOf("ouverture-") !== -1 && openings.push(dataRoomMaterial[key])
    );

    var udoor = 0 ;
    var uwind = 0 ;
    var Sdoor = 0 ; var Swind = 0 ;

    for (let i = 0; i < openings.length; i++) {
      const opening = openings[i];
      if (opening.type_ouverture === "Fenetre") {
        uwind = calculateU(opening.materiau) ;
        Swind = calculateSurface(Number(opening.largeur), Number(opening.hauteur))
        Swalle -= Swind
      }
      else {
        udoor = calculateU(opening.materiau) ;
        Sdoor = calculateSurface(Number(opening.largeur), Number(opening.hauteur))
        Swalle -= Sdoor
      }
    }

    const floorMaterial = dataBuilding.materiaux_sol ;
    const wallMaterial = dataBuilding.materiaux_mur
    const roofMaterial = dataBuilding.materiaux_toit

    var eF = 0 ; var lF = 0 ;
    var eR = 0 ; var lR = 0 ;
    var eWall = 0 ; var lWall = 0 ;

    switch (floorMaterial) {
      case "Dalle de beton + carreaux":
        eF = 0.16; lF = 1.3 ;
        break;

      case "Sol cimente simple":
        eF = 0.007; lF = 1.215 ;
        break;

      case "Sol en terre simple":
        eF = 0.15; lF = 0.321 ;
        break ;

      default:
        break;
    }

    switch (wallMaterial) {
      case "Parpaing standard":
        eWall = 0.15; lWall = 0.9 ;
        break;

      case "Briques de terre cuites avec vide":
        eWall = 0.14; lWall = 0.25 ;
        break;

      case "Briques de terre cuites pleines":
        eWall = 0.14; lWall = 1.31 ;
        break ;

      case "Briques de terre compressées":
        eWall = 0.14; lWall = 1 ;
        break;

      case "Briques de terre stabilisées":
        eWall = 0.14; lWall = 1.05 ;
        break;

      default:
        break;
    }

    switch (roofMaterial) {
      case "Toiture en tuiles romane 1 & 2":
        eR = 0.08; lR = 1.58 ;
        break;

      case "Toiture en tôles d'aluminium":
        eR = 0.15; lR = 221 ;
        break;

      case "Toiture en dalle de beton":
        eR = 0.2; lR = 1.3 ;
        break ;

      case "Toiture en paille":
        eR = 0.37; lR = 0.0625 ;
        break;

      case "Dalle en Hourdis":
        eR = 0.37; lR = 1.7 ;
        break;

      case "Couche d'air intra-plafond":
        eR = 0.9; lR = 0.024 ;
        break;

      default:
        break;
    }


    var uenv=1/(Rsiw+Rso+(eWall/lWall));
    // var uwind=1/(Rsiw+Rso+(2*eglass/lglass)+(eair/lair));
    // var udoor=1/(Rsiw+Rso+(edoor/ldoor));
    var ufloor=1/(Rsig+(eF/lF)+(eS/lS));
    var uroof=1/(Rsir+Rso+(eR/lR)+(ep/lp)+(eattic/lair));



    // Récupération des données de température extérieur et de flux de chaleur

    const town : string = meteoData.Zone_geographique ;
    const dateBrute = meteoData.date ;
    const date = dateBrute.split('-') ;

    let dataBrute : any[] = [] ;
    let dataPhiBrute : any[] = [] ;

    switch (town) {
      case "Bafoussam":
        dataBrute = data.Bafoussam ;
        dataPhiBrute = dataPhi.Bafoussam ;
        break;

      case "Douala":
        dataBrute = data.Douala ;
        dataPhiBrute = dataPhi.Douala ;
        break;

      case "Garoua":
        dataBrute = data.Garoua ;
        dataPhiBrute = dataPhi.Garoua ;
        break;

      case "Maroua":
        dataBrute = data.Maroua ;
        dataPhiBrute = dataPhi.Maroua ;
        break;

      case "Yaounde":
        dataBrute = data.Yaounde ;
        dataPhiBrute = dataPhi.Yaounde ;
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
      const  timestampHour = timestampFormattedDate.split('-') ;
      return (
        timestampHour[1] + "-" + timestampHour[2] === date[1] + "-" + date[2]
      );
    });

    var Text = temperaturesForDay.map(obj => obj.temperature);
    var phi = phiValuesForDay.map(obj => obj.phi);

    var Tint = [] ;
    var Tvwalle = [] ;
    var Tvwind = [] ;
    var Tvdoor = [] ;
    var Tvroof = [] ;
    var phiwind = [] ;
    var phidoor = [] ;
    var phiwalle = [] ;
    var phiroof = [] ;
    var Tv = [] ;
    var phiwall = [] ;
    var phifloor = [] ;
    var phitotal = [] ;
    var T1 = [] ;
    var T2 = [] ;
    var T3 = [] ;
    var T4 : any ;
    var T5 = [] ;

    for (var k = 0; k < 24; k++) {

      Tvwalle[k]=(Text[k]+273)+(awalle*phi[k]*Rso);
      Tvdoor[k]=(Text[k]+273)+(adoor*phi[k]*Rso);
      Tvwind[k]=(Text[k]+273)+(awind*phi[k]*Rso);
      Tvroof[k]=(Text[k]+273)+(aroof*phi[k]*Rso);
      phiwind[k]=uwind*Swind*Tvwind[k];
      phidoor[k]=udoor*Sdoor*Tvdoor[k];
      phiwalle[k]=uenv*Swalle*Tvwalle[k];
      phiroof[k]=uroof*Sroof*Tvroof[k];

      Tv[k]=(Text[k]+273);
      phiwall[k]=uenv*Swall*Tv[k];
      phifloor[k]=ufloor*Sfloor*Tv[k];
      T1[k]=(awind*phiwind[k])+(awalle*phiwalle[k])+(adoor*phidoor[k])+(aroof*phiroof[k]);
      T2[k]=awind*((Tvwind[k] ^4)-(Tsky^4))+adoor*((Tvdoor[k] ^4)-(Tsky^4))+aroof*((Tvroof[k] ^4)-(Tsky^4))+awalle*((Tvwalle[k] ^4)-(Tsky^4));
      T3[k]=sigma*T2[k];
      phitotal[k]=phi[k]*((awalle*Swalle)+(awind*Swind)+(adoor*Sdoor)+(aroof*Sroof));
      T4=uenv*(Swall+Swalle)+(uroof*Sroof)+(ufloor*Sfloor)+(uwind*Swind)+(udoor*Sdoor);
      T5[k]=(phiwall[k]+phiwalle[k]+phiwind[k]+phidoor[k]+phiroof[k]+phifloor[k]);
      Tint[k]=((T5[k]+T1[k]+T3[k]-phitotal[k])/T4)-273;
    }

  }

  // const { setActiveStep } = useStepContext();
  return (
    <Container>
      <Box className={'fade-out'}>
        <FormControl mb={4} width={'100%'} mt={25}>
          <FormLabel>Sélectionnez une Zone geographique :</FormLabel>
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
            <option value="">Selectinner une Zone geographique</option>
            <option value="Douala">Littoral</option>
            <option value="Yaounde">Centre</option>
            <option value="Maroua">Extreme Nord</option>
            <option value="Garoua">Nord</option>
            <option value="Bafoussam">Ouest</option>
          </Select>
        </FormControl>

        <FormControl mb={4} width={'100%'}>
          <FormLabel>Date :</FormLabel>
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
            Precedent
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
            Calculer
          </Button>
        </Stack>
        {JSON.stringify(steps)}

      </Box>
    </Container>
  );
};
