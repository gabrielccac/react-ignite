/* eslint-disable react/prop-types */
import '../styles/repositories.css';

export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{ repository.name ?? 'unnamed-repository' }</strong>
      <p>{ repository.description ?? 'No description' }</p> 
      <a href={ repository.html_url } target='_blank' rel="noreferrer">Acessar Repositório</a>
    </li>
  );
}

