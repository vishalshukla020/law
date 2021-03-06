import { Button, Dialog } from "@material-ui/core";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";

import { AuthContext } from "../context/auth";
import Register from "../components/Register";
import { useRouter } from "next/router";

import { CircularProgress } from "@material-ui/core";

export default function NavBar({ username, role }) {
  const context = useContext(AuthContext);

  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const logout = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 10000);

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
            <div className="logo">
              <Image
                src="/logo.png"
                alt="logo"
                height={65}
                width={65}
                layout="intrinsic"
              />
              {username}
            </div>

            <div>
              {!submitting ? (
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
              ) : (
                <CircularProgress />
              )}
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

              {role && role === "admin" && router.pathname !== "/logs" && (
                <Button
                  variant="contained"
                  className="button"
                  style={{ background: "#388E3C" }}
                  onClick={() => router.push("/logs")}
                >
                  Logs
                </Button>
              )}
              {role &&
                role === "admin" &&
                router.pathname !== "/admin-panel" &&
                router.pathname !== "/admin-panel/new-forms" && (
                  <Button
                    variant="contained"
                    color="secondary"
                    className="button"
                    onClick={() => router.push("/admin-panel")}
                  >
                    back to home
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
