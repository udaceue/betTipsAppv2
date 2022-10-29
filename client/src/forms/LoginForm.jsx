import FormFieldsGenerator from "../components/utils/FormFieldsGenerator";

function LoginForm() {
  return (
    <form className="ui large form">
      <div className="ui stacked segment">
        <FormFieldsGenerator
          iconName="user icon"
          name="email"
          placeholder="E-mail adress"
        />
        <FormFieldsGenerator
          iconName="lock icon"
          name="password"
          placeholder="Password"
        />

        <div className="ui fluid large teal submit button">Login</div>
      </div>

      <div className="ui error message" />
    </form>
  );
}
export default LoginForm;
