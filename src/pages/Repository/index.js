import Redirect from "../../components/Redirect";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { Menu } from '@mui/material';


export default function Repository() {
  const navigate = useNavigate();

  const { token } = useAuth();
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState({ name: '', avatar: '', qtdRepos: 0 })

  const getRepos = async () => {
    const json = JSON.parse(atob(token));
    let result = await fetch(`${json.repos_url}`)
    result = await result.json();
    setProfile({ name: result[0].owner.login, avatar: result[0].owner.avatar_url, qtdRepos: result.length })
    console.log(result);
    setRepos(result);
  }

  useEffect(() => {
    getRepos();

  }, [])
  return (
    <div>
      <Redirect>
        <Header avatar={profile.avatar} qtdRepos={profile.qtdRepos} />
        <h1>Repository</h1>
        <>
          {(repos.length > 0) && repos.map(item => (
            <p><a target="_blank" href={item.html_url}>{item.name}</a></p>
          ))}
        </>
      </Redirect>
    </div>
  );
}
