import style from './Dialogs.module.css'
import {FC} from "react";
import {NavLink} from "react-router-dom";
type DialogsPropsType = {

}
const Dialogs:FC<DialogsPropsType> = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialogs}>
                  <NavLink to='/dialogs/1'>
                      Artem
                  </NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/2'>
                        Vasili
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'>
                        Tom
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'>
                        Dariya
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/5'>
                        Dariya
                    </NavLink>
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your it-kamasutra?</div>
                <div className={style.message}>Yo!</div>

            </div>
        </div>
    )
}

export default Dialogs