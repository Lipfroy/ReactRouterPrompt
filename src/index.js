import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-quill/dist/quill.snow.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import 'draft-js/dist/Draft.css'
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';







ReactDOM.render(<Router>

    <ReactRouter/>
</Router>
    ,
    document.getElementById('root'));

