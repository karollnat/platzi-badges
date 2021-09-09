import React from "react";

import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
import Badge from "../components/Badge";
//import Navbar from '../components/Navbar';
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import Gravatar from "../components/Gravatar";
import md5 from "md5";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  // state = { form:{} }; //inicialemos un estado vacio con una propiedad FORM qu esta vacio

  // handleChange = e => {
  //     //copia del estado del form
  //     const nextForm = this.state.form
  //     nextForm [e.target.name] = e.target.value
  //     this.setState({
  //         form: nextForm,
  //     });
  // };
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  //Captura el evento del envio de datos
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.state.form.avatarUrl = `https://es.gravatar.com/avatar/${md5(
      this.state.form.email
    )}?d=identicon`;

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://s.gravatar.com/avatar/5d038130bf2d14b6df29a7a3a2d77275?s=80"
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
