import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
//import CardList from './CardList';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
//import {robot} from './robot';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
              <App />
            
       
        
);
// ReactDOM.render(<Hello greeting={'Hello 9ja'}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
