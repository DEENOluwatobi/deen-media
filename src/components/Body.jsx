import css from '../styles/Body.module.css'
import Feed from './Feed'
import Nav from './Nav'
import Msg from './Msg'
import Notification from './Notification'

export default function Body() {
    return(
        <div className={css.bodycon}>
            <Nav/>
            <Feed/>
            <Notification/>
            <Msg/>
        </div>
    )
};