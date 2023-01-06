import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "./userSlice";

export default function UserButton({ buttonNumber, id }) {
  const dispatch = useDispatch();

  return (
    <button
      className="user-button"
      onClick={() => {
        dispatch(getSingleUser(id));
      }}
    >
      {buttonNumber}
    </button>
  );
}
