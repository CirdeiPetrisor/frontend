import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Post from  './components/Post';
import App from './App';
import GETdata from './components/GETdata';

import {useState} from 'react';
import { render } from '@testing-library/react';
import AdminJs from './pages/AdminJs';

ReactDOM.render(<App />, document.getElementById("root"));
