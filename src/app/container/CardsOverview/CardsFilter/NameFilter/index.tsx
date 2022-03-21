import TextField from "@mui/material/TextField"
import { Autocomplete } from "@mui/material"
import { useGetCardNamesQuery } from "app/api/arkhamCollection"
import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"
import ListboxComponent from "app/components/ListBoxComponent"

export default function NameFilter() {
  const { data: cardNames } = useGetCardNamesQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.get("name")

  const onChange = (_: SyntheticEvent, name: string | null) => {
    if (name) searchParams.set("name", name)
    if (!name) searchParams.delete("name")
    setSearchParams(searchParams.toString())
  }

  return (
    <Autocomplete
      options={cardNames || []}
      value={value}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="Names" />
      )}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderOption={(props, option) => [props, option]}
      renderGroup={params => params}
      onChange={onChange}
    />
  )
}
