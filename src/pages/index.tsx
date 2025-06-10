import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled, { keyframes } from "styled-components"

// Animation discrète d'apparition
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  flex-direction: column;
  font-family: "Georgia", serif;
`

const Logo = styled.h1`
  font-size: 3.5rem;
  font-weight: 100;
  letter-spacing: 0.05em;
  margin: 0;
  line-height: 1.2;
  animation: ${fadeIn} 4.2s ease-out forwards;
`

const SubText = styled.div`
  font-size: 2.18rem;
  margin-top: -0.15em;
  padding-left: 7px;
  letter-spacing: 0.22em;
  font-weight: 200;
  opacity: 0.9;
  animation: ${fadeIn} 4.4s ease-out forwards;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageContainer>
      <Logo>SHHH</Logo>
      <SubText>STUDIO</SubText>
    </PageContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>SHHH Studio</title>
