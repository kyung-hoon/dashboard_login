import React, { Component } from 'react';
import '../App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class DashBoardLoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
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
  
  onClick_elText4 = (ev) => {
    // Go to screen 'Sign in'
    this.props.appActions.goToScreen('signin', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText5 = (ev) => {
    // Go to screen 'Find PASSWORD'
    this.props.appActions.goToScreen('findpassword', { transitionId: 'fadeIn' });
  
  }

  onClick_Login=()=>{ // 로그인 버튼 눌렀을 떄 api 요청 로직 작성 AXIOS 사용
    console.log('hello!');
  }

  onKeyEnterPress = e =>{ //
    if(e.key === 'Enter'){
      this.onClick_Login();
    }
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
    const style_elText = { //최상단 텍스트
      fontSize: 30.4,
      color: '#040b37',
      textAlign: 'center',
     };
    const style_elText2 = { //ID 텍스트
      fontSize: 19.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField = { // id 텍스트 필드
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elText3 = { //패스워드 텍스트
      fontSize: 19.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField2 = { //패스워드 텍스트 필드
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
      WebkitTextSecurity: 'disc'
     };
    
    const style_elButton = { //로그인 버튼
      display: 'block',
      color: 'white',
      textAlign: 'center',
     };
    const style_elText4 = { //sign in 
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elText5 = { //forgot password?
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen DashBoard_LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="systemFontBold" style={style_elText}>
              <div>{this.props.locStrings.dashboard_login_text_630715}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="systemFontBold" style={style_elText2}>
              <div>{this.props.locStrings.dashboard_login_text2_252143}</div>
            </div>
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.dashboard_login_field_65146} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className="elText3">
            <div className="systemFontBold" style={style_elText3}>
              <div>{this.props.locStrings.dashboard_login_text3_507457}</div>
            </div>
          </div>
          
          <div className="elField2">
            <input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.dashboard_login_field2_856872} onChange={this.textInputChanged_field2} value={this.state.field2} onKeyPress= {this.onKeyEnterPress} />
          </div>
          
          <div className="flowRow flowRow_DashBoard_LoginScreen_elButton_20826">
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" >
              {this.props.locStrings.dashboard_login_button_20826}
            </Button>
          </div>
          
          </div>
          <div className="elText4">
            <div className="systemFontRegular" style={style_elText4} onClick={this.onClick_elText4} >
              <div>{this.props.locStrings.dashboard_login_text4_469382}</div>
            </div>
          </div>
          
          <div className="elText5">
            <div className="baseFont" style={style_elText5} onClick={this.onClick_elText5} >
              <div>{this.props.locStrings.dashboard_login_text5_238024}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
