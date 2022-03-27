import TextField from "@mui/material/TextField"
import { Autocomplete } from "@mui/material"
import { useGetEncounterNamesQuery } from "app/api/arkhamCollection"
import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"
import ListboxComponent from "app/components/ListBoxComponent"

export default function EncounterNameFilter() {
  const { data: encounterNames } = useGetEncounterNamesQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.getAll("encounterNames[]")

  const onChange = (_: SyntheticEvent, factionNames: string[]) => {
    searchParams.delete("encounterNames[]")
    factionNames.forEach(factionName =>
      searchParams.append("encounterNames[]", factionName)
    )
    setSearchParams(searchParams.toString())
  }

  return (
    <Autocomplete
      multiple
      options={encounterNames || []}
      value={value}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="Encounter (or)" />
      )}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderOption={(props, option) => [props, option]}
      renderGroup={params => params}
      onChange={onChange}
    />
  )
}
