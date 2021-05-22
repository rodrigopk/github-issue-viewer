import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import { EnvironmentService } from './libs/config';
import { QueryProvider, ReactQueryDevtools } from './libs/query';
import { appTheme, ChakraProvider } from './libs/ui';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <ChakraProvider theme={appTheme}>
        <App />
        {EnvironmentService.isReactQueryDevtoolsEnabled() && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </ChakraProvider>
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
