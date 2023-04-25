import Link from "next/link";
import Layout from "../components/Layout";

import {
  Accordion,
  Badge,
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import Icon from "../components/icons/Icon";
import Cylinder3d from "../components/Cylinder3D";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Animation from "../components/Animation";
import List from "@/components/List";
import { sampleUserData } from "@/utils/sample-data";
import { Product, DeliveryList } from "@/interfaces";

const IndexPage = () => {
  const [type, setType] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow(tp: string) {
    setType(tp);
    setIShow(false);
    deliveryList.products.push({
      id: "001",
      name: "",
      type: tp,
      price: 0,
      description: "",
      observation: "",
      quantity: 0,
    });
    setDeliveryList(deliveryList);
    setShow(true);
    console.log(deliveryList);
  }

  const [iShow, setIShow] = useState(false);
  const handleIClose = () => setIShow(false);
  const handleIShow = () => setIShow(true);

  const [deliveryList, setDeliveryList] = useState<DeliveryList>({
    id: "001",
    products: [],
    paymentMethod: "",
    deliveryPerson: "",
    total: 0,
  });
  const [quantity, setQuantity] = useState(1);
  const [half, setHalf] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  const items: Product[] = sampleUserData;

  useEffect(() => {
    setDeliveryList(deliveryList);
  }, [deliveryList.products.length]);

  return (
    <Layout title="Compras Delivery">
      <div className="slide-top absolute bottom-0 flex justify-center w-100">
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light" onClick={handleIShow}>
            {Icon("gi", "GiKnifeFork", "24px")}
          </Button>
          <Button variant="outline-light" onClick={() => handleShow("pizza")}>
            {Icon("gi", "GiFoodTruck", "24px")}
          </Button>
          <Button variant="outline-light">
            {Icon("gi", "GiCook", "24px")}
          </Button>
        </ButtonGroup>
      </div>
      {/* <h1>Hello Next.js 👋</h1> */}
      {/* <Canvas>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Cylinder3d position={[-1.2, 0, 0]} />
        <Cylinder3d position={[1.2, 0, 0]} />
      </Canvas> */}
      {/* <p>
        <Link href="/about">About</Link>
      </p> */}
      <div className="flex">
        <Animation /> {/* create={create} setCreate={setCreate} */}
      </div>

      <Modal
        show={iShow}
        size={"sm"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleIClose}
        className="rounded-modal"
      >
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="outline-info"
            className="!flex justify-center"
            onClick={() => handleShow("pizza")}
          >
            {Icon("gi", "GiPizzaSlice", "32px")}
          </Button>
          <Button
            variant="outline-light"
            className="!flex justify-center"
            onClick={() => handleShow("sobremesa")}
          >
            {Icon("gi", "GiPieSlice", "32px")}
          </Button>
          <Button
            variant="outline-info"
            className="!flex justify-center"
            onClick={() => handleShow("bebida")}
          >
            {Icon("gi", "GiGlassShot", "32px")}
          </Button>
        </ButtonGroup>
      </Modal>

      <Modal show={show} size={"xl"} onHide={handleClose}>
        <Modal.Header closeButton>
          {" "}
          {/*closeButton*/}
          <Modal.Title>
            <div className="p-[6px] flex flex-wrap items-center">
              <Button variant="outline-warning" className="!p-[16px] mr-3 my-2">
                {Icon("md", "MdArrowBackIosNew")}
              </Button>
              {/* <Button
              variant="outline-primary"
              className="!p-[16px] !flex items-center mr-3"
            >
              {Icon("fa", "FaPlus")} &nbsp; Produto
            </Button> */}
              <DropdownButton
                id="dropdown-basic-button"
                variant="primary"
                className="mr-3 my-2"
                title={"Adicionar Produto"}
              >
                <Dropdown.Item
                  href="#/action-1"
                  className="!flex items-center m-1"
                  onClick={() => {
                    deliveryList.products.push({
                      id: "001",
                      name: "",
                      type: "pizza",
                      price: 0,
                      description: "",
                      observation: "",
                      quantity: 0,
                    });
                    setDeliveryList(deliveryList);
                  }}
                >
                  {Icon("gi", "GiPizzaSlice")} &nbsp; Pizza
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="!flex items-center m-1"
                  onClick={() => {
                    deliveryList.products.push({
                      id: "001",
                      name: "",
                      type: "sobremesa",
                      price: 0,
                      description: "",
                      observation: "",
                      quantity: 0,
                    });
                    setDeliveryList(deliveryList);
                  }}
                >
                  {Icon("gi", "GiPieSlice")} &nbsp; Sobremesa
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="!flex items-center m-1"
                  onClick={() => {
                    deliveryList.products.push({
                      id: "001",
                      name: "",
                      type: "bebida",
                      price: 0,
                      description: "",
                      observation: "",
                      quantity: 0,
                    });
                    setDeliveryList(deliveryList);
                  }}
                >
                  {Icon("gi", "GiGlassShot")} &nbsp; Bebida
                </Dropdown.Item>
              </DropdownButton>
              <>
                {deliveryList.products.map((p, k) => {
                  if (p.type === "pizza")
                    return (
                      <Button
                        key={k}
                        variant="outline-info"
                        className="!p-[16px] !flex items-center mr-3 my-2"
                        onClick={() => setCurrentProduct(k)}
                      >
                        {Icon("gi", "GiPizzaSlice", "26px")}
                      </Button>
                    );
                  if (p.type === "sobremesa")
                    return (
                      <Button
                        key={k}
                        variant="outline-info"
                        className="!p-[16px] !flex items-center mr-3 my-2"
                        onClick={() => setCurrentProduct(k)}
                      >
                        {Icon("gi", "GiPieSlice", "26px")}
                      </Button>
                    );
                  if (p.type === "bebida")
                    return (
                      <Button
                        key={k}
                        variant="outline-info"
                        className="!p-[16px] !flex items-center mr-3 my-2"
                        onClick={() => setCurrentProduct(k)}
                      >
                        {Icon("gi", "GiGlassShot", "26px")}
                      </Button>
                    );
                  return <></>;
                })}
              </>
              {/* <Button
                variant="outline-info"
                className="!p-[16px] !flex items-center mr-3 my-2"
              >
                {Icon("gi", "GiPieSlice")}
              </Button>
              <Button
                variant="outline-info"
                className="!p-[16px] !flex items-center mr-3 my-2"
              >
                {Icon("gi", "GiGlassShot")}
              </Button> */}
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Accordion className="mb-6">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {deliveryList.products.length > 0
                  ? deliveryList.products[currentProduct].type === "pizza"
                    ? Icon("gi", "GiPizzaSlice", "32px")
                    : deliveryList.products[currentProduct].type === "sobremesa"
                    ? Icon("gi", "GiPieSlice", "32px")
                    : deliveryList.products[currentProduct].type === "bebida"
                    ? Icon("gi", "GiGlassShot", "32px")
                    : null
                  : null}{" "}
                &nbsp;{" "}
                {deliveryList.products.length > 0
                  ? deliveryList.products[currentProduct].type === "pizza"
                    ? "Pizza"
                    : deliveryList.products[currentProduct].type === "sobremesa"
                    ? "Sobremesa"
                    : deliveryList.products[currentProduct].type === "bebida"
                    ? "Bebida"
                    : null
                  : null}
              </Accordion.Header>
              <Accordion.Body>
                <List
                  items={items}
                  search={
                    deliveryList.products.length > 0
                      ? deliveryList.products[currentProduct].type
                      : ""
                  }
                />
              </Accordion.Body>
            </Accordion.Item>
            {deliveryList.products.length > 0 ? (
              deliveryList.products[currentProduct].type === "pizza" ? (
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {Icon("gi", "GiPizzaCutter", "32px")} &nbsp; Segunda metade
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      inline
                      className="mb-3"
                      label="Desejo pizza com duas metades"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                      onChange={() => setHalf(!half)}
                    />
                    <List items={items} search={type} disable={half} />
                  </Accordion.Body>
                </Accordion.Item>
              ) : (
                <></>
              )
            ) : null}

            {/* <Accordion.Item eventKey="2">
              <Accordion.Header>
                {Icon("gi", "GiPieSlice", "24px")} &nbsp; Sobremesa
              </Accordion.Header>
              <Accordion.Body>
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
                    <tr>
                      <td className="flex justify-center">
                        <Form.Check
                          inline
                          className="m-0"
                          name="group1"
                          type={"radio"}
                          id={`inline-radio-1`}
                        />
                      </td>
                      <td>Fatia de Torta de Maça</td>
                      <td>Otto</td>
                      <td>R$13,50</td>
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
                      <td>Quadrado de Cocada</td>
                      <td>Thornton</td>
                      <td>R$8,90</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {Icon("gi", "GiGlassShot", "24px")} &nbsp; Bebida
              </Accordion.Header>
              <Accordion.Body>
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
                    <tr>
                      <td className="flex justify-center">
                        <Form.Check
                          inline
                          className="m-0"
                          name="group1"
                          type={"radio"}
                          id={`inline-radio-1`}
                        />
                      </td>
                      <td>Coca-Cola 500ml</td>
                      <td>Otto</td>
                      <td>R$5,90</td>
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
                      <td>Água Mineral</td>
                      <td>Thornton</td>
                      <td>R$4,30</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
          <Row className="flex items-center">
            <Col sm={8}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Observações</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
            <Col sm={4} className="flex flex-column items-center">
              <Col>
                <InputGroup className="mb-3 !rounded-full">
                  <Button
                    variant="outline-danger"
                    id="button-addon1"
                    onClick={() =>
                      quantity > 0 ? setQuantity(quantity - 1) : null
                    }
                  >
                    {Icon("fa", "FaMinus", "14px")}
                  </Button>
                  <Form.Control
                    className="!p-[16px]"
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    value={quantity}
                    disabled
                  />
                  <Button
                    variant="outline-success"
                    id="button-addon1"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    {Icon("fa", "FaPlus", "14px")}
                  </Button>
                </InputGroup>
              </Col>
              <Col className="flex justify-end flex-column items-center">
                <h6 className="uppercase tracking-widest">Subtotal</h6>
                <h2>
                  <Badge bg="primary">R$0,00</Badge>
                </h2>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full !flex justify-center">
            <Button
              variant="outline-success"
              className="!p-[16px] !flex items-center mr-3"
              onClick={handleClose}
            >
              {Icon("md", "MdChecklist", "24px")} &nbsp; Confirmar Lista
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          </div>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default IndexPage;
