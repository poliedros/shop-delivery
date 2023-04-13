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
import { useState } from "react";
import Animation from "../components/Animation";

const IndexPage = () => {
  const [show, setShow] = useState(false);
  const [create, setCreate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="slide-top absolute bottom-0 flex justify-center w-100">
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light" onClick={handleShow}>
            {Icon("gi", "GiKnifeFork", "24px")}
          </Button>
          <Button variant="outline-light">
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

      <Modal show={show} size={"xl"} onHide={handleClose}>
        <div className="flex justify-between p-[16px]">
          <Modal.Header>
            {" "}
            {/*closeButton*/}
            <Modal.Title>
              {/* <Row> */}
              <Col sm={10} className="!flex items-center w-auto">
                <Button variant="outline-warning" className="!p-[16px] mr-3">
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
                  className="mr-3"
                  title={"Adicionar Produto"}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="!flex items-center m-1"
                  >
                    {Icon("gi", "GiPizzaSlice")} &nbsp; Pizza
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="!flex items-center m-1"
                  >
                    {Icon("gi", "GiPieSlice")} &nbsp; Sobremesa
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="!flex items-center m-1"
                  >
                    {Icon("gi", "GiGlassShot")} &nbsp; Bebida
                  </Dropdown.Item>
                </DropdownButton>
                <Button
                  variant="outline-info"
                  className="!p-[16px] !flex items-center mr-3"
                >
                  {Icon("gi", "GiPieSlice")}
                </Button>
                <Button
                  variant="outline-info"
                  className="!p-[16px] !flex items-center mr-3"
                >
                  {Icon("gi", "GiGlassShot")}
                </Button>
              </Col>

              {/* </Row> */}
            </Modal.Title>
          </Modal.Header>
          <div className="flex items-center justify-end">
            <Button
              variant="outline-danger"
              className="!p-[16px] !flex items-center mr-3"
              onClick={handleClose}
            >
              {Icon("md", "MdClose")}
            </Button>
          </div>
        </div>
        <Modal.Body>
          <div className="flex justify-center mb-3"></div>
          <Accordion className="mb-6">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {Icon("gi", "GiPizzaSlice", "24px")} &nbsp; Pizza
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
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {Icon("gi", "GiPizzaCutter", "24px")} &nbsp; Segunda metade
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  inline
                  className="mb-3"
                  label="Desejo pizza com duas metades"
                  type={"checkbox"}
                  id={`inline-checkbox-1`}
                />
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
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
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
            </Accordion.Item>
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
                  <Button variant="outline-danger" id="button-addon1">
                    {Icon("fa", "FaMinus", "14px")}
                  </Button>
                  <Form.Control
                    className="!p-[16px]"
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    value="1"
                    disabled
                  />
                  <Button variant="outline-success" id="button-addon1">
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
