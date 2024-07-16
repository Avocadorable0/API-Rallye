import React from "react";
import { Outlet,Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  display: inline;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Layout =()=>{
    return (
        <div>
            <Nav>
                <Ul>
                    <Li><StyledLink to="/">Home</StyledLink></Li>
                    <Li><StyledLink to="/about">About</StyledLink></Li>
                </Ul>
            </Nav>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;