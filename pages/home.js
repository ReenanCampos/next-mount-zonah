
import { useRouter } from 'next/router';
import {useEffect, React} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Image from 'next/image'

import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import axios from 'axios'

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const [ session, loading ] = useSession()
  const router = useRouter();
  
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const navMain = classNames(classes.main, classes.mainRaised);
  return (<div>
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
        <div className={navMain}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={'/img/favicon.png'}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{session?.user?.name}</h3><br></br>
                      <h4 className={classes.title}>{session?.user?.email}</h4>
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
                        tabButton: "Pacientes",
                        tabIcon: AssignmentIndIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <Image
                                alt="..."
                                src="/img/examples/studio-1.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/studio-2.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Image
                                alt="..."
                                src="/img/examples/studio-5.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/studio-4.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Exames",
                        tabIcon: ReceiptIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <Image
                                alt="..."
                                src="/img/examples/olu-eletu.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/clem-onojeghuo.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/cynthia-del-rio.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Image
                                alt="..."
                                src="/img/examples/mariya-georgieva.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/clem-onojegaw.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Médicos",
                        tabIcon: LocalHospitalIcon,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <Image
                                alt="..."
                                src="/img/examples/mariya-georgieva.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/studio-3.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Image
                                alt="..."
                                src="/img/examples/clem-onojeghuo.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/olu-eletu.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
                              />
                              <Image
                                alt="..."
                                src="/img/examples/studio-1.jpg"
                                className={navImageClasses}
                                layout='fill'
                                objectFit='contain'
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
      </div>);
  
}

export async function getServerSideProps({req}) {
  
  let headers = {}
  const session = await getSession({ req });
  console.log("s",session);
  if (session) {
    headers = {Authorization: `Bearer ${session.jwt}`};
  }else{
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props:{},
    }
  }

  let journals = [];
  try {
    // let {data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/journals`, {
    //   headers: headers,
    // })
    journals = [];
  } catch (e) {
    console.log('caught error', e);
    journals = [];
  }
  
  return {props: {journals: journals}}  
}
