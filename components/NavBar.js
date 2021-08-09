import { Button, Dialog } from "@material-ui/core";
import axios from "axios";
import { useContext, useState } from "react";

import { AuthContext } from "../context/auth";
import Register from "../components/Register";
import { useRouter } from "next/router";

export default function NavBar({ username, role }) {
  const context = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const logout = () => {
    axios
      .post("/api/users/logout")
      .then((res) => {
        if (res.status == 200) {
          context.logout();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const viewSubmissions = (id) => {
    router.push(`/${id}`);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">{username}</div>

            <div>
              <Button
                variant="contained"
                className="button"
                style={{
                  backgroundColor: "#232323",
                  color: "#ffffff",
                }}
                onClick={logout}
              >
                Logout
              </Button>
              {role && role === "admin" && (
                <Button
                  variant="contained"
                  className="button"
                  color="primary"
                  style={{
                    color: "#ffffff",
                    margin: "0 1em",
                  }}
                  onClick={handleClickOpen}
                >
                  register
                </Button>
              )}
              {role &&
                role === "user" &&
                (router.pathname === "/" ? (
                  <Button
                    variant="contained"
                    className="button"
                    color="secondary"
                    style={{
                      color: "#ffffff",
                      margin: "0 1em",
                    }}
                    onClick={() => viewSubmissions(context.user.id)}
                  >
                    view submissions
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    className="button"
                    color="secondary"
                    style={{
                      color: "#ffffff",
                      margin: "0 1em",
                    }}
                    onClick={() => router.push("/")}
                  >
                    back to home
                  </Button>
                ))}
            </div>
          </nav>
        </div>
      </header>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="sign-in form"
      >
        <Register setOpen={setOpen} />
      </Dialog>
    </>
  );
}
