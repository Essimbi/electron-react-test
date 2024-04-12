import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const OuverturesForm = () => {
  return (
    <Box display={'flex'} className={'fade-out'} flexDirection={'column'} width={'100%'}>
      <Text fontSize='lg' ml={10} mt={20}>Ouvertures de la pièce</Text>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={5} >
          <FormLabel>Type d'ouverture</FormLabel>
          <Select size={'sm'}>
            <option value="Porte">Porte</option>
            <option value="Fenetre">Fenêtre</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={5}>
          <FormLabel>Matériau</FormLabel>
          <Select size={'sm'}>
            <option value="Bois">Bois</option>
            <option value="Bambou">Bambou</option>
            <option value="Verre">Verre</option>
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
        <FormControl width={'45%'} mt={5}>
          <FormLabel>Hauteur </FormLabel>
          <Input type={'number'} placeholder="En mètre" size={'sm'} />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={5}>
          <FormLabel>Largeur</FormLabel>
          <Input type={'number'} placeholder="En mètre" size={'sm'} />
        </FormControl>
      </Box>
      <Box
        mt={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button colorScheme='teal' variant='outline' size={"sm"} ml={"auto"} mr={10}>
          Ajouter
        </Button>
      </Box>
      <Box
        mt={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <TableContainer width={'90%'}>
          <Table variant='simple' size={'sm'}>
            <TableCaption>Les ouvertures de la pièce</TableCaption>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Matériau</Th>
                <Th isNumeric>Hauteur</Th>
                <Th isNumeric>Largeur</Th>
              </Tr>
            </Thead>
            <Tbody>
              
            </Tbody>

          </Table>
        </TableContainer>

      </Box>
    </Box>
  )
}

export default OuverturesForm ;
