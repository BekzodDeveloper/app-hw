import * as React from "react";

type ButtonType = {
    channelName: string
    subscribe: () => void
}
export const Button: React.FC<ButtonType> = (
    {channelName,
    subscribe}) => {
    const subscribeHandler = () => {
       subscribe()
    };
    return <button onClick={subscribeHandler}>{channelName}</button>;
}