import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import ListboxComponent from "app/components/ListBoxComponent"
import { SyntheticEvent } from "react"
import { useSearchParams } from "react-router-dom"
import { useGetXpValuesQuery } from "app/api/arkhamCollection"

export default function XpFilter() {
  const { data: xpValues } = useGetXpValuesQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.getAll("xp[]")

  const onChange = (_: SyntheticEvent, xpValues: number[]) => {
    searchParams.delete("xp[]")
    xpValues.forEach(xp => searchParams.append("xp[]", `${xp}`))
    setSearchParams(searchParams.toString())
  }

  return (
    <Autocomplete
      multiple
      options={xpValues || []}
      value={value.map(v => Number(v))}
      disableListWrap
      ListboxComponent={ListboxComponent}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="xp (or)" />
      )}
      renderOption={(props, option) => [props, option]}
      renderGroup={params => params}
      onChange={onChange}
    />
  )
}
