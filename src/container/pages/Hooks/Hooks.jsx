import React, { Component, useEffect, useState } from "react";

// class Hooks extends Component {
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `Title Change : ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.title = `Title Change : ${this.state.count}`;
//   }

//   componentWillUnmount() {
//     document.title = "Belajar Reactjs";
//   }

//   render() {
//     return (
//       <div>
//         <p>Nilai saya saai ini adalah : {this.state.count}</p>
//         <button
//           onClick={this.onUpdate}
//           className="mr-10 mt-2 mb-2 relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           update nilai plus
//         </button>
//       </div>
//     );
//   }
// }

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Change : ${count}`;
    return () => {
      document.title = "Belajar Reactjs";
    };
  });

  return (
    <div>
      <p>Nilai saya saai ini adalah : {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mr-10 mt-2 mb-2 relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        update nilai plus
      </button>
    </div>
  );
};
export default Hooks;
