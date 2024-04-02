import { Box, Button, Container, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export const DonneesPiecesForm = () => {
  return (
    <>
      <Box style={{'display': 'flex', 'flexDirection': 'row'}}>

        <FormControl ml={40} width={'40%'} mt={25}>
          <FormLabel >Matériaux du toit</FormLabel>
          <Select>
              <option value="Toles en aluminium">Toles en aluminium</option>
              <option value="Tuiles en micro béton">Tuiles en micro béton</option>
              <option value="Pailles">Pailles</option>
              <option value="Toitures en terrace">Toitures en terrace</option>
          </Select>
        </FormControl>

        <FormControl ml={4} width={'40%'} mt={25}>
          <FormLabel >Nom de la pièce</FormLabel>
          <Input type={'number'} placeholder='Entrer le nom de la pièce'/>
        </FormControl>

      </Box>

      <Box style={{'display': 'flex', 'flexDirection': 'row'}}>

        <FormControl ml={40} width={'40%'} mt={25}>
          <FormLabel >Matériaux du sol </FormLabel>
          <Input type={'text'} placeholder="Menionner l'ouverture"/>
        </FormControl>

        <FormControl ml={4} width={'40%'} mt={25}>
          <FormLabel >Hauteur</FormLabel>
          <Input type={'number'} placeholder='Entrer la hauteur'/>
        </FormControl>

      </Box>

      <Box style={{'display': 'flex', 'flexDirection': 'row'}}>

        <FormControl ml={40} width={'40%'} mt={25}>
          <FormLabel >Longueur </FormLabel>
          <Input type={'number'} placeholder="Entrer la longueur"/>
        </FormControl>

        <FormControl ml={4} width={'40%'} mt={25}>
          <FormLabel >Largeur</FormLabel>
          <Input type={'number'} placeholder='Entrer la largeur'/>
        </FormControl>

      </Box>

      <Box style={{'display': 'flex', 'flexDirection': 'row'}} ml={40} mt={25}>

        <TableContainer width={'94%'}>
          <Table>
            <Thead>
              <Tr>
                <Th>Sol</Th>
                <Th>Nombre de pièces</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><Input type={'text'} size={'sm'}/></Td>
                <Td><Input type={'number'} size={'sm'}/></Td>
                <Td>
                  <Button size='sm'>
                    <DeleteIcon />
                  </Button>
                  <Button size='sm' ml={2}>
                    <EditIcon />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

      </Box>

      <Box mt={6}>
        <Container style={{'display': 'flex', 'flexDirection': 'row'}}>
          <Button color={'#827876'} size='lg' width={'80%'} height={'10'} rounded={'40'} >
            Précédent
          </Button>
          <Button colorScheme='teal' size='lg' width={'80%'} height={'10'} rounded={'40'} ml={4}>
            Suivant
          </Button>
        </Container>
      </Box>
    </>
  )
}
