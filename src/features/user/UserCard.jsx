import { useSelector } from "react-redux";

export default function UserCard() {
  const { currentUser, isCurrentUserLoading } = useSelector(
    (state) => state.users
  );

  function renderUserCard() {
    return (
      <div className="card">
        <img
          src={currentUser.avatar}
          alt={`${currentUser.first_name} ${currentUser.last_name}`}
        />
        <div className="card-info">
          <h3>{`${currentUser.first_name} ${currentUser.last_name}`}</h3>
          <p>{currentUser.email}</p>
        </div>
      </div>
    );
  }

  function renderLoading() {
    return (
      <div className="card">
        <h2>loading...</h2>
      </div>
    );
  }

  function renderPlaceholder() {
    return (
      <div className="card">
        <h2>Click on any button below to see user card</h2>
      </div>
    );
  }

  if (isCurrentUserLoading) {
    return renderLoading();
  } else if (Object.keys(currentUser).length === 0) {
    return renderPlaceholder();
  } else {
    return renderUserCard();
  }
}
