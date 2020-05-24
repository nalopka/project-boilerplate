import * as React from "react";

import style from './App.css';

interface Props {
}

const Core: React.FC<Props> = (props) => {
    return (
        <div className={style.bold}>
            Hello!
        </div>
    )
}

export default Core;