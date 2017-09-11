import React from 'react';

class App extends React.Component {
   
   render() {
      return (
         <div className="container">
    		<Header/>
     		<Content/>
         </div>
      );
   }
}

class Header extends React.Component {
	 

   render() {
      return (
          <div className="header clearfix">
        	<nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">easyStart React</h3>
      </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
           <Jumbotron />
           <Contentwrap />
           <Footer />
         </div>
      );
   }
}

class Jumbotron extends React.Component {
	constructor(props) {
	super(props);
		
	this.state = {
	     header: "Jumbotron heading from state...",
	     content: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. from state..."
	  }

	}

	updateState() {
      alert('clicked');
   }
	
   render() {
      return (
        <div className="jumbotron">
	        <h1 className="display-3">{this.state.header}</h1>
	        <p className="lead">{this.state.content}</p>
	        <p><a className="btn btn-lg btn-success" href="#" role="button" onClick = {this.updateState}>Sign up today</a></p>
      	</div>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
        <footer className="footer">
        	<p>&copy; Vikram Rajput 2017</p>
      	</footer>
      );
   }
}

class Contentwrap extends React.Component{
	constructor() {
    super();
		
      this.state = {
         data: 
         [
            {
               "heading":'Subheading 1',
               "description":"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
            },

			{
               "heading":'Subheading 2',
               "description":"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
            },
            {
               "heading":'Subheading 3',
               "description":"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
            },
            {
               "heading":'Subheading 4',
               "description":"Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
            },
         ]
      }
   }
	
	render(){
		return(
			<div className="row marketing">
				{this.state.data.map((person, i) => <Contentdata key = {i}  data = {person} />)}
			</div>
			);
	}
}


class Contentdata extends React.Component {
   render() {
      return (
			<div className="col-lg-6">
        		<h4>{this.props.data.heading}</h4>
				<p>{this.props.data.description}</p>
        	</div>
      		);
   }
}

export default App;