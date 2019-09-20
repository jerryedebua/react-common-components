import React from 'react';
import ReactDom from 'react-dom';

import Components from '../../src';

const {
	Popup
} = Components;

ReactDom.render(
	<Popup message="A brief message" />,
	document.querySelector('#demo')
);
