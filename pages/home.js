
import { useSession, getSession, signIn, signOut } from "next-auth/client";
import Router from "next/router";
import {useEffect, React} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [ session, loading ] = useSession();
  
  if (typeof window !== 'undefined' && !session ) return null;
  console.log("TEM SESSAO", session);

  // useEffect(() => {
  //   if(!session)
  //     Router.push("/login");
  //     else return "";
  // }, []);

  if(session){
    return (
      <div>
        <Header
          color="transparent"
          brand="Mount Zonah Medical Center"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image="/img/profile-bg.jpg" />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={session?.user?.image}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{session?.username}</h3>
                      <h6>BEM VINDO(A) !</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis dignissim nibh, sit amet lobortis felis convallis venenatis. In laoreet vitae lectus ac tempor. Sed a magna justo. Fusce egestas eget dolor vel faucibus. Praesent faucibus diam et urna congue molestie. Aliquam tristique lorem nibh, laoreet vulputate orci ornare sed. Aliquam erat volutpat. Fusce pretium neque quam..{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="/img/examples/studio-1.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/studio-2.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="/img/examples/studio-5.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/studio-4.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="/img/examples/olu-eletu.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/clem-onojeghuo.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/cynthia-del-rio.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="/img/examples/mariya-georgieva.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/clem-onojegaw.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="/img/examples/mariya-georgieva.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/studio-3.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="/img/examples/clem-onojeghuo.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/olu-eletu.jpg"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="/img/examples/studio-1.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }else{
    return <></>
  }
}

export const getServerSideProps = async (req) => {
  const session = await getSession(req);
  if (!session) {
      const { res } = req;
      res.setHeader("location", "/login");
      res.statusCode = 307;
      res.end();
      return;
  }

  return {
      props: {},
  };
};
