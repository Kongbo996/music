import React, { useState } from 'react';
import { Toast } from 'antd-mobile';
import cookie from 'react-cookies';
import { getLoginPhone } from '../../request/api';
import './index.scss';
function Login(props) {
  const { history } = props;
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = () => {
    getLoginPhone(phone, password).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        Toast.success('登陆成功', 1);
        cookie.save('userInfo', res)
        history.push('/recommend');
      }
    });
  };
  return (
    <div className="login-container">
      <div className="login-item">
        <input
          type="phone"
          onChange={(val) => {
            const str = val.target.value.replace(/\s+/g, '');
            setPhone(+str);
          }}
          placeholder="请输入手机号"
        />
      </div>
      <div className="login-item">
        <input
          type="password"
          onChange={(val) => {
            const str = val.target.value.replace(/\s+/g, '');
            setPassword(str);
          }}
          placeholder="请输入密码"
        />
      </div>
      <button className="login-btn" onClick={handleLogin}>
        登录
      </button>
    </div>
  );
}
export default Login;
