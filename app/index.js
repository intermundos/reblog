// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React    from 'react';
import { render } from 'react-dom';

import Root  from './components/Root';

render(<Root />, document.querySelector('#root'));
