import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

interface Repository {
  name: string;
  description?: string;
  html_url: string;
}

const url = 'https://api.github.com/users/diego3g/repos';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // Empty dependency array means this effect will only run once.
  // No dependency array means this effect will run after every render.
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem
              key={repository.name}
              repository={repository}
            />
          );
        })}
      </ul>
    </section>
  );
}
