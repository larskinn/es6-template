'use strict';

import { render } from 'react-dom';
import { createElement } from 'react';

render(
  createElement('h1', null, 'Hello, world!'),
  document.getElementById('app')
);
