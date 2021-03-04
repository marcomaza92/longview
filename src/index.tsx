import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import App from './App';
import ThemeProvider from './context/Theme';
import VideoProvider from './context/Video';
import CategoryProvider from './context/Category';
import QueryProvider from './context/Query';

ReactDOM.render(
  <QueryProvider>
    <ThemeProvider>
      <CategoryProvider>
        <VideoProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </VideoProvider>
      </CategoryProvider>
    </ThemeProvider>
  </QueryProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
