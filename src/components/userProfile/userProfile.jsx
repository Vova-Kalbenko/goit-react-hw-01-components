import css from './userProfile.module.css';
import PropTypes from 'prop-types'

export const UserProfile = ({ username, tag, location, avatar, stats:{followers,views,likes}  }) => {
    
    return <div>
    <div className={css.userWrapper}>
      <img
        src={avatar}
        alt="avatar"
        width="150px"
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.statsList}>
      <li className={css.statsListItem}>
        <span className={css.stats}>Followers</span>
        <span className={css.statsNumber}>{followers}</span>
      </li>
      <li className={css.statsListItem}>
        <span className={css.stats}>Views</span>
        <span className={css.statsNumber}>{views}</span>
      </li>
      <li className={css.statsListItem}>
        <span className={css.stats}>Likes</span>
        <span className={css.statsNumber}>{likes}</span>
      </li>
    </ul>
  </div>
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
  }