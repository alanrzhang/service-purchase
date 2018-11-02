import React from 'react';
import styled from 'styled-components';

const rhBlack = "#1b1b1d";
const rhGreen = "#21ce99";
const rhOrange = "#f45531";

const MenuBottomBarWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background: ${props => props.open ? "white" : rhBlack}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
    height: 168px;
    width: 180px;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    justify-content: space-evenly;
`

// const Text13Div = styled.div `
//     font-size: 16px;
//     font-weight: 600;
//     font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
//     align: left;
//     margin-left: 12px;
//     margin-top: 4px;
//     color : ${props => {
//       if (!props.clicked) {
//         if (props.open) {
//           return "black"
//         } else {
//           return "white"
//         }
//       } else {
//         if (props.up) {
//           return rhGreen
//         } else {
//           return rhOrange
//         }
//       }
//     }}
// `

const Text13Div = styled.div `
    font-size: 16px;
    font-weight: 600;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    align: left;
    margin-left: 12px;
    margin-top: 4px;
    color : ${(props) => {
      if (props.index === props.clicked) {
        return props.up ? rhGreen : rhOrange;
      } else {
        return props.open ? "black" : "white";
      }
    }};
`

class MenuButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Text13Div onClick={this.props.clickHandler} clicked={this.props.clicked} up={this.props.up} open={this.props.open} index={this.props.index}>{this.props.text}</Text13Div>
    )
  }
}

class MenuBottomBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 1
    }
  }
  clickHandler(index) {
    console.log(index)
    this.setState({
      clicked: index
    })
  }
  render() {
    return (
      <MenuBottomBarWrapper open={this.props.open} up={this.props.up}>
        <MenuButton text='Market Order' open={this.props.open} up={this.props.up} clickHandler={(e) => {this.clickHandler.bind(this)(1)}} clicked={this.state.clicked} index={1}/>
        <MenuButton text='Limit Order' open={this.props.open} up={this.props.up} clickHandler={(e) => {this.clickHandler.bind(this)(2)}} clicked={this.state.clicked} index={2}/>
        <MenuButton text='Stop Loss Order' open={this.props.open} up={this.props.up} clickHandler={(e) => {this.clickHandler.bind(this)(3)}} clicked={this.state.clicked} index={3}/>
        <MenuButton text='Stop Limit Order' open={this.props.open} up={this.props.up} clickHandler={(e) => {this.clickHandler.bind(this)(4)}} clicked={this.state.clicked} index={4}/>
      </MenuBottomBarWrapper>
    )
  }
}

export default MenuBottomBar;