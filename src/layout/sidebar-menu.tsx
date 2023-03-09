import { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  Divider,
} from '@mui/material';
import NextLink from 'next/link';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 10
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold; 
      color: white; 
      line-height: 1.4;
    }
`,
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: 5;

          .MuiBadge-standard {
            background: white;
            font-size:14px;
            font-weight: bold;
            text-transform: uppercase;
            color: white;
          }
        }
    
        .MuiButton-root {
          display: flex; 
          background-color: transparent;
          width: 100%;
          justify-content: flex-start; 

          .MuiButton-startIcon,
          .MuiButton-endIcon { 

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: yellow;
            font-size: 14px;
            margin-right:5px;
          }
          
          .MuiButton-endIcon { ;
            margin-left: auto;
            opacity: .8;
            font-size: 14px;
          }

         
          &:hover{
            color: #fce100 ;
          } 
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right:5;
          }
        }

        .dir-rt{
          direction:rtl;
        }

        a{
          color:white ;
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: 6px;
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: 6px;

              .MuiBadge-root {
                right: 5;
              }

              &:before {
                content: ' ';
                background:yellow;
                opacity: 0; 
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: 5px;
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`,
);

function SidebarMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
        <SubMenuWrapper>
          <List
            sx={{
              direction: 'rtl',
              marginTop: '13px',
            }}
            className="p-0"
            component="div"
          >
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/' ? 'active-tab' : ''}
              >
                <NextLink href="/" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Home
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/pages' ? 'active-tab' : ''}
              >
                <NextLink href="/pages" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Pages
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/companies' ? 'active-tab' : ''}
              >
                <NextLink href="/companies" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Companies
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/products' ? 'active-tab' : ''}
              >
                <NextLink href="/products" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Products
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/leads' ? 'active-tab' : ''}
              >
                <NextLink href="/leads" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Leads
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/newsLetter' ? 'active-tab' : ''}
              >
                <NextLink href="/newsLetter" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    NewsLetter
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <Divider
              sx={{
                background: 'gray',
              }}
            />
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/users' ? 'active-tab' : ''}
              >
                <NextLink href="/users" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Users
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/settings' ? 'active-tab' : ''}
              >
                <NextLink href="/settings" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Settings
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
            <ListItem className={'cus-pad'} component="div">
              <Box
                padding="0px 22px"
                component="div"
                className={currentRoute === '/logout' ? 'active-tab' : ''}
              >
                <NextLink href="/logout" passHref>
                  <Button
                    disableRipple
                    component="a"
                    //onClick={closeSidebar}
                  >
                    Log out
                  </Button>
                </NextLink>
              </Box>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
