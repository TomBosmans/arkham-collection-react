import TextField from "@mui/material/TextField"
import { Autocomplete } from "@mui/material"
import { useGetFactionNamesQuery } from "app/api/arkhamCollection"
import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"
import ListboxComponent from "app/components/ListBoxComponent"

export default function FactionNameFilter() {
  const { data: factionNames } = useGetFactionNamesQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.getAll("factionNames[]")

  const onChange = (_: SyntheticEvent, factionNames: string[]) => {
    searchParams.delete("factionNames[]")
    factionNames.forEach(factionName =>
      searchParams.append("factionNames[]", factionName)
    )
    setSearchParams(searchParams.toString())
  }

  return (
    <Autocomplete
      multiple
      options={factionNames || []}
      value={value}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="Class (or)" />
      )}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderOption={(props, option) => [props, option]}
      renderGroup={params => params}
      onChange={onChange}
    />
  )
}
