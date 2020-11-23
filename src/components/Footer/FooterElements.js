import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const FooterContainer= styled.footer`
background-color: #323232;

`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width:1369;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width:820px){
    padding-top: 32px;
}

`

export const FooterLinksWrapper = styled.div`
display: flex;
@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width:160px;
box-sizing:border-box;
color: #fff;


@media screen and (max-width:420px){
    margin: 0 auto;
    padding:10px;
    width:100%;
}
`

export const FooterLinkTitle = styled.h1`
font-size: 18px;
margin-bottom:16px;
text-transform: uppercase;

`

export const FooterLink = styled(Link)`
color:#7B7B7B;
text-decoration:none;
margin-bottom:0.5rem;
font-size: 14px;

&:hover{
    color:#82B808;
    transition: 0.3s ease-out
}

`

export const Line = styled.div`
width:1px;
background-color:rgba(0,0,0,0.3);
height:100%;
`
