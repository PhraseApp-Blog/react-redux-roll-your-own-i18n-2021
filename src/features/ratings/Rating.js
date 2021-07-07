import { Columns } from "react-bulma-components";

function _rating(rating) {
  const result = [];

  for (let i = 0; i < rating; i += 1) {
    result.push("⭐️");
  }

  return result.join(" ");
}

export default function Rating({ name, rating }) {
  return (
    <Columns>
      <Columns.Column>{name}</Columns.Column>
      <Columns.Column>{_rating(rating)}</Columns.Column>
    </Columns>
  );
}
