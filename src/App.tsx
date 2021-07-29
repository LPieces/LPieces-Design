import React from 'react';
import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // fas全部icon引入
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
library.add(faUser);

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Icon icon="user" theme="success" size="1x" />
      <Icon icon="user" theme="primary" size="2x" />
      <Button btnType="link" href="https://www.baidu.com" target="_blank">按钮</Button>
      <Button size="sm" disabled={ true } btnType="link" href="https://www.baidu.com" target="_blank">按钮</Button>
      <Button btnType="primary" size="lg">确定</Button>
      <Menu mode="horizontal" defaultIndex="0">
        <MenuItem index="0">123</MenuItem>
        <MenuItem index="1">123</MenuItem>
        <MenuItem index="2">123</MenuItem>
      </Menu>
      <Menu mode="vertical" defaultIndex="0">
        <MenuItem index="0">123</MenuItem>
        <MenuItem index="1">123</MenuItem>
        <MenuItem index="2">123</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
