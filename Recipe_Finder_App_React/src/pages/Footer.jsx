import React from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  List,
  Icon,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "5em 0", backgroundColor: "#333" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms of Service</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Recipes</List.Item>
                <List.Item as="a">Cooking Tips</List.Item>
                <List.Item as="a">Meal Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Follow Us" />
              <List link inverted>
                <List.Item>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="twitter" />
                    Twitter
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="facebook" />
                    Facebook
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="instagram" />
                    Instagram
                  </a>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="Our Address" />
              <p>
                1234 Recipe Street
                <br />
                Food City, FC 12345
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
