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
            <option value="Dalle">Dalle</option>
            <option value="Contre plaquet">Contre plaquet</option>
            <option value="Faux plafond en platre">
              Faux plafond en platre
            </option>
            <option value="Bambou">Bambou</option>
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
            <option value="Parpaing ordinaire">Parpaing ordinaire</option>
            <option value="Parpaing haute performance">
              Parpaing haute performance
            </option>
            <option value="Briques BTC bloc de pleins">
              Briques BTC bloc de pleins
            </option>
            <option value="Briques BTC bloc autocolants">
              Briques BTC bloc autocolants
            </option>
            <option value="Roches taillées">Roches taillées</option>
            <option value="Bois">Bois</option>
            <option value="Béton armé">Béton armé</option>
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
            <option value="Mortier">Mortier</option>
            <option value="Carreaux">Carreaux</option>
            <option value="Parquets en bois">Parquets en bois</option>
            <option value="Lamelles en roches">Lamelles en roches</option>
            <option value="Marbres">Marbres</option>
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
