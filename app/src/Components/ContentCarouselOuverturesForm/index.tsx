import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

const OuverturesForm = () => {
  return (
    <Box display={'flex'} className={'fade-out'} flexDirection={'column'} width={'100%'}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FormControl width={'45%'} mt={-10}>
          <FormLabel>Type d'ouverture</FormLabel>
          <Select>
            <option value="Porte">Porte</option>
            <option value="Fenetre">Fenêtre</option>
          </Select>
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={-10}>
          <FormLabel>Matériau</FormLabel>
          <Select>
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
        <FormControl width={'45%'} mt={10}>
          <FormLabel>Hauteur </FormLabel>
          <Input type={'number'} placeholder="En mètre" />
        </FormControl>

        <FormControl ml={'3%'} width={'45%'} mt={10}>
          <FormLabel>Largeur</FormLabel>
          <Input type={'number'} placeholder="En mètre" />
        </FormControl>
      </Box>
    </Box>
  )
}

export default OuverturesForm ;
