import { View } from 'react-native';
import React, { ReactNode } from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View>{children}</View>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
