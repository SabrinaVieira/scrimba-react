// ReactDOM.render(
//     // <h1>Helo everyone</h1>, document.getElementById("root")
//     // <h1>Helo hell</h1>, document.querySelector("#root")
//     <div>
// 						<ul>
// 								<li>
// 									<p> 1</p>
// 								</li>
// 								<li>
// 									<p> 2</p>
// 								</li>
// 						</ul>
//     </div>,
//      document.querySelector("#root")
// )

 // ReactDOM.render(
	// <h1 className = "header">This is an imperative way to program!</h1>,
	//  document.getElementById("root")
	// 	)

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

const navbar = (
	<nav>
					<h1>Bob's Bistro</h1>
					<ul>
									<li>Menu</li>
									<li>About</li>
									<li>Contact</li>
					</ul>
	</nav>
)

ReactDOM.render(navbar, document.getElementById("root"))