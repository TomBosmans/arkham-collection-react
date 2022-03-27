import TextField from "@mui/material/TextField"
import { Autocomplete } from "@mui/material"
import { useGetTypeNamesQuery } from "app/api/arkhamCollection"
import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"
import ListboxComponent from "app/components/ListBoxComponent"

export default function TypeNameFilter() {
  const { data: typeNames } = useGetTypeNamesQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.getAll("typeNames[]")

  const onChange = (_: SyntheticEvent, typeNames: string[]) => {
    searchParams.delete("typeNames[]")
    typeNames.forEach(typeName =>
      searchParams.append("typeNames[]", typeName)
    )
    setSearchParams(searchParams.toString())
  }

  return (
    <Autocomplete
      multiple
      options={typeNames || []}
      value={value}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="Type (or)" />
      )}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderOption={(props, option) => [props, option]}
      renderGroup={params => params}
      onChange={onChange}
    />
  )
}
