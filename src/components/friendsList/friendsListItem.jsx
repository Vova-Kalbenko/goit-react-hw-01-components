import PropTypes from 'prop-types'
import css from './friendsListItem.module.css'
import {BiCool} from 'react-icons/bi'
export const  FriendListItem = ({avatar, name, isOnline,id}) =>  {
    return <li key={id}>
      <BiCool className={(isOnline ? css.green : css.red)}>{isOnline}</BiCool >
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  }

  FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
  }


