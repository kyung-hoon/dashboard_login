export default class DataSheetBase {
  constructor(id, updateCb) {
    this.id = id;
    this.updateCb = updateCb;
    this.items = [];
    this.requestedKeyPath = '';

    this.makeDefaultItems();
  }

  makeDefaultItems() {
    // subclasses can override
  }



  addItem(item, options) {
    let key = 1;
    if (this.items.length > 0) {
      key += this.items[this.items.length - 1].key;
    }
    item.key = key;
    this.items.push(item);
  }

  removeItem(item, options) {
    this.items = this.items.filter(i => i.key !== item.key);
  }

  replaceItemByRowIndex(idx, newItem, options) {
    if (idx < 0 || idx >= this.items.length)
      return;
    this.items.splice(idx, 1, newItem);
  }

  replaceItemByKey(key, newItem, options) {
    const idx = this.rowIndexForKey(key);
    if (idx < 0)
      return;
    this.replaceItemByRowIndex(idx, newItem, options);
  }


  // -- utility methods

  rowIndexForKey(key) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].key === key)
        return i;
    }
    return -1;
  }

  loadFromJson(json) {
    function setupArrayKeys(json) {
      for (var i = 0; i < json.length; i++) {
        if (json[i].key === undefined)
          json[i].key = i;
      }
    }

    if (Array.isArray(json)) {
      setupArrayKeys(json);
      this.items = json;
    }
    else if (json) {
      var keyPath = this.requestedKeyPath;
      if ( !keyPath || keyPath.length < 1) {
        if ( !json.key) json.key = 0;
        this.items = [ json ];
      } else {
        var pathComps = keyPath.split('.');
        for (var comp of pathComps) {
          if ( !json.hasOwnProperty(comp)) break;
          json = json[comp];
        }
        if (Array.isArray(json)) {
          setupArrayKeys(json);
          this.items = json;
        } else {
          if ( !json.key) json.key = 0;
          this.items = [ json ];
        }
      }
    }
    else {
      this.items = [];
    }
  }

  expandSlotTemplateString(query, slots, outUsedSlotsArray /*optional*/) {

    if (query.length < 1)
      return "";

    let scanIndex = 0;
    let expanded = "";
    while (scanIndex < query.length) {
      let index = query.indexOf("$slot(", scanIndex);
      if (index === -1) {
        index = query.length;
      }
      expanded += query.substring(scanIndex, index);
      scanIndex = index;

      if (index === query.length)
        break;

      scanIndex += "$slot(".length;

      index = query.indexOf(")", scanIndex);
      if (index !== -1) {
        let slotRefStr = query.substring(scanIndex, index);
        const firstChar = slotRefStr.charAt(0);
        if (firstChar === '\'' || firstChar === '"') {
          slotRefStr = slotRefStr.substring(1, slotRefStr.length - 1);
        }
        const slotValue = slots[slotRefStr] || '';
        expanded += slotValue;

        index += ')'.length;

        if (outUsedSlotsArray && !outUsedSlotsArray.includes(slotRefStr)) {
          outUsedSlotsArray.push(slotRefStr);
        }
      }
      scanIndex = (index === -1) ? query.length : index;
    }
    return expanded;
  }

}
