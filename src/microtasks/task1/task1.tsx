import * as React from 'react';
import styles from "./Task1.module.css";
import {Button} from "./Button";
import {useState} from "react";
import {CurrencyList} from "./CurrencyList";

type Task1Type = {};

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
export const Task1: React.FC<Task1Type> = (props) => {

    const subscribeHandler1 = (subscriber: string) => {
        console.log("Subscribed: " + subscriber)
    };
    const subscribeHandler2 = (subscriber: string) => {
        console.log("Subscribed: " + subscriber)
    };
    const subscribeHandler3 = () => {
        console.log("I'm stupid button!")
    };

    let [score, setScore] = useState(0);
    const icrementScore = () => {
        setScore(++score)
    };
    const restartScore = () => {
        setScore(0)
    };

    type MoneyType = {
        banknots: string
        value: number
        number: string
    }
    type FilterValueType = "All" | "Dollars" | "Rubls";
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ]);

    let [filterValue, setFilterValue] = useState<FilterValueType>("All");

    let filteredMoney = money;

    if (filterValue === 'Rubls') {
        filteredMoney = money.filter(m => m.banknots === filterValue)
    } else if (filterValue === 'Dollars') {
        filteredMoney = money.filter(m => m.banknots === filterValue)
    }
    const filterMoney = (filterValue: FilterValueType) => {
        setFilterValue(filterValue);
    }

// let [filteredMoney, setFilteredMoney] = useState(money);
// const filterMoney = (value: string) => {
//     if (value === 'Rubls') {
//         filteredMoney = money.filter(m => m.banknots === value)
//         return setFilteredMoney(filteredMoney);
//     } else if (value === 'Dollars') {
//         filteredMoney = money.filter(m => m.banknots === value)
//         return setFilteredMoney(filteredMoney);
//     } else {
//         return setFilteredMoney(money);
//     }
// }
    /*function getDivisorsCnt(n: number) {
        let res = 0;
        for (let i = 1; i <= n; i++) if (n % i === 0) res++;
        return res;
    }

    getDivisorsCnt(30)
*/
    function getGrade(s1: number, s2: number, s3: number) {
        // Code here
        let avarageS: number | string = Math.ceil((s1 + s2 + s3) / 3);
        console.log(avarageS)
        avarageS= avarageS < 60 ? "F" :
            avarageS >= 60 && avarageS < 70 ? "D" :
                avarageS >= 70 && avarageS < 80 ? "C" :
                    avarageS >= 80 && avarageS < 90 ? "B" :
                        avarageS >= 90 && avarageS <= 100 ? "A" : avarageS;
        console.log(avarageS)
        return avarageS;
    }

    getGrade(70,70,100)

    return (
        <div className={styles.task__wrapper}>
            <div>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                    </tr>
                    </thead>
                    <tbody>
                    {topCars.map((car, index) => {
                        return <tr key={index}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>;
                    })}
                    </tbody>
                </table>
                <div>
                    <Button channelName='Bekzod Developer' subscribe={() => subscribeHandler1('Bekzod')}/>
                    <Button channelName="Kholdorov's BASI" subscribe={() => subscribeHandler2('Abdulaziz')}/>
                    <Button channelName="I'm stupid button. Click me!" subscribe={subscribeHandler3}/>
                </div>

                <div>
                    <h1>Score: {score}</h1>
                    <button onClick={icrementScore}>Icrement</button>
                    <button onClick={restartScore}>Restart</button>
                </div>

                <CurrencyList filteredMoney={filteredMoney} filterMoney={filterMoney}/>

            </div>
        </div>
    );
};
