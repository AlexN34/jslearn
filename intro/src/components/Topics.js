import React from 'react';
import { Link, Route } from 'react-router-dom';


// match is prop that react router passes to anything it renders
function Topic({ match }) {
  return <h3>{match.params.topicId}</h3>;
}


export default function Topics({ match }) {
  return (
    <div>
      {/* Match.url for links - keeps absolute values */}
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>
      <hr />
      {/* Match.path for routes - keeps dynamic IDs for passinto child components */}
      {/* Can return your own component in render property if we want to customise behaviour inline */}
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic</h3>}
      />
    </div>
  );
}

// Tells react router what type to expect?
Topics.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired,
  }).isRequired,
}

Topic.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired,
  }).isRequired,
}