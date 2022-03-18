import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { useGetTraitsQuery } from "app/api/arkhamCollection"
import ListboxComponent from "app/components/ListBoxComponent"
import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"

export default function TraitsFilter() {
  const { data: traits } = useGetTraitsQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.getAll("traits[]")

  const onChange = (_: SyntheticEvent, traits: string[]) => {
    searchParams.delete("traits[]")
    traits.forEach(trait => searchParams.append("traits[]", trait))
    setSearchParams(searchParams.toString())
  }

  return (
    <Autocomplete
      multiple
      options={traits || []}
      value={value}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="Traits" />
      )}
      renderOption={(props, option) => [props, option]}
      renderGroup={params => params}
      onChange={onChange}
    />
  )
}
