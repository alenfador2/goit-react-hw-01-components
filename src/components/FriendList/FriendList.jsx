import React from "react";
import css from './FriendList.module.css';
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
    return (<div className={css.friends}><ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => 
            (<li className={css.item} key={id}>
                <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>)
        )}
</ul></div>)

}
export default FriendList

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}