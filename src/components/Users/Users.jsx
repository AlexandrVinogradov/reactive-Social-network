import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';
// props.setUsers([
//     { id: '1', photoUrl: 'https://cs9.pikabu.ru/post_img/big/2017/01/06/0/1483652153163869473.jpg', followed: true, fullName: 'Adriana', status: 'Lucky for you, mirrors can\'t laugh out loud.', location: { city: 'Mexico', country: 'Mexica' } },
//     { id: '2', photoUrl: 'https://pp.userapi.com/c855416/v855416570/9f462/9NJrz3aIiZQ.jpg', followed: false, fullName: 'Roberto', status: 'Time is precious. Waste it wisely.', location: { city: 'Rennes', country: 'France' } },
//     { id: '3', photoUrl: 'https://ru1.anyfad.com/items/t1@39b8c2ad-babb-4e7d-a605-ef103a97049d/Chikano-Art.jpg', followed: true, fullName: 'Gabriela', status: 'About to dance my feet silly!', location: { city: 'Saltillo', country: 'Mexica' } },
//     { id: '4', photoUrl: 'https://as1.ftcdn.net/jpg/01/31/27/16/1000_F_131271600_qpQHk1vwDhaYzYeyr25AXA0i1wfCkEhQ.jpg', followed: false, fullName: 'Francisco', status: 'You can\'t be late until you show up.', location: { city: 'Lisboa', country: 'Portugal' } }
//     ]
// )  

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <ul className={s.pages}>
                {pages.map( p=> {
                   return <li className={this.props.currentPage === p && s.selectedPage}
                   onClick={ (e) => {this.onPageChanged(p); }}>{p}</li>
                })}
            </ul>
        {
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.phopos.small : userPhoto} className={s.avatar} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    }
    
}

export default Users;