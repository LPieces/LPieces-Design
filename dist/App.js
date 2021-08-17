import React from 'react';
import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Input from './components/Input/input';
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(Icon, { color: "#989898", icon: "user", size: "1x" }),
        React.createElement(Icon, { icon: "user", theme: "primary", size: "2x" }),
        React.createElement(Button, { btnType: "link", href: "https://www.baidu.com", target: "_blank" }, "\u6309\u94AE"),
        React.createElement(Button, { size: "sm", disabled: true, btnType: "link", href: "https://www.baidu.com", target: "_blank" }, "\u6309\u94AE"),
        React.createElement(Button, { btnType: "primary", size: "lg" }, "\u786E\u5B9A"),
        React.createElement(Menu, { mode: "horizontal", defaultIndex: "0" },
            React.createElement(MenuItem, { index: "0" }, "123"),
            React.createElement(MenuItem, { index: "1" }, "123"),
            React.createElement(MenuItem, { index: "2" }, "123"),
            React.createElement(SubMenu, { title: "\u4E0B\u62C9\u83DC\u5355" },
                React.createElement(MenuItem, null, "1231231231212"),
                React.createElement(MenuItem, null, "1231231231232"),
                React.createElement(MenuItem, null, "1231231231233"))),
        React.createElement(Menu, { mode: "vertical", defaultIndex: "0" },
            React.createElement(MenuItem, { index: "0" }, "123"),
            React.createElement(MenuItem, { index: "1" }, "123"),
            React.createElement(MenuItem, { index: "2" }, "123"),
            React.createElement(SubMenu, { title: "\u4E0B\u62C9\u83DC\u5355" },
                React.createElement(MenuItem, null, "1"),
                React.createElement(MenuItem, null, "2"),
                React.createElement(MenuItem, null, "3"))),
        React.createElement("div", { style: { width: '500px', padding: '20px' } },
            React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165" }))));
};
export default App;
