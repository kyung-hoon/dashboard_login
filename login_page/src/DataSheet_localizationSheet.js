import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text_630715";
    item['en'] = "DashBoard";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text2_252143";
    item['en'] = "ID";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text3_507457";
    item['en'] = "PASSWORD";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_button_20826";
    item['en'] = "Login";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text4_469382";
    item['en'] = "Sign in";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text5_256214";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text5_21143";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "dashboard_login_text5_238024";
    item['en'] = "forgot password?";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_text_797109";
    item['en'] = "ID";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_button_896867";
    item['en'] = "중복확인";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_text2_278861";
    item['en'] = "PASSWORD";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_text3_554504";
    item['en'] = "PASSWORD CONFIRM";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_text4_139079";
    item['en'] = "NAME";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_text5_473806";
    item['en'] = "EMAIL";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_text6_940565";
    item['en'] = "NICKNAME";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_button2_125502";
    item['en'] = "sign in";
    
    item = {};
    this.items.push(item);
    item['key'] = "signin_button_529729";
    item['en'] = "confirm";
    
    item = {};
    this.items.push(item);
    item['key'] = "findpassword_text_318268";
    item['en'] = "ID";
    
    item = {};
    this.items.push(item);
    item['key'] = "findpassword_text2_774348";
    item['en'] = "EMAIL";
    
    item = {};
    this.items.push(item);
    item['key'] = "findpassword_text3_599786";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "findpassword_button_208355";
    item['en'] = "Find Password";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
