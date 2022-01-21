import React, { useState, useRef } from "react";

import HtmlEditor, { Toolbar, Item } from "devextreme-react/html-editor";
import ButtonGroup, { Item as ButtonItem } from "devextreme-react/button-group";
import { markup } from "../../data";

import "devextreme/ui/html_editor/converters/markdown";

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

const Content = React.forwardRef((props, ref) =>  {

  const htmlEditor=props.inputRef;//Nhận ref từ props ở cha

  const [valueContent, setValueContent] = useState(markup);


  const [editorValueType, setEditorValueType] = useState("html");

  function valueChanged(e) {
      
    setValueContent(e.value);
  }

  const valueTypeChanged = (e) => {
    setEditorValueType(e.addedItems[0].text.toLowerCase());
  };

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
      <div className="widget-container">
        <HtmlEditor ref={htmlEditor} // gán biến cho ref
          height={500}
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
            <Item name="separator" />
            <Item name="color" />
            <Item name="background" />
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