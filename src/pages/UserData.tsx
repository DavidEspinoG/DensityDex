import { useParams, useSearchParams } from "react-router-dom";

const UserData = () => {
  const [searchParams, _] = useSearchParams();
  let data = searchParams.get('data');
  let age = searchParams.get('age');
  const { userId } = useParams();
  return (
    <>
      <h2>User info</h2>
      <p>User id: {userId}</p>
      <p>Data: {data}</p>
      <p>Age: {age}</p>
    </>
  )
};

export default UserData;