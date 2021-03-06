// Copyright ©️ 2016 - Ryan Collins
// admin@ryancollins.io
// http://www.ryancollins.io
// Open sourced under the MIT license
// See LICENSE.md file for details

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Button from 'grommet-udacity/components/Button';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Article from 'grommet-udacity/components/Article';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      user,
    } = this.props;
    return (
      <Section align="center" justify="center" className={styles.landing}>
        <Hero
          responsive={false}
          separator
          backgroundImage="http://s3.amazonaws.com/content.officeleasecenter.com/production/ckeditor_assets/pictures/1672/original_codecademy.jpg"
        >
          <Box
            align="center"
            justify="center"
            pad="none"
            className={styles.headlineBox}
            size={{ width: { max: 'large' } }}
          >
            <Headline
              strong
              size="large"
              className={styles.heroTitle}
            >
              Meetup Event Planner
            </Headline>
          </Box>
        </Hero>
        <Section>
          <Box
            align="center"
            justify="center"
            className={styles.articleBox}
            size={{ width: { max: 'large' } }}
            pad={{ horizontal: 'large', vertical: 'large' }}
          >
            <Heading tag="h1" align="center">
              Meetup Events
            </Heading>
            <Article align="center" className={styles.article}>
              <Paragraph className={styles.paragraph}>
                Welcome to the meetup event planner application!
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                This is a demo app built with React, GraphQL and Ruby on Rails.
                It was built as the first project for the SWND and showcases best practices for
                building interactive web forms.
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                The application also showcases component-oriented design, immutable architecture,
                state management, colocated GraphQL queries and much more!
              </Paragraph>
              <Heading tag="h3" align="center" className={styles.paragraph}>
                About the Developer
              </Heading>
              <Box
                size="medium"
                pad={{ horizontal: 'medium', vertical: 'medium' }}
                align="center"
                justify="center"
              >
                <img
                  className={styles.avatar}
                  src="https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true"
                />
                <Heading tag="h3" align="center">
                  Ryan Collins
                </Heading>
                <Heading tag="h4" align="center">
                  Full Stack and UI Engineer
                </Heading>
                <Heading tag="h5" align="center">
                  Experienced engineer specializing in implementing cutting-edge technologies
                  in a multitude of domains, including Front End web, UI / UX, et. al.
                </Heading>
              </Box>
            </Article>
            <Box direction="column" justify="between" className={styles.buttonBox}>
              <Button label="View Events" href="/events" />
              {user && !user.authToken && <Button label="Sign Up" href="/signup" />}
              {user && !user.authToken && <Button label="Log In" href="/login" />}
            </Box>
          </Box>
        </Section>
      </Section>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const Container = cssModules(Landing, styles);

export default connect(
  mapStateToProps,
  null,
)(Container);
