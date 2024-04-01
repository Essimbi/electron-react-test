import { Box, Button, Container, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';

const theme = {
    colors: {
        gray: {
            100: '#817876',
        },
    },
}

export const DonneMetheo = () => {
    return (

        <Container>
            <Box >
                <FormControl mb={4} width={'100%'} mt={25}>
                    <FormLabel >Sélectionnez une Zone geographique :</FormLabel>
                    <Select>
                        <option value="option1">Littoral</option>
                        <option value="option2">Centre</option>
                        <option value="option3">Extreme Nord</option>
                        <option value="option3">Extreme sud</option>
                        <option value="option3">Sud</option>
                        <option value="option3">EST</option>
                    </Select>
                </FormControl>

                <FormControl mb={4} width={'100%'}>
                    <FormLabel>Date :</FormLabel>
                    <Input type="date" />
                </FormControl>

                <Stack direction='row' spacing={2} align='center'>
                    <Button mt={4} colorScheme='gray' width={'100%'} borderRadius={'50px'} size='md'>
                        Precedent
                    </Button>

                    <Button mt={4} colorScheme='teal' width={'100%'} borderRadius={'50px'} size='md'>
                        Calculer
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}