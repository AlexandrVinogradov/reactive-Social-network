import React from 'react';
import Paginator from '../common/Ppaginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    debugger
    return <div>
        <Paginator currentPage={currentPage}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged} />
        <div>
            {
                users.map(u => <User key={u.id}
                    followingInProgress={props.followingInProgress}
                    user={u}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;