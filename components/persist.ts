import React, { useState } from "react";

const usePersist = <T>(ky: string, initVal: T): [T, (val: T) => void] => {
    const key = "hooks:" + ky;
    const value = (():T => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) as T : initVal;
        } catch (err) {
            console.log(err);
            return initVal;
        }
    })();

    const [savedValue, setSavedValue] = useState(value);
    const setValue = (val: T) => {
        try {
            setSavedValue(val);
            window.localStorage.setItem(key, JSON.stringify(val));
        } catch (err) {
            console.log(err);
        }
    }
    return [savedValue, setValue];
}

export default usePersist;