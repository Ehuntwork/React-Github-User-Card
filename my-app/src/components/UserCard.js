import React from 'react'

function UserCard(props){
    console.log(props.userInfo)
    return(
        <div className='UserCard'>
            <img src={props.userInfo.avatar_url} alt='Avatar'/>
            <h2>{props.userInfo.login}</h2>
            <p>{props.userInfo.public_repos}</p>
            <p>{props.userInfo.followers}</p>
            <p>{props.userInfo.following}</p>
        </div>
    )}

export default UserCard