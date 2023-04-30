/* eslint-disable react/prop-types */
import '../styles/repositories.css';

interface repositoryItemProps {
  repository: {
    name: string;
    description?: string;
    html_url: string;
  }
}

export function RepositoryItem({repository}: repositoryItemProps) {
  return (
    <li>
      <strong>{ repository.name }</strong>
      <p>{ repository.description ?? 'No description' }</p> 
      <a href={ repository.html_url } target='_blank' rel="noreferrer">Acessar Repositório</a>
    </li>
  );
}

