import React from 'react'
import { Alert } from 'reactstrap';
import styles from './AlertMilli.module.css'

const AlertMilli = (props) => {
    return (
        <div className={styles.container} onClick={props.onClickHandler}>
            <Alert color={props.color}> {props.data} </Alert>
        </div>
    )
}

export default AlertMilli
