export default function Info({ search, data }) {
  return !data || !search ? (
    <p></p>
  ) : !data?.type || !data?.name ? (
    <p>No data for {search}</p>
  ) : (
    <div>
      <h2>Meet {person}</h2>
      <ul>
        <li>Gender: {data.gender}</li>
        <li>
          Probability that the name is {data.gender}: {data.probability * 100}%
        </li>
        <li>
          How many {person}'s are there: {data.count}
        </li>
      </ul>
    </div>
  )
}
