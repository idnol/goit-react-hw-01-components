import PropTypes from 'prop-types';
import css from './Friend.module.css'

const Friend = ({avatar, name, isOnline}) => (
  <>
    <span className={isOnline?css.online+' '+css.status:css.offline+' '+css.status} ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </>
);

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export { Friend };
