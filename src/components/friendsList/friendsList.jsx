import css from './friendsList.module.css'
import PropTypes from 'prop-types';
import  {FriendListItem}  from './friendsListItem';
export const Friends = ({friends}) => {
  return <ul className={css.list}>
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <>
         <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
        </>
      );
    })}
  </ul>;
};

Friends.propTypes  = {
  friendsList: PropTypes.arrayOf(
      PropTypes.exact({
          id:PropTypes.number.isRequired,
      }))
}