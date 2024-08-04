import { Link } from "react-router-dom";
import { Movie } from "../movies/Movie";

interface CreditTableProps {
  movie: Movie;
}

function CreditTable({ movie }: CreditTableProps) {
  return (
    <table className="table table-hover table-light w-50">
      <thead>
        <tr>
          <th>Actor</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movie.credits?.map((credit) => (
          <tr>
            <td>{credit.actor?.name}</td>
            <td>{credit.role}</td>
            <td>
              <Link to={`/movies/detail/${movie.id}/credit/${credit.id}`}>edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CreditTable;
