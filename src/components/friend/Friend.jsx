const Friend = ({avatar, name, isOnline}) => (
  <>
    <span className={isOnline?'status online':'status offline'} ></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </>
);

export { Friend };
