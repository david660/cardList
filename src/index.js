import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Box() {
  return (
    <div className="box">
      <TitleBox/>
      <List/>
    </div>
  )
}

function TitleBox() {
  return (
    <div className="titlebox">
      <h4 className="title-word">Phone features</h4>
      <p className="three-dots">...</p>
    </div>
  )
}

function List() {
  return (
    <div className="listBox">
      <ListItems word="subwoofer"/>
      <ListItems word="non-porous, washable"/>
      <ListItems word="Wings"/>
      <ListItems word="Beveled Bazel"/>
      <ListItems word="Bezeled Bevel"/>
      <ListItems word="Seedless"/>
    </div>
  )
}

function ListItems(prop) {
  return (
    <div className="list-item">
      <p className="shift">{prop.word}</p>
    </div>
  )
}

ReactDOM.render(<Box/>, document.getElementById("root"))