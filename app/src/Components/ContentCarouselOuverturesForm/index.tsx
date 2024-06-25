import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  FormErrorMessage,
  FormHelperText,
  IconButton
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import { useStepContext } from '../../Hooks/useStep';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

const _this = 'STEP-1';
const _subThis = 'STEP-1-0';

export type openStateType = {
  type_ouverture: String | any;
  couleur_ouverture: String | any;
  materiau: String | any;
  hauteur: number | any;
  largeur: number | any;
};

const OuverturesForm = () => {
  const { steps, setStep } = useStepContext();
  const { t } = useTranslation();
  const [openState, setOpenState] = useState<openStateType>({
    type_ouverture: '',
    couleur_ouverture: '',
    materiau: '',
    hauteur: 0,
    largeur: 0,
  });
  const isError = true

  return (
    <Box
      display={'flex'}
      className={'fade-out'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Text fontSize="lg" ml={10} mt={20}>
        {t('steper-2-2.titre')}
      </Text>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={5} isInvalid={isError ? false : !openState['type_ouverture']}>
          <FormLabel>{t('steper-2-2.type-ouverture')}<span style={{color:'red'}}>*</span></FormLabel>
          <Select
            value={openState['type_ouverture']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, type_ouverture: e.target.value };
              });
            }}
            size={'sm'}
          >
            <option>{t('common.select')}</option>
            <option value="Porte">
            {t('steper-2-2.section-ouverture.val-1')}
            </option>
            <option value="Fenetre">{t('steper-2-2.section-ouverture.val-2')}</option>
          </Select>
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>Ce champ est required ✍️</FormErrorMessage>
            )
          }
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={5} isInvalid={isError ? false : !openState['materiau']}>
          <FormLabel>{t('steper-2-2.materiaux')}<span style={{color:'red'}}>*</span></FormLabel>
          <Select
            value={openState['materiau']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, materiau: e.target.value };
              });
            }}
            size={'sm'}
          >
            <option>{t('common.select')}</option>
            <option value="Verre">{t('steper-2-2.section-materiaux.val-1')} </option>
            <option value="Verre doule vitrage">{t('steper-2-2.section-materiaux.val-2')} </option>
            <option value="Bois">{t('steper-2-2.section-materiaux.val-3')}</option>
            <option value="Aluminium">{t('steper-2-2.section-materiaux.val-4')}</option>
          </Select>
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>Ce champ est required ✍️</FormErrorMessage>
            )
          }
        </FormControl>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={5} isInvalid={isError ? false : !openState['hauteur']}>
          <FormLabel>{t('steper-2-2.hauteur')} <span style={{color:'red'}}>*</span></FormLabel>
          <Input
            value={openState['hauteur']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, hauteur: e.target.value };
              });
            }}
            type={'number'}
            placeholder="En mètre"
            size={'sm'}
          />
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>Ce champ est required ✍️</FormErrorMessage>
            )
          }
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={5} isInvalid={isError ? false : !openState['largeur']}>
          <FormLabel>{t('steper-2-2.largeur')}<span style={{color:'red'}}>*</span></FormLabel>
          <Input
            value={openState['largeur']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, largeur: e.target.value };
              });
            }}
            type={'number'}
            placeholder="En mètre"
            size={'sm'}
          />
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>Ce champ est required ✍️</FormErrorMessage>
            )
          }
        </FormControl>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <FormControl width={'45%'} mt={5} ml={'4%'} isInvalid={isError ? false : !openState['hauteur']}>
          <FormLabel>{t('steper-2-2.couleur')} <span style={{color:'red'}}>*</span></FormLabel>
          <Select
            value={openState['couleur_ouverture']}
            onChange={(e) => {
              setOpenState((v) => {
                return { ...v, couleur_ouverture: e.target.value };
              });
            }}
            size={'sm'}
          >
            <option>{t('common.select')}</option>
            <option value="Peinture noire">
            {t('steper-2-2.couleur_text.val-1')}
            </option>
            <option value="Peinture blanche">{t('steper-2-2.couleur_text.val-2')}</option>
            <option value="Peinture bleue">{t('steper-2-2.couleur_text.val-3')}</option>
            <option value="Peinture grise métallisée (métaux : fer,aluminium…)">{t('steper-2-2.couleur_text.val-4')}</option>
            <option value="Verre">{t('steper-2-2.couleur_text.val-5')}</option>
            <option value="Peinture verte">{t('steper-2-2.couleur_text.val-6')}</option>
          </Select>
          {isError ? (
            <FormHelperText>
            </FormHelperText>
            ) : (
              <FormErrorMessage>Ce champ est required ✍️</FormErrorMessage>
            )
          }
        </FormControl>
      </Box>
      <Box
        mt={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button
          colorScheme="teal"
          variant="outline"
          size={'sm'}
          ml={'auto'}
          mr={10}
          onClick={() => {
            console.log(true)
            let concernedTab = [];
            Object.keys(steps[_this].payload[_subThis]).forEach((v) => {
              if (v.indexOf('ouverture-') !== -1) {
                console.log('here -', v);
                concernedTab.push(v);
              }
            });
            let length = concernedTab.length + 1;
            setStep({
              ...steps,
              [_this]: {
                ...steps[_this],
                payload: {
                  ...steps[_this].payload,
                  [_subThis]: {
                    ...steps[_this].payload[_subThis],
                    ['ouverture-' + length]: openState,
                  },
                },
              },
            });
            setOpenState({
              type_ouverture: undefined,
              couleur_ouverture: undefined,
              materiau: undefined,
              hauteur: 0,
              largeur: 0,
            });
          }}
        >
          Ajouter
        </Button>
      </Box>
      {/* {JSON.stringify(steps[_this].payload)} */}
      {/* {JSON.stringify(dataGraph)} */}
      <Box
        mt={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TableContainer width={'90%'}>
          <Table variant="simple" size={'sm'}>
            <TableCaption>{t('steper-2-2.tableau-titre')}</TableCaption>
            <Thead>
              <Tr>
                <Th>{t('steper-2-2.type')}</Th>
                <Th>{t('steper-2-2.couleur')}</Th>
                <Th>{t('steper-2-2.materiaux')}</Th>
                <Th>{t('steper-2-2.hauteur')}</Th>
                <Th>{t('steper-2-2.largeur')}</Th>
                <Th>Action</Th>
              </Tr>
              {Object.keys(steps[_this].payload[_subThis]).map(
                (key) =>
                  key.indexOf('ouverture-') !== -1 && (
                    <Tr key={key}>
                      <Td>
                        {steps[_this].payload[_subThis][key].type_ouverture}
                      </Td>
                      <Td>
                        {steps[_this].payload[_subThis][key].couleur_ouverture}
                      </Td>
                      <Td>{steps[_this].payload[_subThis][key].materiau}</Td>
                      <Td>{steps[_this].payload[_subThis][key].hauteur}</Td>
                      <Td>{steps[_this].payload[_subThis][key].largeur}</Td>
                      <Td>
                        <IconButton aria-label='' icon={<DeleteIcon />}
                          onClick={() => {
                            setStep({
                            ...steps,
                              [_this]: {
                              ...steps[_this],
                                payload: {
                                ...steps[_this].payload,
                                  [_subThis]: {
                                  ...Object.keys(steps[_this].payload[_subThis]).reduce((acc: { [key: string]: any }, k) => {
                                      if (k!== key) acc[k] = steps[_this].payload[_subThis][k];
                                      return acc;
                                    }, {}),
                                  },
                                },
                              },
                            });
                          }}
                        />
                      </Td>
                    </Tr>
                  )
              )}
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default OuverturesForm;
