import FormFieldsGenerator from "../components/utils/FormFieldsGenerator";

function SignUpForm() {
  return (
    <form className="ui large form">
      <div className="ui stacked segment">
        <FormFieldsGenerator
          iconName="user icon"
          name="name"
          placeholder="Name:"
        />
        <FormFieldsGenerator
          iconName="user outline icon"
          name="surname"
          placeholder="Surname:"
        />
        <FormFieldsGenerator
          iconName="lock icon"
          name="password"
          placeholder="Password:"
        />
        <FormFieldsGenerator
          iconName="lock icon"
          name="rewritePassword"
          placeholder="Rewrite password:"
        />
        <FormFieldsGenerator
          iconName="mail icon"
          name="email"
          placeholder="E-mail adress"
        />
        <FormFieldsGenerator
          iconName="home icon"
          name="city"
          placeholder="City"
        />
        <div className="ui fluid large teal submit button">Login</div>
      </div>

      <div className="ui error message" />
    </form>
  );
}

export default SignUpForm;
