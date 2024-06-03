import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import LevelView from './components/levelview';
function getItem(label, key, children, type) {
  return{
    key,
    children,
    label,
    type,
  };
}

const App = () => {
  const [curlevels, setLevels] = useState([])
  const [curid, setid] = useState(10)
  const [curdata, setdata] = useState(null)

  const fetchsmth = () => {
    axios.get('http://127.0.0.1:5000/api/levels').then(r => {
      const all_levelsResponse = r.data
      const menuItems = [
        getItem('Список уровней','g1',
          all_levelsResponse.map(c => {
            return {label: c.id, key: c.id}
          }),'group'
        )
      ]
      setLevels(menuItems)
    })
  }

  const fetchlevel = () => {
    axios.get(`http://127.0.0.1:5000/api/levels/${curid}`).then(r => {
      setdata(r.data)
    })   
  }

  useEffect(() => {
    fetchsmth()
  }, []);

  useEffect(() => {
    fetchlevel()
  }, [curid])

  const onClick = (e) => {
    setid(e.key)
  };

  return (
    <div className="flex">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={curlevels}
        className="h-screen overflow-scroll"
      />
      {<div className="mx-auto my-auto">
        <LevelView currency={curdata}/>
      </div>}
    </div>
  );
};
export default App;