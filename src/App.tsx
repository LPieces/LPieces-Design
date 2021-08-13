import React from 'react';
import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Input from './components/Input/input';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Icon color="#989898" icon="user" size="1x" />
      <Icon icon="user" theme="primary" size="2x" />
      <Button btnType="link" href="https://www.baidu.com" target="_blank">按钮</Button>
      <Button size="sm" disabled={ true } btnType="link" href="https://www.baidu.com" target="_blank">按钮</Button>
      <Button btnType="primary" size="lg">确定</Button>
      <Menu mode="horizontal" defaultIndex="0">
        <MenuItem index="0">123</MenuItem>
        <MenuItem index="1">123</MenuItem>
        <MenuItem index="2">123</MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem>1231231231212</MenuItem>
          <MenuItem>1231231231232</MenuItem>
          <MenuItem>1231231231233</MenuItem>
        </SubMenu>
      </Menu>
      <Menu mode="vertical" defaultIndex="0">
        <MenuItem index="0">123</MenuItem>
        <MenuItem index="1">123</MenuItem>
        <MenuItem index="2">123</MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
        </SubMenu>  
      </Menu>
      <div style={{ width:'500px', padding: '20px' }}>
      <Input placeholder="请输入" />
      </div>
    </div>
  );
}

export default App;
