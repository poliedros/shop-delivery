import Link from "next/link";
import Layout from "../components/Layout";
import { Button, ButtonGroup } from "react-bootstrap";
import Icon from "../components/icons/Icon";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">{Icon("md", "MdRestaurant")}</Button>
      <Button variant="secondary">{Icon("md", "MdRestaurant")}</Button>
      <Button variant="secondary">{Icon("md", "MdPermContactCalendar")}</Button>
    </ButtonGroup>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default AboutPage;
