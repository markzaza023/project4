import { useState } from "react";
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Jumbotron, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import Slider from 'infinite-react-carousel';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <Container>
     <img src= "https://www.cmru.ac.th/assets/images/cmru-logo-min.png"></img>
    <h1> Welcome to CMRU </h1>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">หน้าแรก</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">หน้าบ้าน</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">เกี่ยวกับฉัน</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">ติดต่อ</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Slider dots autoplay>
    <div>
      <img src= "https://www.cmru.ac.th/assets/images/banners/th/03-02-2021/26c8b10dc51e25adeb818e575d44287c3f15b1b3.png" alt="รูปแรก"/>
    </div>
    <div>
    <img src= "https://www.cmru.ac.th/assets/images/banners/th/29-12-2020/355e723cf01db446a3ad5daa70225bb1901936d1.png" alt="รูปแรก"/>
    </div>
    <div>
    <img src= "https://www.cmru.ac.th/assets/images/banners/th/04-02-2021/5781919f63882117a2c1233753b37f1a36d7ef05.png" alt="รูปแรก"/>
    </div>
    <div>
    <img src= "https://www.cmru.ac.th/assets/images/banners/th/06-01-2021/98ffb400b8efa9c2c1ef328aa3ddbbb011049e41.png" alt="รูปแรก"/>
    </div>
    <div>
    <img src= "https://www.cmru.ac.th/assets/images/banners/th/03-02-2021/26c8b10dc51e25adeb818e575d44287c3f15b1b3.png" alt="รูปแรก"/>
    </div>
  </Slider>
    </div>
      
    <h1>Home Page</h1>
      </Container>
    </div>
  );
};

export default Home;
