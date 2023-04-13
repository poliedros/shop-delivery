import React from "react";
import Link from "next/link";

import { Product } from "../interfaces";

type Props = {
  data: Product;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}:{data.name}
  </Link>
);

export default ListItem;
