import { gql, useQuery } from '@apollo/client'
import FIND_DOG from '../../../graphql/findDogs/findDogsByName'


interface nameProps {
    name: string

}
export default function Filter({ name }: nameProps) {


  const [nameToSearch, setNameToSearch] = useState(null)

  const result = useQuery(FIND_DOG, {
    variables: { nameToSearch },
    skip: !nameToSearch,
  })

  if (nameToSearch && result.data) {
    return (
      <Dog
        person={result.data.findDog}
        onClose={() => setNameToSearch(null)}
      />
    )
  }
    return (
        <>
        <form action="">
        <input type="text" />
        </form>
       
        </>
    )
}