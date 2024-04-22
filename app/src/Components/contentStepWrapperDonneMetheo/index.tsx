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

const _this = 'STEP-1';
export const DonneMetheo = () => {
  const { settings } = useSettingsContext();
  const { setActiveStep, steps, setStep } = useStepContext();

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
          >
            Calculer
          </Button>
        </Stack>
        {JSON.stringify(steps)}

      </Box>
    </Container>
  );
};
