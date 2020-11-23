import React from 'react';
import {FooterContainer,
        FooterWrap,
        FooterLinksWrapper,
        FooterLinksContainer, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink,
        Line} from './FooterElements'
function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Navigation</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/books">Books</FooterLink>
                                <FooterLink to="/reviews">Reviews</FooterLink>
                                <FooterLink to="/news">News</FooterLink>
                                <FooterLink to="/contacts">Contacts</FooterLink>
                        </FooterLinkItems>
                        <Line></Line>
                        <FooterLinkItems>
                            <FooterLinkTitle>Categories</FooterLinkTitle>
                                <FooterLink>Art</FooterLink>
                                <FooterLink>Biography</FooterLink>
                                <FooterLink>Business</FooterLink>
                                <FooterLink>Chick Lit</FooterLink>
                                <FooterLink>Children's</FooterLink>
                                <FooterLink>Chrisian</FooterLink>
                                <FooterLink>Classics</FooterLink>
                                <FooterLink>Comics</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>                  
                        <FooterLinkTitle></FooterLinkTitle>                  
                                <FooterLink>Contemporary</FooterLink>
                                <FooterLink>Cookbooks</FooterLink>
                                <FooterLink>Crime</FooterLink>
                                <FooterLink>Ebooks</FooterLink>
                                <FooterLink>Fantasy</FooterLink>
                                <FooterLink>Fiction</FooterLink>
                                <FooterLink>Gay and Lesbian</FooterLink>
                                <FooterLink>Graphic Novels</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                        <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink>Historical Fiction</FooterLink>
                                <FooterLink>History</FooterLink>
                                <FooterLink>Horror</FooterLink>
                                <FooterLink>Humor and Comedy </FooterLink>
                                <FooterLink>Manga</FooterLink>
                                <FooterLink>Memoir</FooterLink>
                                <FooterLink>Music</FooterLink>
                        </FooterLinkItems>
                        <Line></Line>
                        <FooterLinkItems>
                            <FooterLinkTitle>Follow us</FooterLinkTitle>
                                <FooterLink >Facebook</FooterLink>
                                <FooterLink>Twitter</FooterLink>
                                <FooterLink>RSS</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;