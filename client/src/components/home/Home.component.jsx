import { useState } from "react";
import CreateAccount from "./components/createAccount/CreateAccount.component";
import Spinner from "../../components/spinner/Spinner.component";
import FollowMe from "./components/followMe/FollowMe.component";
import AccountsList from "./components/accountsList";
import {
  ACTIONS_TYPES,
  useAccountContext,
  useAccountDispatchContext,
} from "./context/home.context";
import "./home.styles.scss";
import useHomeServices from "../../services/home/home.services";
import "./home.styles.mobile.scss";
import { FcSearch } from "react-icons/fc";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { filterInput, open } = useAccountContext();

  const { CreateAccountIcon, toggleCreateAccount, handleInput } =
    useHomeServices();

  return (
    <div className="Home">
      <div className="home-layout">
        <div className="left-toolbar">
          {!isLoading && CreateAccountIcon}
          <div className="follow-me">
            <FollowMe />
          </div>
        </div>
        <div className="accounts-area">
          <div className="accounts-top-toolbar">
            <div className="search-account">
              <input
                className="search-account-input"
                type="text"
                placeholder="Search"
                onChange={handleInput}
                value={filterInput}
              />
              <FcSearch className="search-account-react-icon" />
            </div>
          </div>
          <div className="accounts-gallery">
            <AccountsList setIsLoading={setIsLoading} />
          </div>
        </div>
      </div>
      {open && (
        <CreateAccount
          toggleCreateAccountComponent={toggleCreateAccount}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
      {isLoading && <Spinner />}
    </div>
  );
};

export default Home;
