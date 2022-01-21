import React, { useState, useEffect } from "react";
import HtmlEditor, { Toolbar, Item } from "devextreme-react/html-editor";
import ButtonGroup, { Item as ButtonItem } from "devextreme-react/button-group";
import "devextreme/ui/html_editor/converters/markdown";
import "./Editor.module.css";
import { Markup } from "../../data";

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

function Editor(props) {
  const {tendonvi} = props;
  const [valueContent, setValueContent] = useState("<p></p>");
  const [editorValueType, setEditorValueType] = useState("html");
  const [newState, setNewState] = useState(tendonvi);
  const [newState2, setNewState2] = useState();

  useEffect(()=>{
    setNewState(tendonvi);
  },[tendonvi])

  useEffect(()=>{
    setNewState(newState2);
  },[newState2])

  const valueChanged = (e) => {
    console.log(e.value);
    // setValueContent(e.value);
  };

  const valueTypeChanged = (e) => {
    setValueContent(e.addedItems[0].text.toLowerCase());
  };

  const newMarkup = (props) => {
    console.log(props);
  };

  const newF = (state) => {
    if(typeof(tendonvi) != undefined){
      return Markup(tendonvi)
    }
  }
  const [isValue, setIsValue] = useState({});

  var newFunction = () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  useEffect(() => {
    const abcd = async () => {
      const result = await newFunction();
      const { abilities } = result;
      setIsValue({ ten: "213", ngay: 20 });
    };
    abcd();
  }, []);

  
console.log(newState);
  return (
    <div className="widget-container">
      <HtmlEditor
        height={300}
        // value={Markup(newState)}
        valueType={editorValueType}
        // onValueChanged={(e) => setNewState2('12')}
        // defaultValue={Markup(newState)}
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

      {/* <div className="options">
        <ButtonGroup
          onSelectionChanged={valueTypeChanged}
          defaultSelectedItemKeys={defaultSelectedItemKeys}
        >
          <ButtonItem text="Html" />
          <ButtonItem text="Markdown" />
        </ButtonGroup>
        <div className="value-content">{valueContent}</div>
      </div> */}
    </div>
  );
}

export default Editor;
