import React from "react";
import css from './FriendList.module.css';
import PropTypes from 'prop-types';



const FriendListItem = ({ avatar, name, isOnline, id }) => 
            (<li className={css.item} key={id}>
                <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>)

const FriendList = ({ friends }) => {
    return (<div className={css.friends}><ul className={css.friend_list}>
        {friends.map(friend => (< FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}/>))}
</ul></div>)

}
export default FriendList

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}