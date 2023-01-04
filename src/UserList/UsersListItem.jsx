import style from "./UserList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function UsersListItem(props) {
  const {
    selectUser,
    deleteUser,
    user: {
      id,
      isSelected,
      gender,
      firstName,
      lastName,
      imgsrc,
      twitters,
      following,
      followers,
    },
  } = props;

  const inLineStyle = {
    color: gender === "Male" ? "wheat" : "white",
  };

  const inlineCardStyle = {
    backgroundColor: isSelected ? "violet" : "#f5f5f6",
  };

  return (
    <div
      className={style.userCard}
      onMouseDown={(event) => selectUser(event, id)}
    >
      <div className={style.userCardHeader} style={inlineCardStyle}>
        <div className={style.photoContainer}>
          <img src={imgsrc} className={style.userPhoto} alt="#" />
          <h1 style={inLineStyle} className={style.firstName}>
            {firstName}
          </h1>
          <h2 className={style.lastName}>{lastName}</h2>
          <div
            className={style.circleBehindIcon}
            onClick={(event) => deleteUser(event, id)}
          >
            <FontAwesomeIcon icon={faTrash} className={style.faTrash} />
          </div>
          <div className={style.countContainer}>
            <div>
              Tweets
              <div className={style.count}>{twitters}</div>
            </div>
            <div>
              Following
              <div className={style.count}>{following}</div>
            </div>
            <div>
              Followers
              <div className={style.count}>{followers}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
