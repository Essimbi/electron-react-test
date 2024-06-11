import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Text
} from '@chakra-ui/react';
import { useSettingsContext } from '../../../Hooks/useSettings';
import { useStepContext } from '../../../Hooks/useStep';
const _this = 'STEP-2';
export const DonneGeographique = () => {
    const { setActiveStep, steps, setStep } = useStepContext();
    const { settings } = useSettingsContext();

    return (
        <Container>
            <Box className={'fade-out'} style={{ marginTop: '13%' }}>
                <FormControl mb={4} width={'100%'} mt={25} >
                    <Text></Text>
                    <FormLabel>Selectionner une Zone Geographique<span style={{ color: 'red' }}>*</span> :</FormLabel>
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
                        <option value="Douala" defaultChecked>Douala</option>
                        <option value="Yaounde">Yaounde</option>
                        <option value="Maroua">Maroua</option>
                        <option value="Garoua">Garoua</option>
                        <option value="Bafoussam">Bafoussam</option>
                    </Select>
                </FormControl>

                <FormControl mb={4} width={'100%'}>
                    <FormLabel>Date<span style={{ color: 'red' }}>*</span> :</FormLabel>
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
                    {/* <Button
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
                        precedent
                    </Button> */}
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
                        calculer
                    </Button>
                </Stack>
                {/* {JSON.stringify(steps)} */}

            </Box>
        </Container>
    );
};
