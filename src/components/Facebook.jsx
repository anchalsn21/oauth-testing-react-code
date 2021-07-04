import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Button } from "react-bootstrap";
function Facebook() {
  let [appId, setAppId] = useState("");
  let [appIdAdded, setAppIdAdded] = useState(false);
  const [fbData, setFbData] = useState(null);

  const handleLogin = (res) => {
    setFbData(JSON.stringify(res, undefined, 2));
  };

  const reset = () => {
    setAppIdAdded(false);
    setFbData(null);
    setAppId(null);
  };

  return (
    <>
      <div className="oauth__content">
        <h2>This is for the testing Facebook Oauth</h2>
        <h5>
          <span>
            <mark>
              * Make Sure you have added the callback url and origin in Facebook
              developer console
            </mark>
          </span>
        </h5>
        <section>
          <div>
            <input
              onChange={(e) => setAppId(e.target.value)}
              type="text"
              required
              name="appId"
              id=""
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                marginRight: "20px",
              }}
            >
              <Button
                variant="success"
                type="success"
                onClick={() => setAppIdAdded(true)}
              >
                Add App ID
              </Button>
              <Button variant="danger" type="danger" onClick={reset}>
                Reset
              </Button>
            </div>
            {appIdAdded ? (
              <div>
                <FacebookLogin
                  appId={appId}
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={handleLogin}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
      {appIdAdded ? (
        <div>
          <pre>
            <code>{fbData}</code>
          </pre>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Facebook;
