import * as React from "react";

import s from './App.css';

interface Props {
}

const Core: React.FC<Props> = (props) => {
    return (
        <div className={s.app}>
            Hello!
        </div>
    )
}

export default Core;