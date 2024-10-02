import * as S from './styles'
import SearchIcon from "../../assets/search.svg"
import { useTranslation } from 'react-i18next'

interface Props{
  handleSearch: (value: string) => void;
}

const Search = ({ handleSearch }:Props) => {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Icon src={SearchIcon}/>
      <S.InputSearch placeholder={t("global.search.placeholder")} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}/>
    </S.Container>
  )
}

export default Search