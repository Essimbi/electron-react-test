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

const _this = 'STEP-2';
export const DonneMetheo = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();

  const calculate = () => {
    const dataBuilding = steps['STEP-0'].payload ;
    const dataRoomMaterial = steps['STEP-1'].payload['STEP-1-0'] ;
    const  meteoData = steps['STEP-2'].payload;

    // CONSTANTES DU CALCUL
    const Rsiw = 0.13;
    const Tsky = 253;
    const Rso = 0.04;
    const sigma = 5.6703e-8;
    const Rsir=0.1;
    const Rsig=0.17;

    const eCEB=0.14;
    const lCEB=1;

    var eglass=0.006;
    var lglass=0.9;
    var eair=0.0032;
    var lair=0.024;
    var edoor=0.0345;
    var ldoor=0.165;
    
    var eFT=0.009; var lFT=5.077;
    var eS=0.15; var lS=1.75;
    var eRT2=0.008; var lRT2=1.58; var ep=10.8/1000; var lp=0.11; var eattic=0.9;

    var uenv=1/(Rsiw+Rso+(eCEB/lCEB));
    var uwind=1/(Rsiw+Rso+(2*eglass/lglass)+(eair/lair));
    var udoor=1/(Rsiw+Rso+(edoor/ldoor));
    var ufloor=1/(Rsig+(eFT/lFT)+(eS/lS));
    var uroof=1/(Rsir+Rso+(eRT2/lRT2)+(ep/lp)+(eattic/lair));

    var Lw=5; var lw=4; var hw=3;
    var Lf=1.5; var lf=0.9; var Ld=2; var ld=0.9;
    var Swind=(Lf*lf); var Sdoor=Ld*ld;
    var Swalle=(Lw*hw)-Swind-Sdoor;
    var Swall=(2*lw*hw)+(Lw*hw);
    var Sfloor=Lw*lw;
    var Sroof=Sfloor;

    var Text=[24.820,
      24.593,
      24.330,
      25.019,
      25.126,
      25.252,
      25.287,
      25.761,
      26.259,
      27.340,
      27.659,
      28.708,
      27.822,
      26.924,
      26.216,
      25.980,
      25.891,
      26.077,
      25.931,
      25.505,
      25.254,
      24.551,
      24.640,
      24.749
    ];

    var awalle=0.006;
    var awind=0.008;
    var adoor=0.007;
    var aroof=0.006;

    var phi=[0,
      0,
      0,
      0,
      0,
      2.5242,
      15.7738,
      57.8489,
      161.9427,
      175.3972,
      283.2687,
      349.6502,
      242.2585,
      187.4573,
      41.9429,
      82.6173,
      99.2815,
      15.1657,
      0,
      0,
      0,
      0,
      0,
      0
    ];

    var Tint = [] ;
    var Tvwalle = [] ; //virtual wall temperature
    var Tvwind = [] ;
    var Tvdoor = [] ;  //virtual door temperature
    var Tvroof = [] ;//virtual roof temperature
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

    for (var k = 0; k < 23; k++) {

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

    console.log(Tint) ;

    // Définition des variables de l'échangeur de chaleur (matériaux du bâtiment)


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
