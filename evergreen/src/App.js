import React from 'react';
import { Pane, Button, Paragraph, Heading, Menu, Link } from 'evergreen-ui';


const App = () => (
  <Pane display="flex" padding={16} borderRadius={3} style={{ flexDirection: "column", minHeight: '100vh' }} >
    <Pane display="flex" padding={20}>
      <Heading is="h1" size={900}>Header</Heading>
      <Pane display="flex" flex={1} justifyContent="space-between" padding={20}>
          <Link>Menu 1</Link>
          <Link>Menu 2</Link>
          <Link>Menu 3</Link>
      </Pane>
    </Pane>
    <Pane display="flex" flex={1} >
      <Pane border="default" padding={20}>
        <Heading is="h1" size={700}>Sidebar</Heading>
        <Menu>
          <Menu.Item>Menu 1</Menu.Item>
          <Menu.Item>Menu 2</Menu.Item>
          <Menu.Item>Menu 3</Menu.Item>
        </Menu>
      </Pane>
      <Pane border="default" padding={20} flex={1}>
        <Heading is="h1" size={700}>Main</Heading>
        <Pane padding={20} border="default">
          <Heading is="h2" size={800} >Hero</Heading>
          <Paragraph>Some text and a...</Paragraph>
          <Button>Button</Button>
        </Pane>
      </Pane>       
    </Pane>
    <Pane padding={50}>
      <Heading>Footer</Heading>
    </Pane>
  </Pane>
);

export default App;
