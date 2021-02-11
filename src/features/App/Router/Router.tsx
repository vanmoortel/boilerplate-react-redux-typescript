import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SuspenseLoading from 'src/components/SuspenseLoading';
import { selectLanguage } from 'src/features/Settings/selectors';

const Home = lazy(() => import('src/features/Home'));
const Counter = lazy(() => import('src/features/Counter'));

/*
 *
 * Router with all route available
 *
 */
const Router = () => {
  const language = useSelector(selectLanguage);

  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoading language={language} />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
