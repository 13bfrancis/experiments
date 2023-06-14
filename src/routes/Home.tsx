import { Form, useActionData } from "react-router-dom";
import { type action } from "../router";

export const Home = () => {
  const errors = useActionData() as Awaited<ReturnType<typeof action>>;

  console.log("Home page", errors);

  return (
    <Form method="post">
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        First Name
        <input type="text" name="firstName" />
      </label>
      <label>
        Last Name
        <input type="text" name="lastName" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
};
