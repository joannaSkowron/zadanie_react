import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../style/layout/Content.css';


const Content = () => {
  return (
    <main className='content-container'>
      <div>content page</div>
      <Switch>

        {/* <Route path='' component={ } />
        <Route path='' component={ } />
        <Route path='' component={ } /> */}
      </Switch>

    </main>
  );
}

export default Content; 