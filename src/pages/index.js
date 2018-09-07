import React from 'react';
import PropTypes from 'prop-types';

import Content, {HTMLContent} from '../components/Content';
import {graphql} from 'gatsby';

import Layout from '../components/layout';

class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {content, contentComponent} = this.props;
    const PageContent = contentComponent || Content;
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

// export default IndexPageTemplate;

const IndexPage = ({data}) => {
  const {allMarkdownRemark} = data;

  return <IndexPageTemplate contentComponent={HTMLContent} title={'home'} content={allMarkdownRemark.edges[0].node.html} />;
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const indexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "home"}}}) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
