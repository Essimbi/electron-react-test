import React, { ChangeEvent, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Language } from '../../Helper/Language';
import { Select, Box } from '@chakra-ui/react'

const ChooseLang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);

    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;

        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }

    return (
        <div>
            <Box width={'7%'} padding={2} ml={'auto'}>
                <Select value={lang} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </Select>
            </Box>
        </div>
    )
}

export default ChooseLang;
