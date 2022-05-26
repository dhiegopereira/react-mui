import Redirect from "../../components/Redirect";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Repository() {

  const { token, logout } = useAuth();
  const [repos, setRepos] = useState([])

  const getRepos = async () => {
    const json = await JSON.parse(atob(token));
    let result = await fetch(`${json.repos_url}`)
    result = await result.json();
    setRepos(result);
  }

  useEffect(() => {
    getRepos();

  }, [])

  return (
    <div>
      <Redirect>
        <button onClick={logout}>Voltar</button>
        <h1>Repository</h1>
        <>
          {(repos.length > 0) && repos.map(item => (
            <p key={item.name}><a target="_blank" href={item.html_url} rel="noreferrer">{item.name}</a></p>
          ))}
        </>
      </Redirect>
    </div>
  );
}
