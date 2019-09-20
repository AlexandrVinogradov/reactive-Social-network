import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    //берем из пропсов данные, понимаем, сколько страниц отрисовывать 
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <ul className={s.pages}>
            {pages.map(p => {
                return <li className={currentPage === p && s.selectedPage}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</li>
            })}
        </ul>
} 
   
export default Paginator;                       