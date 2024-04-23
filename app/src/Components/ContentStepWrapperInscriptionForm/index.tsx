import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';

const _this = 'STEP-0';
export const InformForm = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      className={'fade-out'}
      width={'100%'}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={10}>
          <FormLabel>Matériaux du toit</FormLabel>
          <Select
            value={steps[_this].payload['materiaux_toit']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    materiaux_toit: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Toiture en tuiles romane 1 & 2">Toitures en tuiles romane 1 & 2</option>
            <option value="Toiture en tôles d'aluminium">Toiture en tôles d'aluminium</option>
            <option value="Toiture en dalle de beton">Toiture en dalle de béton</option>
            <option value="Toiture en paille">Toitures en paille</option>
            <option value="Dalle en Hourdis">Dalle en Hourdis</option>
            <option value="Couche d'air intra-plafond">Couche d'air intra-plafond</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Matériaux du mur</FormLabel>
          <Select
            value={steps[_this].payload['materiaux_mur']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    materiaux_mur: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Parpaing standard">Parpaing standard</option>
            <option value="Briques de terre cuites avec vide">Briques de terre cuites avec vide</option>
            <option value="Briques de terre cuites pleines">Briques de terre cuites pleines</option>
            <option value="Briques de terre compressées">Briques de terre compressées</option>
            <option value="Briques de terre stabilisées">Briques de terre stabilisées</option>
          </Select>
        </FormControl>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={10}>
          <FormLabel>Matériaux du sol </FormLabel>
          <Select
            value={steps[_this].payload['materiaux_sol']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    materiaux_sol: e.target.value,
                  },
                },
              })
            }
          >
            <option value="Dalle de beton + carreaux">Dalle de béton + carreaux</option>
            <option value="Sol cimente simple">Sol cimenté simple</option>
            <option value="Sol en terre simple">Sol en terre simple</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Nombres de pièces</FormLabel>
          <Input
            type={'number'}
            value={steps[_this].payload['nombre_pieces']}
            onChange={(e) =>
              setStep({
                ...steps,
                [_this]: {
                  ...steps[_this],
                  payload: {
                    ...steps[_this].payload,
                    nombre_pieces: e.target.value,
                  },
                },
              })
            }
            placeholder="Entrer le nombre de pièces"
          />
        </FormControl>
      </Box>

      <Box
        mt={20}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={() => {
            setActiveStep('STEP-1');
            setStep({
              ...steps,
              'STEP-1': {
                ...steps['STEP-1'],
                activeSubstep: "STEP-1-0",
                payload: (() => {
                  let result: any = {};
                  for (
                    let index = 0;
                    index < parseInt(steps[_this].payload.nombre_pieces);
                    index++
                  ) {
                    result['STEP-1-' + index] = {};
                  }
                  return result;
                })(),
              },
            });
          }}
          _hover={{
            backgroundColor: settings.globalColors.primary.main,
            opacity: 0.5,
          }}
          backgroundColor={settings.globalColors.primary.main}
          size="lg"
          color={settings.globalColors.pureWhite.main}
          width={'50%'}
          height={'10'}
          rounded={'40'}
          fontWeight={400}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          background="linear-gradient(to right, #09AFAF, #09AFAF)"
        >
          Suivant
        </Button>
      </Box>
      {JSON.stringify(steps)}
    </Box>
  );
};
