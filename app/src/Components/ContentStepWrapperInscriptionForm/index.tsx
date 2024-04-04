import { Box, Button, Container, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

export const InformForm = () => {

  return (
    <>
      <Box style={{'display': 'flex', 'flexDirection': 'row'}}>

        <FormControl ml={28} width={'40%'} mt={25}>
          <FormLabel >Matériaux du plafond</FormLabel>
          <Select>
              <option value="Dalle">Dalle</option>
              <option value="Contre plaquet">Contre plaquet</option>
              <option value="Faux plafond en platre">Faux plafond en platre</option>
              <option value="Bambou">Bambou</option>
          </Select>
        </FormControl>

        <FormControl ml={4} width={'40%'} mt={25}>
          <FormLabel >Matériaux du mur</FormLabel>
          <Select>
              <option value="Parpaing standard">Parpaing standard</option>
              <option value="Parpaing ordinaire">Parpaing ordinaire</option>
              <option value="Parpaing haute performance">Parpaing haute performance</option>
              <option value="Briques BTC bloc de pleins">Briques BTC bloc de pleins</option>
              <option value="Briques BTC bloc autocolants">Briques BTC bloc autocolants</option>
              <option value="Roches taillées">Roches taillées</option>
              <option value="Bois">Bois</option>
              <option value="Béton armé">Béton armé</option>
          </Select>
        </FormControl>

      </Box>

      <Box style={{'display': 'flex', 'flexDirection': 'row'}}>

        <FormControl ml={28} width={'40%'} mt={25}>
          <FormLabel >Matériaux du sol </FormLabel>
          <Select>
              <option value="Mortier">Mortier</option>
              <option value="Carreaux">Carreaux</option>
              <option value="Parquets en bois">Parquets en bois</option>
              <option value="Lamelles en roches">Lamelles en roches</option>
              <option value="Marbres">Marbres</option>
          </Select>
        </FormControl>

        <FormControl ml={4} width={'40%'} mt={25}>
          <FormLabel >Nombres de pièces</FormLabel>
          <Input type={'number'} placeholder='Entrer le nombre de pièces'/>
        </FormControl>

      </Box>

      <Box mt={20}>
        <Container>
          <Button colorScheme='teal' size='lg' width={'80%'} height={'10'} rounded={'40'}>
            Suivant
          </Button>
        </Container>
      </Box>
    </>


  )
}
