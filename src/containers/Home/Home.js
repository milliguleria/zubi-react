import React from 'react'
import styles from './Home.module.css'
import AlertMilli from '../../components/AlertMilli'

const Home = () => {




    const data = [{ data: "Abc", color: "primary" }, { data: "Def", color: "success" }, { data: "Ghi", color: "danger" }]

    const displayAlertMillis = () => data.map((item, index) => (
        <div>
            <AlertMilli data={item.data} color={item.color} />


        </div>
    ))


    return (
        <div className={styles.container}>
            <div className={styles.heading}>This is home!</div>
            {displayAlertMillis()}
        </div>
    )
}

export default Home
