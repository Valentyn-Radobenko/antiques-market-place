import { Filters } from "./Filters/Filters"
import { Sorting } from "./Sorting/Sorting"


export const Settings = () => {

  return (
    <div className="settings">
      <Filters />
      <Sorting />
    </div >
  )
}