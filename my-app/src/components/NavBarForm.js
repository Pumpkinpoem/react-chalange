import React from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? (
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <button type="button" onClick={this.handleClick}>Submit</button>
                    </form>
                ) : (
                    <button onClick={this.handleClick}>Login</button>
                )}
            </div>
        );
    }
}

export default NavBarForm;
