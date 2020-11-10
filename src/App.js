import React from "react";
import { useForm } from "react-hook-form";
import isEmail from 'validator/lib/isEmail';

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
  },
  input: {
    width: "100%",
  },
};

function App() {
  const { register, handleSubmit, errors, formState } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div style={styles.container}>
      <h4>My Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          ref={register({
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern: /^[a-zA-Z]+$/i,
          })}
          placeholder="Username"
          style={{...styles.input, borderColor: errors.username && "red"}}
        />
        <input
          name="email"
          ref={register({
            required: true,
            validate: (input) => isEmail(input),
          })}
          placeholder="Email"
          style={{...styles.input, borderColor: errors.email && "red"}}
        />
        <input
          name="password"
          ref={register({
            minLength: 6,
          })}
          placeholder="Password"
          style={{...styles.input, borderColor: errors.password && "red"}}
        />
        <button type="submit" disabled={formState.isSubmitting}>Submit</button>
      </form>
    </div>
  );
}

export default App;
