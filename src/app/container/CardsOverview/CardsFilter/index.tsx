import {
  StyledContainer,
  StyledFactionNameFilterContainer,
  StyledTypeNameFilterContainer,
  StyledEncounterNameFilterContainer,
  StyledTraitsFilterContainer
} from "./style"
import EncounterNameFilter from "./EncounterNameFilter"
import FactionNameFilter from "./FactionNameFilter"
import NameFilter from "./NameFilter"
import { StyledNameFilterContainer } from "./style"
import TraitsFilter from "./TraitsFilter"
import TypeNameFilter from "./TypeNameFilter"

export default function CardsFilter() {
  return (
    <StyledContainer>
      <StyledNameFilterContainer>
        <NameFilter />
      </StyledNameFilterContainer>
      <StyledFactionNameFilterContainer>
        <FactionNameFilter />
      </StyledFactionNameFilterContainer>
      <StyledTypeNameFilterContainer>
        <TypeNameFilter />
      </StyledTypeNameFilterContainer>
      <StyledEncounterNameFilterContainer>
        <EncounterNameFilter />
      </StyledEncounterNameFilterContainer>
      <StyledTraitsFilterContainer>
        <TraitsFilter />
      </StyledTraitsFilterContainer>
    </StyledContainer>
  )
}
