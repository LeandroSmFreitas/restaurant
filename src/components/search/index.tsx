import React from 'react'
import * as S from './styles'
import SearchIcon from "../../assets/search.svg"

const Search = () => {
  return (
    <S.Container>
      <S.Icon src={SearchIcon}/>
      <S.InputSearch placeholder='Search menu items'/>
    </S.Container>
  )
}

export default Search