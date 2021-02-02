import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Kirik"} id={"1"}/>
                <DialogItem name={"Dimik"} id={"2"}/>
                <DialogItem name={"max"} id={"3"}/>
                <DialogItem name={"dima"} id={"4"}/>
                <DialogItem name={"sasha"} id={"5"}/>
            </div>
            <div className={s.message}>
                <Message message={"hello"}/>
                <Message message={"Как дела придурок?)"}/>
                <Message message={"Игноришь?"}/>
            </div>
        </div>
    )
}


export default Dialogs;
