import React from 'react';
import Button from './components/Button/button';


const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
     <Button btnType="link" href="https://www.baidu.com" target="_blank">按钮</Button>
     <Button size="sm" disabled={ true } btnType="link" href="https://www.baidu.com" target="_blank">按钮</Button>
     <Button btnType="primary" size="lg">撒打算的确定</Button>
    </div>
  );
}

export default App;
