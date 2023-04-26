import * as React from "react";
import ListItem from "./ListItem";
import { Product } from "../interfaces";
import { Form, Table } from "react-bootstrap";

type Props = {
  items: Product[];
  search?: string;
  disable?: boolean;
};

function currencyFormat(type: string, value: number) {
  let reformat = "";
  if (type === "real") {
    reformat = "R$ " + Math.trunc(value) + "," + value.toFixed(2).split(".")[1];
  }
  return reformat;
}

const List = ({ items, search, disable = true }: Props) => (
  // <ul>
  //   {items.map((item) => (
  //     <li key={item.id}>
  //       <ListItem data={item} />
  //     </li>
  //   ))}
  // </ul>
  <>
    <Table hover striped="columns">
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {items
          .filter((item) => {
            if (item.type === search) return true;
          })
          .map((item, i) => (
            <tr key={i}>
              <td className="flex justify-center">
                <Form.Check
                  inline
                  className="m-0"
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-2`}
                  disabled={!disable}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{currencyFormat("real", item.price)}</td>
            </tr>
          ))}

        {/* <tr>
          <td className="flex justify-center">
            <Form.Check
              inline
              className="m-0"
              name="group1"
              type={"radio"}
              id={`inline-radio-1`}
            />
          </td>
          <td>Pizza Calabreza</td>
          <td>Otto</td>
          <td>R$38,20</td>
        </tr>
        <tr>
          <td className="flex justify-center">
            <Form.Check
              inline
              className="m-0"
              name="group1"
              type={"radio"}
              id={`inline-radio-2`}
            />
          </td>
          <td>Portuguesa</td>
          <td>Thornton</td>
          <td>R$42,90</td>
        </tr>
        <tr>
          <td className="flex justify-center">
            <Form.Check
              inline
              className="m-0"
              name="group1"
              type={"radio"}
              id={`inline-radio-3`}
            />
          </td>
          <td colSpan={2}>Vegetariana</td>
          <td>R$34,00</td>
        </tr> */}
      </tbody>
    </Table>
  </>
);

export default List;
