import "./styles.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const handleclick1 = () => {
    setOpen(!open);
  };

  var q = new Date();
  var currentDate = new Date(q.getFullYear(), q.getMonth(), q.getDate());

  const handChange = (event) => {
    setState(event.target.value);
  };

  const dateChange = (event) => {
    const date = Date.parse(event.target.value);

    setDate(date);

    // return dueDate
  };

  const handClick = () => {
    setValue(state);
    const list = document.getElementById("ul");
    const inputValue = document.getElementById("addon-wrapping");
    const inputDate = document.getElementById("inputDate");

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const check = document.createElement("input");
    const msg = document.createElement("label");
    const dateInList = document.createElement("label");

    list.appendChild(li);
    li.textContent = state;
    li.setAttribute("class", "list-group-item");
    li.appendChild(dateInList);
    li.appendChild(check);
    li.appendChild(delBtn);
    li.appendChild(msg);
    li.style.paddingLeft = "50px";

    dateInList.textContent = "Due Date : " + inputDate.value;
    dateInList.style.marginLeft = "50px";

    check.setAttribute("type", "checkbox");
    check.style.marginLeft = "50px";
    // check.style.marginRight = '50px'
    check.style.width = "20px";
    check.style.height = "20px";

    delBtn.setAttribute("class", "btn btn-danger");
    delBtn.textContent = "Delete";
    delBtn.style.width = "fit-content";
    delBtn.style.marginLeft = "50px";

    msg.style.marginLeft = "50px";

    inputValue.value = "";
    setState("");

    delBtn.addEventListener("click", () => {
      list.removeChild(li);
      li.removeChild(delBtn);
    });

    check.addEventListener("change", () => {
      const temp = msg.textContent;
      if (check.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
        msg.textContent = temp;
      }
    });

    if (currentDate > date) {
      li.style.border = "2px solid yellow";
      msg.textContent = "Due date is Passed!!!";
      msg.style.color = "red";
      msg.style.fontWeight = "bolder";
    } else {
      console.log("Due Date is yet to come");
    }
  };

  return (
    <div className="App">
      <button className="Todo" onClick={handleclick1}>
        Todo App
      </button>
      {open && (
        <>
          <h1
            className={"display-1"}
            style={{ marginTop: "20px", fontSize: "50px" }}
          >
            TO-DO LIST
          </h1>
          <div
            className={"input-group flex-nowrap"}
            style={{ width: "80%", margin: "auto" }}
          >
            <input
              type="text"
              onChange={handChange}
              className={"form-control input-group-text"}
              id="addon-wrapping"
              placeholder=""
              aria-label="Username"
              aria-describedby="addon-wrapping"
              style={{ width: "200px", marginTop: "15px" }}
            />
          </div>

          <div>
            <input
              type={"date"}
              onChange={dateChange}
              style={{ marginTop: "25px" }}
              id={"inputDate"}
            ></input>
          </div>

          <button
            type="button"
            onClick={handClick}
            className={"btn btn-outline-success"}
            style={{ width: "100px", marginTop: "25px" }}
          >
            Add
          </button>

          <ul
            id={"ul"}
            style={{ listStyle: "none", textAlign: "start", padding: "50px" }}
            className={"list-group"}
          ></ul>
        </>
      )}
    </div>
  );
}

export default App;
