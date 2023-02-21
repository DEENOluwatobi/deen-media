import React, { useState } from 'react'
import Image from 'next/image'
import css from '../styles/Header.module.css'
import Profile from '../assets/dp.jpeg'
import { UilNewspaper, UilStar, UilUsersAlt, UilHeadphones,UilClouds, UilSignout, UilCalender } from '@iconscout/react-unicons'
import { UilSearch, UilHome, UilUserPlus, UilMoon, UilComment, UilBell, UilBars, UilMultiply } from '@iconscout/react-unicons'


export default function Header() {

    const [isMenu, setIsMenu] = useState(false);

    return(
        <div className={css.container}>

            <div className={css.menucon}>
                <UilBars onClick={() => setIsMenu(true)} className={css.menu}/>

                {isMenu && (
                    <div className={css.popmenu}>
                        <div className={css.topmenu}>
                            <div className={css.userdetailsMin}>
                                <span className={css.username}>Shodimu Tobi</span>
                                <span className={css.active}>Active Now</span>
                            </div>
                            <UilMultiply className={css.iconMin} onClick={() => setIsMenu(false)} />
                        </div>
                        <div className={css.searchfieldMin}>
                            <UilSearch size={20}/>
                            <input type="text" placeholder='Find Friends...'/>
                        </div> 

                        <div className={css.bodymenu}>
                
                            <div className={css.iconsq}>
                                <UilNewspaper size={30} className={css.iconq}/>
                                <span>Newsfeed</span>
                            </div>
                            <div className={css.iconsq}>
                                <UilStar size={30} className={css.iconq}/>
                                <span>Favourites</span>
                            </div>
                            <div className={css.iconsq}>
                                <UilUsersAlt size={30} className={css.iconq}/>
                                <span>Groups</span>
                            </div>
                            <div className={css.iconsq}>
                                <UilHeadphones size={30} className={css.iconq}/>
                                <span>Music</span>
                            </div>
                            <div className={css.iconsq}>
                                <UilClouds size={30} className={css.iconq}/>
                                <span>Weather</span>
                            </div>
                            <div className={css.iconsq}>
                                <UilCalender size={30} className={css.iconq}/>
                                <span>Events</span>
                            </div>
                            <div className={css.iconsq}>
                                <UilSignout size={30} className={css.iconq}/>
                                <span>Logout</span>
                            </div>
                    </div>   

                        <div className={css.iconMinCon}>
                            <UilHome className={css.iconMin}/>
                            <UilUserPlus className={css.iconMin}/>
                            <UilComment className={css.iconMin}/>
                            <UilMoon className={css.iconMin}/>
                            <UilBell className={css.iconMin}/>
                        </div>

                    </div>
                )}
            </div>

            <div className={css.left}>
                <div className={css.logo}>Deen<span>Media</span></div>
                <div className={css.searchfield}>
                    <UilSearch size={20}/>
                    <input type="text" placeholder='Find Friends...'/>
                </div>    
                <UilHome className={css.icon}/>
                <UilUserPlus className={css.icon}/>
            </div>

            <div className={css.right}>
                <UilComment className={css.icon}/>
                <UilMoon className={css.icon}/>
                <UilBell className={css.icon}/>
                <div className={css.profile}>
                    <div className={css.usercon}>
                        <Image className={css.userpic} src={Profile} alt='' width={50} height={50}/>
                        <div className={css.pbubble}></div>
                    </div>
                    <div className={css.userdetails}>
                        <span className={css.username}>Shodimu Tobi</span>
                        <span className={css.active}>Active Now</span>
                    </div>

                </div>
            </div>
        </div>
    )
};
