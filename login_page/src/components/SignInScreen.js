import React, { Component } from 'react';
import '../App.css';
import btn_icon_back_signin from '../images/btn_icon_back_signin.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class SignInScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field3 = (event) => {
    this.setState({field3: event.target.value});
  }
  
  textInputChanged_field4 = (event) => {
    this.setState({field4: event.target.value});
  }
  
  textInputChanged_field5 = (event) => {
    this.setState({field5: event.target.value});
  }
  
  textInputChanged_field6 = (event) => {
    this.setState({field6: event.target.value});
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      fontSize: 12.4,
      color: 'white',
      textAlign: 'center',
     };
    const style_elText2 = {
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField3 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elText4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField4 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elText5 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField5 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elText6 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField6 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton2 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
     };
    
    return (
      <div className="AppScreen SignInScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="systemFontRegular" style={style_elText}>
              <div>{this.props.locStrings.signin_text_797109}</div>
            </div>
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.signin_field_477510} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className="elButton">
            <Button className="systemFontRegular" style={style_elButton}  color="accent" >
              {this.props.locStrings.signin_button_529729}
            </Button>
          </div>
          
          <div className="elText2">
            <div className="systemFontRegular" style={style_elText2}>
              <div>{this.props.locStrings.signin_text2_278861}</div>
            </div>
          </div>
          
          <div className="elField2">
            <input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.signin_field2_827850} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          </div>
          
          <div className="elText3">
            <div className="baseFont" style={style_elText3}>
              <div>{this.props.locStrings.signin_text3_554504}</div>
            </div>
          </div>
          
          <div className="elField3">
            <input className="baseFont" style={style_elField3} type="text" placeholder={this.props.locStrings.signin_field3_593651} onChange={this.textInputChanged_field3} value={this.state.field3}  />
          </div>
          
          <div className="elText4">
            <div className="baseFont" style={style_elText4}>
              <div>{this.props.locStrings.signin_text4_139079}</div>
            </div>
          </div>
          
          <div className="elField4">
            <input className="baseFont" style={style_elField4} type="text" placeholder={this.props.locStrings.signin_field4_529678} onChange={this.textInputChanged_field4} value={this.state.field4}  />
          </div>
          
          <div className="elText5">
            <div className="baseFont" style={style_elText5}>
              <div>{this.props.locStrings.signin_text5_473806}</div>
            </div>
          </div>
          
          <div className="elField5">
            <input className="baseFont" style={style_elField5} type="text" placeholder={this.props.locStrings.signin_field5_136275} onChange={this.textInputChanged_field5} value={this.state.field5}  />
          </div>
          
          <div className="elText6">
            <div className="baseFont" style={style_elText6}>
              <div>{this.props.locStrings.signin_text6_940565}</div>
            </div>
          </div>
          
          <div className="elField6">
            <input className="baseFont" style={style_elField6} type="text" placeholder={this.props.locStrings.signin_field6_370659} onChange={this.textInputChanged_field6} value={this.state.field6}  />
          </div>
          
          <div className="elButton2">
            <Button className="actionFont" style={style_elButton2}  color="accent" >
              {this.props.locStrings.signin_button2_125502}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Sign in</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_signin} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
