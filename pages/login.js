

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";

import { useRouter } from 'next/router';
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import axios from 'axios';
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [ session, loading ] = useSession()
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  

  //---
  const router = useRouter();

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Mount Zonah Medical Center"
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    {/* <div className={classes.socialLine}>
                      <Link href="/api/auth/signin">
                        <Button
                        justIcon
                        color="transparent"
                          onClick={(e) => {
                            e.preventDefault();
                            signIn();
                          }}
                        >
                          <i className={"fab fa-discord"} />
                        </Button>
                      </Link>


                    </div> */}
                  </CardHeader>
                  {/* <p className={classes.divider}>Ou</p> */}
                  <CardBody>

                  {/* {!session && <> */}
                  {/* <button onClick={() => signIn()}>Entrar</button></>} */}
                    {/* <CustomInput
                      labelText="Email ..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "email",
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password ..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "password",
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    /> */}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit" onClick={() => signIn()}>
                      Entrar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );

}

export async function getServerSideProps({req}) {
  
  let headers = {}
  const session = await getSession({ req });
  if (session) {
    headers = {Authorization: `Bearer ${session.jwt}`};
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
      props:{},
    }
  }

  return {props: {}}  
}