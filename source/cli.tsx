#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
// import meow from 'meow';
import App from './ui';

// const cli = meow(`
// 	Usage
// 	  $ CourseProjects

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ CourseProjects --name=Jane
// 	  Hello, Jane
// `, {
// 	flags: {
// 		name: {
// 			type: 'string'
// 		}
// 	}
// });
//name={cli.flags.name}/>

render(<App />);
