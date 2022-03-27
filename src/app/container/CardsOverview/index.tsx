import { useGetCardsQuery } from "app/api/arkhamCollection"
import { useSearchParams } from "react-router-dom"
import CardsFilter from "./CardsFilter"
import CardsGrid from "./CardsGrid"
import PacksTree from "./PacksTree"
import {
  StyledCardscontainer,
  StyledContainer,
  StyledFilterContainer,
  StyledPacksContainer
} from "./style"

export default function CardsOverview() {
  const [searchParams] = useSearchParams()
  const { isFetching, data } = useGetCardsQuery(searchParams.toString())

  return (
    <StyledContainer>
      <StyledPacksContainer>
        <PacksTree />
      </StyledPacksContainer>
      <StyledFilterContainer>
        <CardsFilter />
      </StyledFilterContainer>
      <StyledCardscontainer>
        <CardsGrid
          cards={data?.data || []}
          totalRows={data?.totalRows || 0}
          isLoading={isFetching}
        />
      </StyledCardscontainer>
    </StyledContainer>
  )
}
