import { Grid } from "@material-ui/core";
import Image from "next/image";

import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} style={{ position: "relative" }}>
        <Image src="/2853458.jpg" layout="fill" objectFit="cover"  priority/>
      </Grid>
      <Grid item xs={6}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
