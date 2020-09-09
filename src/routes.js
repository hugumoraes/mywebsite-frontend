import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import strapi from './services/strapi';

import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function Teste() {
  return <h1>Teste</h1>;
}

export default function Routes() {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    strapi.get('/').then((response) => setBlogposts(response.data));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact-me" component={Contact} />

        {blogposts.map((blogpost) => (
          <Route
            key={blogpost._id}
            path={`/${blogpost._id}`}
            component={Teste}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
