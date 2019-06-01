import React from 'react'


const ListNotifications = ({item}) => {

    return (
        <div className="d-flex black-text flex-beetween border-bottom align-items">
            <a href={`/user/${item.data.user.id}`}><img src={item.data.user.avatar} alt="Аватарка" title="Аватарка" className="notif-avatar"/></a>
            <span className="line-height2" style={{margin: 5}}>
                <a href={`/user/${item.data.user.id}`} className="site-color-link" style={{fontSize: '11px'}}>{item.data.user.name} &nbsp;</a>
                <a href={`/post/${item.data.post.slug}`} className="black-text under-line" style={{fontSize: '11px'}}>{item.data.message}</a>
            </span>
            <span style={{fontSize: '11px'}} className="black-text line-height2">{getTime(item.created_at)}</span>
        </div>
    )
}

export default ListNotifications;
