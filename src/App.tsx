import * as React from 'react';

import cn from 'classnames';

import s from './App.css';
import 'common/styles/normalize.css';

interface Props {
}

const App: React.FC<Props> = props => (
    <div className={cn(s.app)}>
        <div>
            <img
                src="img/logo/graphics-area-0.png"
                srcSet="img/logo/graphics-area-0@2x.png 2x, img/logo/graphics-area-0@3x.png 3x"
                className="Graphics-area-0"
                alt="logo"
            />
        </div>
        Hello!
    </div>
);

export default App;
