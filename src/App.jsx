import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./features/user/userSlice";
import UserButton from "./features/user/UserButton";
import UserCard from "./features/user/UserCard";

function App() {
  const dispatch = useDispatch();
  const { allUsers, isUsersLoading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isUsersLoading) {
    return (
      <div className="App">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <main className="App">
      <UserCard />
      <div className="button-container">
        {allUsers.map((user, index) => (
          <UserButton key={user.id} buttonNumber={index + 1} id={user.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
