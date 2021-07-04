import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Button } from "react-bootstrap";

function Google() {
  let [clientId, setClientId] = useState("");
  let [clientAdded, setClientAdded] = useState(false);
  const [googleData, setGoogleData] = useState(null);

  const handleLogin = async (gData) => {
    console.log({ gData });
    setGoogleData(JSON.stringify(gData, undefined, 2));
  };

  const reset = () => {
    setClientAdded(false);
    setGoogleData(null);
    setClientId(null);
  };

  return (
    <>
      <div className="oauth__content">
        <h2>This is for testing the Google Oauth</h2>
        <h5>
          <span>
            <mark>
              * Make Sure you have added the callback url and origin in google
              developer console
            </mark>
          </span>
        </h5>
        <section>
          <div>
            <input
              onChange={(e) => setClientId(e.target.value)}
              type="text"
              required
              name="clientId"
              id=""
            />
          </div>
          <div
            style={{
              display: "flex",
              marginRight: "20px",
            }}
          >
            <Button
              variant="success"
              type="success"
              onClick={() => setClientAdded(true)}
            >
              Add client ID
            </Button>
            <Button variant="danger" type="danger" onClick={reset}>
              Reset
            </Button>
          </div>
          {clientAdded ? (
            <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
      {clientAdded ? (
        <div>
          <pre>
            <code>{googleData}</code>
          </pre>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Google;
