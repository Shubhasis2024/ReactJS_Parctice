import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <form classname="row g-3 needs-validation" novalidate>
  <div classname="col-md-4">
    <label for="validationCustom01" classname="form-label">First name</label>
    <input type="text" classname="form-control" id="validationCustom01" value="Mark" required/>
    <div classname="valid-feedback">
      Looks good!
    </div>
  </div>
  <div classname="col-md-4">
    <label for="validationCustom02" classname="form-label">Last name</label>
    <input type="text" classname="form-control" id="validationCustom02" value="Otto" required/>
    <div classname="valid-feedback">
      Looks good!
    </div>
  </div>
  <div classname="col-md-4">
    <label for="validationCustomUsername" classname="form-label">Username</label>
    <div classname="input-group has-validation">
      <span classname="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" classname="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div classname="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div classname="col-md-6">
    <label for="validationCustom03" classname="form-label">City</label>
    <input type="text" classname="form-control" id="validationCustom03" required/>
    <div classname="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div classname="col-md-3">
    <label for="validationCustom04" classname="form-label">State</label>
    <select classname="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div classname="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div classname="col-md-3">
    <label for="validationCustom05" classname="form-label">Zip</label>
    <input type="text" classname="form-control" id="validationCustom05" required/>
    <div classname="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div classname="col-12">
    <div classname="form-check">
      <input classname="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label classname="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div classname="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div classname="col-12">
    <button classname="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </>
  );
}
// function APP2 ()
// {
//   return(
//     <>
//     <nav classname="navbar navbar-expand-lg bg-body-tertiary">
//   <div classname="container-fluid">
//     <a classname="navbar-brand" href="#">Navbar</a>
//     <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span classname="navbar-toggler-icon"></span>
//     </button>
//     <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div classname="navbar-nav">
//         <a classname="nav-link active" aria-current="page" href="#">Home</a>
//         <a classname="nav-link" href="#">Features</a>
//         <a classname="nav-link" href="#">Pricing</a>
//         <a classname="nav-link disabled" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>
//     </>
//   );
// }
  
 
export default App;

