import React from 'react';

type MoneyType = {
    banknots: string
    value: number
    number: string
}
type FilterValueType = "All" | "Dollars" | "Rubls";
export type CurrencyListType = {
    filteredMoney: Array<MoneyType>
    filterMoney: (filterValue: FilterValueType) => void
}
export const CurrencyList: React.FC<CurrencyListType> = (
    {
        filteredMoney,
        filterMoney
    }) => {
    return (
        <div>
            <ul>
                {filteredMoney.map((m, index) => {
                    return <li key={index}>
                        <span>{m.banknots} |</span>
                        <span> {m.value} |</span>
                        <span>{m.number}</span>
                    </li>
                })}
            </ul>
            <button onClick={() => {
                filterMoney('All')
            }}>All
            </button>
            <button onClick={() => {
                filterMoney('Dollars')
            }}>Dollars
            </button>
            <button onClick={() => {
                filterMoney('Rubls')
            }}>Rubls
            </button>
        </div>
    );
}
