import React, { useState, useEffect ,useRef } from "react";

import HtmlEditor, { Toolbar, Item } from "devextreme-react/html-editor";
import ButtonGroup, { Item as ButtonItem } from "devextreme-react/button-group";

import "devextreme/ui/html_editor/converters/markdown";
import {markup} from '../../data';

const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "360pt"];
const fontValues = [
  "Arial",
  "Courier New",
  "Georgia",
  "Impact",
  "Lucida Console",
  "Tahoma",
  "Times New Roman",
  "Verdana",
];
const defaultSelectedItemKeys = ["Html"];
const Content = React.forwardRef((props, ref) => {

// export default function Content(props) {
  // const sendData = () => {
  //   props.parentCallback("Message from Child");
  // };
  const htmlEditor=props.inputRef;
  const headerValues = [false, 1, 2, 3, 4, 5];
  const [valueContent, setValueContent] = useState(markup);
  const [editorValueType, setEditorValueType] = useState("html");


  const [popupVisible , SetPopupVisible] = useState(false)

  const toolbarButtonOptions = () => {
    SetPopupVisible(!popupVisible)
  }

  function valueChanged(e) {
    setValueContent(e.value);
  }

  const valueTypeChanged = (e) => {
    setEditorValueType(e.addedItems[0].text.toLowerCase());
  };
  
  const data1=['name', 'email', 'phone'];

  const onTest = (item) => {
    // console.log(htmlEditor.current.instance.getSelection(), "item");
    htmlEditor.current.instance.insertText(
      htmlEditor.current.instance.getSelection().index,
      item,
      {
        bold: true,
        color: "green",
      }
    );
  };
  return (
    <>
      <div className="widget-container" >
        <HtmlEditor ref={htmlEditor}
            height={1000}
            value={valueContent}
            valueType={editorValueType}
            onValueChanged={valueChanged}
          >
            <Toolbar>
              <Item name="undo" />
              <Item name="redo" />
              <Item name="separator" />
              <Item name="size" acceptedValues={sizeValues} />
              <Item name="font" acceptedValues={fontValues} />
              <Item name="separator" />
              <Item name="bold" />
              <Item name="italic" />
              <Item name="strike" />
              <Item name="underline" />
              <Item name="separator" />
              <Item name="alignLeft" />
              <Item name="alignCenter" />
              <Item name="alignRight" />
              <Item name="alignJustify" />
              <Item
                name="header"
                acceptedValues={headerValues}
              />
              <Item name="separator" />
              <Item name="color" />
              <Item name="background" />
              <Item><ul>{
                data1.map(function(num,index) {
                  return(
                    <li onClick={()=>onTest(num)} key={index}>{num}</li>
                  )
              })
              }</ul></Item>
            </Toolbar>
          </HtmlEditor>
        
          <div className="options">
            <ButtonGroup
              onSelectionChanged={valueTypeChanged}
              defaultSelectedItemKeys={defaultSelectedItemKeys}
            >
              <ButtonItem text="Html" />
              <ButtonItem text="Markdown" />
            </ButtonGroup>
            <div className="value-content">{valueContent}</div>
          </div>
      </div>    
    </>
  );
});
export default Content;