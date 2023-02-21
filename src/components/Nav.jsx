import { UilNewspaper, UilStar, UilUsersAlt, UilHeadphones,UilClouds, UilSignout, UilCalender } from '@iconscout/react-unicons'
import css from '../styles/Nav.module.css'

export default function Nav() {
    return(
        <div className={css.bodymenu}>
                
                <div className={css.icons}>
                    <UilNewspaper size={35} className={css.icon}/>
                    <span>Newsfeed</span>
                </div>
                <div className={css.icons}>
                    <UilStar size={35} className={css.icon}/>
                    <span>Favourites</span>
                </div>
                <div className={css.icons}>
                    <UilUsersAlt size={35} className={css.icon}/>
                    <span>Groups</span>
                </div>
                <div className={css.icons}>
                    <UilHeadphones size={35} className={css.icon}/>
                    <span>Music</span>
                </div>
                <div className={css.icons}>
                    <UilClouds size={35} className={css.icon}/>
                    <span>Weather</span>
                </div>
                <div className={css.icons}>
                    <UilCalender size={35} className={css.icon}/>
                    <span>Events</span>
                </div>
                <div className={css.icons}>
                    <UilSignout size={35} className={css.icon}/>
                    <span>Logout</span>
                </div>
        </div>
    )
};
